import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import {   H1, P } from '../../../styles/Typography';
import { Link } from 'react-router-dom';
import Navbar from '../../Global/Navbar/Navbar';
// import LiquidEther from './LiquidEther';
 
 

interface IndustryCardProps {
  title: string;
  image: string;
  isActive: boolean;
  url: string;
}


const IndustryCard: React.FC<IndustryCardProps> = ({ title, image, isActive, url }) => (
   <a 
    href={url}
    target="_blank"                
    rel="noopener noreferrer"       
    className={`block relative overflow-hidden rounded-lg transition-all duration-500 ${
      isActive ? 'scale-110 shadow-2xl opacity-100' : 'scale-100 opacity-50'
    }`}
    style={{ height: '150px' }}
  >
    <img 
      src={image} 
      alt={title}
      className="w-full h-full object-cover"
    />
  </a>
);

export default function InteractiveHeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries = [
    {
      title: 'Banking and Finance',
      image: '/LandingPageNew/BNFImage.png',
      url: '/industries/banking-and-finance',
      // bgColor: '#000000'
    },
    {
      title: 'EHR and PMS',
      image: '/LandingPageNew/EHRImage.png',
      url: '/industries/ehr-and-pms',
      // bgColor: '#1a1a2e'
    },
    {
      title: 'High Tech',
      image: '/LandingPageNew/HighTechImage.png',
      url: '/industries/high-tech',
      // bgColor: '#16213e'
    },
    {
      title: 'AI Optimization',
      image: '/LandingPageNew/AI.png',
      url: '/industries/ai-optimization',
      // bgColor: '#0f3460'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const newIndex = Math.min(
          Math.floor(scrollProgress * industries.length),
          industries.length - 1
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [industries.length]);

  return (
    <div className="min-h-screen bg-black">
   
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/95 backdrop-blur-sm">
        <div className="max-w-8xl mx-4 px-6 py-1 flex items-center justify-between">
          <Link to="/">
          <div className="text-white  font-bricolage font-bold text-xl bg-neutral-700 px-4 py-2 rounded">
          
            LOGO
          </div>
          </Link>
          <nav className="flex items-center gap-8">
            <Link to="/platform" className="text-white hover:text-gray-300 transition">Platform</Link>
            <Link to="/marketplace" className="text-white hover:text-gray-300 transition">Marketplace</Link>
            <Link to="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium  transition flex items-center gap-2">
              CONTACT US <ArrowUpRight size={18} />
            </button>
           </Link>
          </nav>
        </div>
      </header> */}
      <Navbar/>

      {/* Hero Section */}
      <div 
        ref={sectionRef}
        className="relative transition-colors duration-700"
        
      >
        <div className="sticky lg:top-10 h-full py-20 flex justify-between items-center pt-20">
          <div className="max-w-8xl lg:mx-10 px-4  ">
            <div className="grid grid-cols-1  lg:grid-cols-[2fr_0.8fr] justify-between items-start">
              {/* Left Content */}
              <div className="space-y-4  ">
                <H1 className="  text-white leading-tight">
                
                  End‑to‑End IT, AI, <br className='md:block hidden'/> and Cloud Solution
                </H1>
                <P className="text-gray-300 max-w-xl leading-relaxed  w-full  ">
                  Qnest Global helps businesses modernize with AI, CRM, HRM, and secure cloud platforms. Our teams design, build, and manage solutions that improve efficiency, cut risk, and support long‑term growth.
                </P>
                <Link to="/contact">
                <button className="bg-white text-black font-quicksand px-8 py-3 rounded-2xl font-semibold text-sm hover:bg-gray-100 transition flex items-center gap-2 mt-6">
                 Get Your Custom Proposal <ArrowUpRight size={18} />
                </button>
                </Link>
 
                                {/* Stats */}
                <div className="flex font-bricolage  gap-20 lg:pt-44">
                  <div className="flex gap-4">
                    <div className="w-1 bg-white"></div>
                    <div>
                      <div className="text-5xl font-bold text-white">30% + ROI</div>
                      <div className="text-white text-sm mt-2">AI-Driven Outcomes</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-white"></div>
                    <div>
                      <div className="text-5xl font-bold text-white">24/7</div>
                      <div className="text-white text-sm mt-2">End-to-End Delivery</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-white"></div>
                    <div>
                      <div className="text-5xl font-bold text-white">99.9%</div>
                      <div className="text-white text-sm mt-2">Secure,Scalable Cloud</div>
                    </div>
                  </div>
                </div>
              </div>


              {/* Right Content - Industry Cards */}
              <div className="space-y-3 flex flex-col pl-60 items-end w-full">
                {industries.map((industry, index) => (
                  <IndustryCard
                    key={index}
                    title={industry.title}
                    image={industry.image}
                    url={industry.url}
                    isActive={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}