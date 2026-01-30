import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Send, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import GoToTopButton from '../GoToTopButton';

interface Message {
    id: string;
    role: 'user' | 'bot';
    content: string;
    timestamp: number;
}

const STORAGE_KEY = 'productx-chat-history';

// const formatTime = (timestamp: number) => {
//     const date = new Date(timestamp);
//     return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
// };

const ChatbotButton: React.FC = () => {
    const [showBottomChat, setShowBottomChat] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showExpandedChat, setShowExpandedChat] = useState(false);
    const [, setIsScrolled] = useState(false);
    const [userClosedChat, setUserClosedChat] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'bot',
            content: "Hello! I'm the **ProductX assistant**. How can I help you today?",
            timestamp: Date.now(),
        },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const modalMessagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedMessages = localStorage.getItem(STORAGE_KEY);
        if (savedMessages) {
            try {
                const parsed = JSON.parse(savedMessages);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    setMessages(parsed);
                }
            } catch (error) {
                console.error('Failed to load chat history:', error);
            }
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
        }
    }, [messages]);

    useEffect(() => {
        if (window.innerWidth >= 640) {
            setShowBottomChat(true);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 200;

            if (scrollPosition > threshold) {
                setIsScrolled(true);
                if (showBottomChat && !showExpandedChat) {
                    setShowBottomChat(false);
                }
            } else {
                setIsScrolled(false);
                if (!showBottomChat && !showExpandedChat && !showModal && !userClosedChat && window.innerWidth >= 640) {
                    setShowBottomChat(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showBottomChat, showExpandedChat, showModal, userClosedChat]);

    useEffect(() => {
        if (showExpandedChat) {
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
        if (showModal) {
            modalMessagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, showExpandedChat, showModal]);

    const handleClearChat = () => {
        const welcomeMsg: Message = {
            id: 'welcome',
            role: 'bot',
            content: "Hello! I'm the **ProductX assistant**. How can I help you today?",
            timestamp: Date.now(),
        };
        setMessages([welcomeMsg]);
        localStorage.removeItem(STORAGE_KEY);
        setShowExpandedChat(false);
    };

    const handleSendMessage = async (e?: React.FormEvent | undefined, question?: string) => {
        e?.preventDefault();

        const content = question || inputValue;

        if (!content.trim() || isLoading) return;

        // Show expanded chat when first message is sent
        if (messages.length === 1 && !showModal) {
            setShowExpandedChat(true);
        }

        const userMsg: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: content.trim(),
            timestamp: Date.now(),
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
        setIsLoading(true);

        const botMsgId = (Date.now() + 1).toString();
        const initialBotMsg: Message = {
            id: botMsgId,
            role: 'bot',
            content: '',
            timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, initialBotMsg]);

        try {
            const response = await fetch('http://localhost:5000/api/chat/stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: userMsg.content }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const reader = response.body?.getReader();
            const decoder = new TextDecoder();

            if (!reader) {
                throw new Error('No reader available');
            }

            let accumulatedText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6).trim();
                        if (data === '[DONE]') break;

                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.text) {
                                accumulatedText += parsed.text;
                                setMessages((prev) =>
                                    prev.map((msg) =>
                                        msg.id === botMsgId
                                            ? { ...msg, content: accumulatedText }
                                            : msg
                                    )
                                );
                            }
                        } catch (e) {
                            // Skip invalid JSON
                        }
                    }
                }
            }

            if (!accumulatedText) {
                throw new Error('No response received from server');
            }
        } catch (error: any) {
            console.error('Failed to send message:', error);
            setMessages((prev) =>
                prev.map((msg) =>
                    msg.id === botMsgId
                        ? {
                            ...msg,
                            content: error.message || "Sorry, something went wrong. Please try again.",
                        }
                        : msg
                )
            );
        } finally {
            setIsLoading(false);
        }
    };

    // const handleMinimize = () => {
    //     setShowExpandedChat(false);
    //     setShowBottomChat(true);
    //     setUserClosedChat(false);
    // };

    // const handleCloseBottomChat = () => {
    //     setShowBottomChat(false);
    //     setUserClosedChat(true);
    // };

    const handleFloatingButtonClick = () => {
        setUserClosedChat(false);
        setShowModal(true);
    };

    return createPortal(
        <>
            {/* STEP 1: Initial Bottom Center Chat (Input + Suggestions) */}
            {/* <AnimatePresence>
                {showBottomChat && !showExpandedChat && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                            className="fixed bottom-[200px] sm:bottom-[200px] right-4 sm:right-[calc((100%-1000px)/2+16px)] z-[10001]"
                        >
                            <button
                                onClick={handleCloseBottomChat}
                                className="p-2.5 sm:p-3 bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl border border-gray-200"
                                aria-label="Close chat"
                            >
                                <X size={18} className="sm:w-5 sm:h-5 text-gray-700" strokeWidth={2.5} />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed bottom-0 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-5xl z-[10000] sm:px-4 pb-0"
                        >
                            <div
                                className="relative rounded-t-2xl sm:rounded-t-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
                                style={{
                                    background: 'linear-gradient(to right, rgba(6, 47, 194, 0.6) 0%, rgba(6, 112, 211, 0.6) 100%)'
                                }}
                            >
                                <div className="px-4 pt-10 pb-4 sm:px-10 sm:pt-12 sm:pb-6">
                                    <div className="relative mb-4 sm:mb-5">
                                        <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-zinc-400">
                                            <Sparkles size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                                        </div>
                                        <input
                                            type="text"
                                            value={inputValue}
                                            onChange={(e) => setInputValue(e.target.value)}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter' && !e.shiftKey) {
                                                    e.preventDefault();
                                                    handleSendMessage();
                                                }
                                            }}
                                            placeholder="Ask me about products, features, and pricing..."
                                            disabled={isLoading}
                                            className="w-full bg-white text-zinc-700 rounded-lg sm:rounded-xl pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 text-sm sm:text-[15px] focus:outline-none focus:ring-0 border-0 disabled:opacity-80 placeholder:text-zinc-400 shadow-md"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!inputValue.trim() || isLoading}
                                            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 p-1.5 text-zinc-300 hover:text-blue-600 disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                                        >
                                            <Send size={16} className="sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                                        <button
                                            onClick={() => {
                                                setShowExpandedChat(true);
                                                handleSendMessage(undefined, 'Connect me with a sales rep');
                                            }}
                                            className="px-3 py-2.5 sm:px-4 sm:py-3 bg-transparent hover:bg-white/10 text-white text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-white whitespace-nowrap overflow-hidden text-ellipsis"
                                        >
                                            Connect me with a sales rep
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowExpandedChat(true);
                                                handleSendMessage(undefined, 'Show me an Agentforce demo');
                                            }}
                                            className="px-3 py-2.5 sm:px-4 sm:py-3 bg-transparent hover:bg-white/10 text-white text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-white whitespace-nowrap overflow-hidden text-ellipsis"
                                        >
                                            Show me an Agentforce demo
                                        </button>
                                        <button
                                            onClick={() => {
                                                setShowExpandedChat(true);
                                                handleSendMessage(undefined, 'How can Salesforce help my business');
                                            }}
                                            className="px-3 py-2.5 sm:px-4 sm:py-3 bg-transparent hover:bg-white/10 text-white text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-white whitespace-nowrap overflow-hidden text-ellipsis"
                                        >
                                            How can Salesforce help my business
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence> */}

            {/* <AnimatePresence>
                {showExpandedChat && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.1 }}
                            className="fixed bottom-[calc(100vh-50px)] sm:bottom-[calc(100vh-100px)] right-4 sm:right-[calc((100%-1000px)/2+60px)] z-[10002] flex items-center gap-2 sm:gap-3"
                        >
                            <button
                                onClick={handleClearChat}
                                className="p-2.5 sm:p-3 bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl border border-gray-200"
                                aria-label="Clear chat"
                            >
                                <Trash2 size={18} className="sm:w-5 sm:h-5 text-gray-700" strokeWidth={2.5} />
                            </button>
                            <button
                                onClick={handleMinimize}
                                className="p-2.5 sm:p-3 bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl border border-gray-200"
                                aria-label="Minimize chat"
                            >
                                <Minus size={18} className="sm:w-5 sm:h-5 text-gray-700" strokeWidth={2.5} />
                            </button>
                            <button
                                onClick={() => {
                                    setShowExpandedChat(false);
                                    setShowBottomChat(false);
                                }}
                                className="p-2.5 sm:p-3 bg-white hover:bg-gray-100 rounded-full transition-all shadow-lg hover:shadow-xl border border-gray-200"
                                aria-label="Close chat"
                            >
                                <X size={18} className="sm:w-5 sm:h-5 text-gray-700" strokeWidth={2.5} />
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed bottom-0 left-0 right-0 sm:left-1/2 sm:-translate-x-1/2 w-full sm:max-w-4xl h-[90vh] sm:h-[85vh] z-[10001] sm:px-4 pb-0"
                        >
                            <div className="w-full h-full rounded-t-2xl sm:rounded-2xl shadow-2xl bg-white overflow-hidden">
                                <div className="h-full flex flex-col">
                                    
                                    <div className="bg-white border-b border-zinc-200 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between flex-shrink-0">
                                        <div className="flex items-center gap-2">
                                            <span className="text-base sm:text-lg font-semibold text-zinc-900">Agentforce</span>
                                            <button className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="10" />
                                                    <path d="M12 16v-4m0-4h.01" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-0.5 sm:gap-1">
                                            <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors">
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="6" r="1.5" />
                                                    <circle cx="12" cy="12" r="1.5" />
                                                    <circle cx="12" cy="18" r="1.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    
                                    <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 flex-shrink-0">
                                        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                                            <span className="text-zinc-900">How can </span>
                                            <span className="text-blue-600">Agentforce</span>
                                            <span className="text-zinc-900"> help?</span>
                                        </h1>
                                    </div>

                                    <div
                                        className="flex-1 overflow-y-auto overflow-x-hidden pl-4 pr-5 py-4 sm:pl-6 sm:pr-8 sm:py-6 bg-[#EEF2FF]"
                                        data-lenis-prevent
                                        style={{
                                            scrollbarWidth: 'thin',
                                            scrollbarColor: '#d4d4d8 transparent',
                                            WebkitOverflowScrolling: 'touch',
                                            maxHeight: 'calc(90vh - 280px)', // Ensures proper height constraint
                                            overscrollBehaviorY: 'contain'
                                        }}
                                    >
                                        <div className="text-center mb-4 sm:mb-6">
                                            <span className="text-xs sm:text-sm text-zinc-500">Agentforce joined</span>
                                        </div>

                                        <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                    <circle cx="9" cy="10" r="1" fill="white" />
                                                    <circle cx="15" cy="10" r="1" fill="white" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-zinc-200 max-w-[85%]">
                                                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                                                        Hi, I'm Agentforce, an AI agent that can answer your Salesforce questions and connect you with our Sales Experts. This experience, powered entirely by Agentforce, keeps improving daily! Ask me things like, 'Can I chat with a Sales Expert?' or 'What is CRM?'
                                                    </p>
                                                </div>
                                                <div className="mt-1 ml-1">
                                                    <span className="text-xs text-zinc-500">Agentforce • {formatTime(messages[0].timestamp)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {messages.slice(1).map((msg) => (
                                            <motion.div
                                                key={msg.id}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`flex mb-4 sm:mb-6 ${msg.role === 'user' ? 'justify-end' : 'justify-start items-start gap-2 sm:gap-3'}`}
                                            >
                                                {msg.role === 'bot' && (
                                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                                            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                            <circle cx="9" cy="10" r="1" fill="white" />
                                                            <circle cx="15" cy="10" r="1" fill="white" />
                                                        </svg>
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <div
                                                        className={`${msg.role === 'user'
                                                            ? 'ml-auto max-w-[85%] px-4 py-3 sm:px-5 sm:py-3.5 bg-blue-600 text-white rounded-2xl rounded-tr-sm shadow-md'
                                                            : 'max-w-[85%] px-3 py-2.5 sm:px-4 sm:py-3 bg-white text-zinc-700 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200'
                                                            }`}
                                                    >
                                                        {msg.role === 'bot' ? (
                                                            <div className="prose prose-sm max-w-none">
                                                                <ReactMarkdown
                                                                    components={{
                                                                        p: ({ children }) => <p className="mb-2 last:mb-0 text-zinc-700">{children}</p>,
                                                                    }}
                                                                >
                                                                    {msg.content || '...'}
                                                                </ReactMarkdown>
                                                            </div>
                                                        ) : (
                                                            <p className="text-xs sm:text-sm">{msg.content}</p>
                                                        )}
                                                    </div>
                                                    <div className={`mt-1 ${msg.role === 'user' ? 'text-right mr-1' : 'ml-1'}`}>
                                                        <span className="text-xs text-zinc-500">
                                                            {msg.role === 'user' ? `Sent: ${formatTime(msg.timestamp)}` : `Agentforce • ${formatTime(msg.timestamp)}`}
                                                        </span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}

                                        {isLoading && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="flex items-start gap-2 sm:gap-3"
                                            >
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                                        <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                        <circle cx="9" cy="10" r="1" fill="white" />
                                                        <circle cx="15" cy="10" r="1" fill="white" />
                                                    </svg>
                                                </div>
                                                <div className="bg-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200">
                                                    <div className="flex gap-1.5">
                                                        <motion.span
                                                            animate={{ y: [0, -6, 0] }}
                                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                                            className="w-2 h-2 bg-zinc-400 rounded-full"
                                                        />
                                                        <motion.span
                                                            animate={{ y: [0, -6, 0] }}
                                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                                                            className="w-2 h-2 bg-zinc-400 rounded-full"
                                                        />
                                                        <motion.span
                                                            animate={{ y: [0, -6, 0] }}
                                                            transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                                                            className="w-2 h-2 bg-zinc-400 rounded-full"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    
                                    <div className="bg-white border-t border-zinc-200 px-3 py-3 sm:px-5 sm:py-4 flex-shrink-0">
                                        <form onSubmit={handleSendMessage} className="flex items-center gap-2 sm:gap-3">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder="Message Agentforce"
                                                disabled={isLoading}
                                                className="flex-1 bg-zinc-100 text-zinc-900 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 disabled:opacity-50 placeholder:text-zinc-400"
                                            />
                                            <button
                                                type="submit"
                                                disabled={!inputValue.trim() || isLoading}
                                                className="p-2.5 sm:p-3 text-blue-600 hover:bg-blue-50 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                                            >
                                                <Send size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence> */}

            <AnimatePresence>
                {/* {((!showBottomChat && !showModal && !showExpandedChat) || (isScrolled && !showExpandedChat && !showModal)) && ( */}
                {!showModal && !showExpandedChat && (
                    <>
                    <GoToTopButton />

                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={handleFloatingButtonClick}
                        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 px-4 py-3 sm:px-5 sm:py-3.5 text-white rounded-full shadow-xl flex items-center gap-2 sm:gap-3 z-[10000] cursor-pointer hover:shadow-2xl transition-all"
                        style={{
                            background: 'linear-gradient(to right, #062fc2 0%, #0670d3 100%)'
                        }}
                        aria-label="Open chat"
                    >
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" stroke="#0670d3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {/* Robot Head Box */}
                                <path d="M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2z" />

                                {/* Robot Smile */}
                                <path d="M9 16c1 .667 2 1 3 1s2 -.333 3 -1" />

                                {/* Left Antenna */}
                                <path d="M9 7l-1 -4" />

                                {/* Right Antenna */}
                                <path d="M15 7l1 -4" />

                                {/* Left Eye */}
                                <path d="M9 12v-1" />

                                {/* Right Eye */}
                                <path d="M15 12v-1" />
                            </svg>
                        </div>



                        {/* <span className="text-sm sm:text-[17px] font-semibold whitespace-nowrap">
                            Ask Agentforce
                        </span> */}
                    </motion.button>

                    </>
                    
                )}
            </AnimatePresence>

            {/* STEP 3: Right Side Modal */}
            <AnimatePresence>
                {showModal && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/20 z-[9999]"
                            onClick={() => setShowModal(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="fixed right-0 top-[70px] bottom-0 w-full sm:max-w-md bg-white z-[10000] shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="bg-white border-b border-zinc-200 px-4 py-3 sm:px-5 sm:py-4 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-base sm:text-lg font-semibold text-zinc-900">Agentforce</span>
                                    <button className="p-1 hover:bg-zinc-100 rounded-full transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <circle cx="12" cy="12" r="10" />
                                            <path d="M12 16v-4m0-4h.01" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex items-center gap-0.5 sm:gap-1">
                                    <button
                                        onClick={handleClearChat}
                                        className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors"
                                        aria-label="Clear chat"
                                    >
                                        <Trash2 size={18} className="sm:w-5 sm:h-5 text-zinc-700" strokeWidth={2} />
                                    </button>
                                    <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors">
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700" fill="currentColor" viewBox="0 0 24 24">
                                            <circle cx="12" cy="6" r="1.5" />
                                            <circle cx="12" cy="12" r="1.5" />
                                            <circle cx="12" cy="18" r="1.5" />
                                        </svg>
                                    </button>
                                    <button className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors hidden sm:block">
                                        <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="p-1.5 sm:p-2 hover:bg-zinc-100 rounded-full transition-colors"
                                    >
                                        <X size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
                                    </button>
                                </div>
                            </div>

                            {/* Title */}
                            <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 shrink-0 border-b border-zinc-100">
                                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-1">
                                    <span className="text-zinc-900">How can </span>
                                    <span className="text-blue-600">Agentforce</span>
                                    <span className="text-zinc-900"> help?</span>
                                </h1>
                            </div>

                            {/* Messages Area - FIXED SCROLLING */}
                            <div
                                className="flex-1 overflow-y-auto overflow-x-hidden pl-4 pr-5 py-4 sm:pl-6 sm:pr-8 sm:py-6 bg-zinc-50"
                                data-lenis-prevent
                                style={{
                                    scrollbarWidth: 'thin',
                                    scrollbarColor: '#d4d4d8 transparent',
                                    overscrollBehaviorY: 'contain'
                                }}
                            >
                                <div className="text-center mb-4 sm:mb-6">
                                    <span className="text-xs sm:text-sm text-zinc-500">Agentforce joined</span>
                                </div>

                                {/* Bot Welcome */}
                                <div className="flex items-start gap-2 sm:gap-3 mb-4 sm:mb-6">
                                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                            <circle cx="9" cy="10" r="1" fill="white" />
                                            <circle cx="15" cy="10" r="1" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="bg-white rounded-2xl rounded-tl-sm px-3 py-2.5 sm:px-4 sm:py-3 shadow-sm border border-zinc-200 max-w-[85%]">
                                        <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                                            Hi, I'm Agentforce, an AI agent that can answer your Salesforce questions and connect you with our Sales Experts. This experience, powered entirely by Agentforce, keeps improving daily! Ask me things like, 'Can I chat with a Sales Expert?' or 'What is CRM?'
                                        </p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                                    <button
                                        onClick={() => handleSendMessage(undefined, 'Connect me with a sales rep')}
                                        className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                                    >
                                        Connect me with a sales rep
                                    </button>
                                    <button
                                        onClick={() => handleSendMessage(undefined, 'Show me an Agentforce demo')}
                                        className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                                    >
                                        Show me an Agentforce demo
                                    </button>
                                    <button
                                        onClick={() => handleSendMessage(undefined, 'How can Salesforce help my business')}
                                        className="w-full px-4 py-2.5 sm:px-5 sm:py-3.5 bg-white hover:bg-zinc-50 text-blue-600 text-xs sm:text-[15px] font-semibold rounded-lg sm:rounded-xl transition-all border-2 border-blue-600 text-left"
                                    >
                                        How can Salesforce help my business
                                    </button>
                                </div>

                                {/* User Messages */}
                                {messages.slice(1).map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex mb-3 sm:mb-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start items-start gap-2 sm:gap-3'}`}
                                    >
                                        {msg.role === 'bot' && (
                                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                                    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                    <circle cx="9" cy="10" r="1" fill="white" />
                                                    <circle cx="15" cy="10" r="1" fill="white" />
                                                </svg>
                                            </div>
                                        )}
                                        <div
                                            className={`px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${msg.role === 'user'
                                                ? 'bg-blue-600 text-white rounded-tr-sm shadow-md'
                                                : 'bg-white text-zinc-700 rounded-tl-sm shadow-sm border border-zinc-200'
                                                }`}
                                        >
                                            {msg.role === 'bot' ? (
                                                <ReactMarkdown
                                                    components={{
                                                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                    }}
                                                >
                                                    {msg.content || '...'}
                                                </ReactMarkdown>
                                            ) : (
                                                <p>{msg.content}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}

                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-start gap-2 sm:gap-3"
                                    >
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5">
                                                <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                <circle cx="9" cy="10" r="1" fill="white" />
                                                <circle cx="15" cy="10" r="1" fill="white" />
                                            </svg>
                                        </div>
                                        <div className="bg-white px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl rounded-tl-sm shadow-sm border border-zinc-200">
                                            <div className="flex gap-1.5">
                                                <motion.span
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                                                    className="w-2 h-2 bg-zinc-400 rounded-full"
                                                />
                                                <motion.span
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }}
                                                    className="w-2 h-2 bg-zinc-400 rounded-full"
                                                />
                                                <motion.span
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }}
                                                    className="w-2 h-2 bg-zinc-400 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={modalMessagesEndRef} />
                            </div>

                            {/* Input Area */}
                            <div className="bg-white border-t border-zinc-200 px-3 py-3 sm:px-5 sm:py-4 shrink-0">
                                <form onSubmit={handleSendMessage} className="flex items-center gap-2 sm:gap-3">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder="Message Agentforce"
                                        disabled={isLoading}
                                        className="flex-1 bg-zinc-100 text-zinc-900 rounded-full px-4 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500 border-0 disabled:opacity-50 placeholder:text-zinc-400"
                                    />
                                    <button
                                        type="submit"
                                        disabled={!inputValue.trim() || isLoading}
                                        className="p-2.5 sm:p-3 text-blue-600 hover:bg-blue-50 rounded-full disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                                    >
                                        <Send size={18} className="sm:w-5 sm:h-5" strokeWidth={2} />
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>,
        document.body

    
    );
};

export default ChatbotButton;
