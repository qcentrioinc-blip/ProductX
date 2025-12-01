import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// ContactPage (Gradient Luxury - Style A)
// Uses Tailwind CSS + Framer Motion for animations

export default function Contact2() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    industry: "",
    services: [] as string[],
    message: "",
    file: null as File | null,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesOptions = [
    "Product Demo",
    "Consulting",
    "Support",
    "Partnership",
    "Pricing",
    "Other",
  ];

  const industries = [
    "Banking & Finance",
    "Healthcare",
    "High Tech",
    "AI Optimization",
    "Retail",
    "Manufacturing",
    "Other",
  ];

  const countries = ["United States", "India", "United Kingdom", "Germany", "Australia", "Other"];

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (success) {
      const t = setTimeout(() => setSuccess(null), 4000);
      return () => clearTimeout(t);
    }
  }, [success]);

  const toggleService = (s: string) => {
    setForm((prev) => {
      const exists = prev.services.includes(s);
      return { ...prev, services: exists ? prev.services.filter((x) => x !== s) : [...prev.services, s] };
    });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) e.email = "Valid email required";
    if (!form.industry) e.industry = "Please select an industry";
    if (!form.services.length) e.services = "Choose at least one service";
    if (!form.message.trim()) e.message = "Tell us briefly what you need";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      // Simulate API call
      await new Promise((r) => setTimeout(r, 900));
      setSuccess("Thanks — we received your message and will get back to you soon.");
      setForm({ name: "", email: "", phone: "", company: "", country: "", industry: "", services: [], message: "", file: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } finally {
      setSubmitting(false);
    }
  };

  // Floating nodes data for the animation - Increased sizes
  const nodes = [
    { id: 1, size: 20, color: "from-purple-400 to-pink-400", delay: 0 },
    { id: 2, size: 16, color: "from-cyan-400 to-blue-400", delay: 0.5 },
    { id: 3, size: 18, color: "from-emerald-400 to-teal-400", delay: 1 },
    { id: 4, size: 12, color: "from-amber-400 to-orange-400", delay: 1.5 },
    { id: 5, size: 22, color: "from-rose-400 to-red-400", delay: 2 },
    { id: 6, size: 15, color: "from-indigo-400 to-purple-400", delay: 2.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#2b1348] to-[#4b2b7f] py-16 px-6 md:px-12 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Animated Glass Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white/6 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Contact form</h2>
              <div className="text-sm text-indigo-100/80">We'll reply within 1-2 business days</div>
            </div>

            <form ref={formRef} className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Full name</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className={`mt-1 w-full rounded-md border px-3 py-2 bg-white/6 text-sm placeholder-indigo-200 ${errors.name ? 'ring-2 ring-red-400' : 'border-white/10'}`}
                    placeholder="Jane Doe"
                  />
                  {errors.name && <div className="text-xs text-red-400 mt-1">{errors.name}</div>}
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    value={form.email}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className={`mt-1 w-full rounded-md border px-3 py-2 bg-white/6 text-sm placeholder-indigo-200 ${errors.email ? 'ring-2 ring-red-400' : 'border-white/10'}`}
                    placeholder="you@company.com"
                  />
                  {errors.email && <div className="text-xs text-red-400 mt-1">{errors.email}</div>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <motion.input whileFocus={{ scale: 1.01 }} value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="mt-1 w-full rounded-md border px-3 py-2 bg-white/6 text-sm border-white/10" placeholder="Optional" />
                </div>

                <div>
                  <label className="text-sm font-medium">Company</label>
                  <motion.input whileFocus={{ scale: 1.01 }} value={form.company} onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))} className="mt-1 w-full rounded-md border px-3 py-2 bg-white/6 text-sm border-white/10" placeholder="Company name" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Country</label>
                  <motion.select whileFocus={{ scale: 1.01 }} value={form.country} onChange={(e) => setForm((p) => ({ ...p, country: e.target.value }))} className="mt-1 w-full rounded-md border px-3 py-2 text-sm bg-white/6 border-white/10">
                    <option value="">Select country</option>
                    {countries.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </motion.select>
                </div>

                <div>
                  <label className="text-sm font-medium">Industry</label>
                  <motion.select whileFocus={{ scale: 1.01 }} value={form.industry} onChange={(e) => setForm((p) => ({ ...p, industry: e.target.value }))} className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${errors.industry ? 'ring-2 ring-red-400' : 'border-white/10'} bg-white/6`}>
                    <option value="">Select industry</option>
                    {industries.map((i) => (
                      <option key={i} value={i}>{i}</option>
                    ))}
                  </motion.select>
                  {errors.industry && <div className="text-xs text-red-400 mt-1">{errors.industry}</div>}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">What do you need?</label>
                <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {servicesOptions.map((s) => (
                    <motion.button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      whileTap={{ scale: 0.98 }}
                      className={`text-sm px-3 py-2 rounded-full border ${form.services.includes(s) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white/6 text-indigo-100 border-white/10'}`}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
                {errors.services && <div className="text-xs text-red-400 mt-2">{errors.services}</div>}
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  rows={5}
                  className={`mt-1 w-full rounded-md border px-3 py-2 text-sm ${errors.message ? 'ring-2 ring-red-400' : 'border-white/10'} bg-white/6`}
                  placeholder="Tell us more about your requirements..."
                />
                {errors.message && <div className="text-xs text-red-400 mt-1">{errors.message}</div>}
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-indigo-100/80 max-w-sm">We respect your privacy — we'll only use your details to contact you.</div>

                <div className="flex items-center gap-3">
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.02 }}
                    className="px-6 py-2 rounded-md bg-gradient-to-r from-[#6d28d9] to-[#06b6d4] text-white font-medium shadow-lg hover:shadow-2xl disabled:opacity-60"
                  >
                    {submitting ? 'Sending...' : 'Submit'}
                  </motion.button>
                </div>
              </div>

              {success && <div className="mt-3 text-sm text-green-300">{success}</div>}
            </form>
          </div>

          {/* small decorative footer */}
          <div className="mt-4 text-xs text-indigo-100/70">Prefer direct contact? Email <a href="mailto:hello@company.com" className="underline text-indigo-200">hello@company.com</a> or call +1 (555) 123-4567</div>
        </motion.div>

        {/* Right: Animated Tech Illustration - No glass container, larger elements */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[600px] lg:h-[700px] flex items-center justify-center"
        >
          {/* Animated Connections - Larger */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {[
              { x1: 50, y1: 50, x2: 350, y2: 350 },
              { x1: 100, y1: 200, x2: 300, y2: 150 },
              { x1: 150, y1: 80, x2: 250, y2: 320 },
              { x1: 80, y1: 300, x2: 320, y2: 100 },
              { x1: 120, y1: 180, x2: 280, y2: 220 },
            ].map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#lineGradient)"
                strokeWidth="3"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                }}
              />
            ))}
          </svg>

          {/* Floating Animated Nodes - Larger */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className={`absolute bg-gradient-to-r ${node.color} rounded-full shadow-2xl`}
              style={{
                width: node.size,
                height: node.size,
                left: `${15 + (node.id * 15) % 65}%`,
                top: `${10 + (node.id * 10) % 75}%`,
              }}
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}

          {/* Industry Icons - Larger */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-12 relative z-10">
              {/* Banking & Finance */}
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">💰</span>
                </div>
                <p className="text-lg font-semibold text-white">Banking & Finance</p>
              </motion.div>

              {/* Healthcare */}
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 100 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-red-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">🏥</span>
                </div>
                <p className="text-lg font-semibold text-white">Healthcare</p>
              </motion.div>

              {/* High Tech */}
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-lg font-semibold text-white">High Tech</p>
              </motion.div>

              {/* AI Optimization */}
              <motion.div
                className="text-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 100 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl flex items-center justify-center shadow-2xl">
                  <span className="text-4xl">🤖</span>
                </div>
                <p className="text-lg font-semibold text-white">AI Optimization</p>
              </motion.div>
            </div>
          </div>

          {/* Floating text - Larger */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 mt-4">
              Connecting Industries
            </h3>
            <p className="text-lg text-white/70">Through Innovative Technology Solutions</p>
          </motion.div>
        </motion.div>
      </div>

      {/* subtle animated underline */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="max-w-7xl mx-auto mt-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>
    </div>
  );
}