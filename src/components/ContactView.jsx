import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, MapPin, Clock, Github, Linkedin, Twitter, FileText, 
  Send, Sparkles, AlertCircle, Apple, Monitor, Play
} from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function ContactView({ onOpenModal }) {
  // Local Form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const result = await emailjs.send(
      "service_6qtbofq",
      "template_r8t9v3g",
      {
        name: formState.name,
        email: formState.email,
        message: formState.message,
      },
      "QptqINc9lvM4pPT1b"
    );

    console.log("Email sent:", result);

    setFormSubmitted(true);

    setFormState({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("EmailJS Error:", error);

    alert(
      error?.text ||
      error?.message ||
      "Failed to send email"
    );
  } finally {
    setLoading(false);
  }
};

  const handleDownloadResume = () => {
    onOpenModal('resume');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-8 md:py-16"
    >
      {/* Page Heading Headers */}
      <div className="max-w-3xl mb-12 select-none">
        <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FF6000] block mb-3 font-semibold">
          GET IN TOUCH
        </span>
        <h1 className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl tracking-tight leading-[1.1] mb-5">
          Let's build something <br className="hidden sm:block"/>
          <span className="text-[#FF6000]">extraordinary</span> together.
        </h1>
        <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
          Have a project in mind, a technical question, or just want to say hi? My inbox is always open.
        </p>
      </div>

      {/* Two Columns Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-stretch mb-12">
        
        {/* Left Card Form layout (7 of 12 columns wide) */}
        <div className="lg:col-span-7 bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full border-b border-neutral-200/80 px-1 py-2 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent transition-colors font-sans"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full border-b border-neutral-200/80 px-1 py-2 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                  YOUR MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full border-b border-neutral-200/80 px-1 py-3 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent resize-none transition-colors font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF6000] text-white py-3.5 px-6 font-display font-medium text-xs tracking-wider font-bold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/10 active:scale-98 transition-all duration-150 disabled:bg-neutral-300 select-none cursor-pointer"
              >
                {loading ? 'SENDING...' : 'SEND MESSAGE'}
                <Play className="h-3 w-3 fill-current rotate-0 stroke-[3]" />
              </button>

            </form>
          ) : (
            <div className="text-center py-12 max-w-md mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-[#FF6000] ring-4 ring-orange-50 shadow-inner mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h4 className="font-display font-black text-neutral-900 text-xl mb-2">Message Sent!</h4>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Thank you, <strong>{formState.name}</strong>. I've received your query and will reach back out to you at <strong>{formState.email}</strong> within 24 business hours!
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="inline-flex rounded-xl bg-neutral-900 text-white font-medium text-xs px-6 py-2.5 hover:bg-neutral-800 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}

        </div>

        {/* Right Sidebar Details layout (5 of 12 columns wide) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">
          
          {/* Top segment availability notice card */}
          <div className="border border-neutral-150 rounded-2xl p-4 bg-white shadow-xs flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6000]" />
            </span>
            <div className="text-xs text-neutral-700 font-medium font-sans">
              <strong>Current Availability</strong>: Available for new React & UI/UX projects.
            </div>
          </div>

          {/* Contact coordinates list */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <Mail className="h-4 w-4" />
              </div>
              <span>hello@dev-eloper.io</span>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Remote / New York, EST</span>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <Clock className="h-4 w-4" />
              </div>
              <span>Mon — Fri: 09:00 - 18:00</span>
            </div>
          </div>

          {/* Connect social boxes layout */}
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="#github" 
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans"
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">GITHUB</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </a>

            <a 
              href="#linkedin" 
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">LINKEDIN</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </a>

            <a 
              href="#twitter" 
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans"
            >
              <div className="flex items-center gap-2">
                <Twitter className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">TWITTER</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </a>

            <button 
              onClick={handleDownloadResume}
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans cursor-pointer text-left"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">RESUME</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </button>
          </div>

          {/* Workstation mock iMac code container */}
          <div className="relative h-44 bg-[#1E1E1E] rounded-2xl border border-neutral-800 p-4 font-mono text-[9px] text-neutral-400 flex flex-col justify-between overflow-hidden shadow-lg select-none">
            <div className="flex items-center gap-1 border-b border-neutral-800/60 pb-2">
              <Monitor className="h-4 w-4 text-orange-500" />
              <span className="text-neutral-500 text-[8px]">iMac_Workspace (React.js)</span>
            </div>
            
            <div className="space-y-1 my-3 overflow-hidden italic leading-relaxed">
              <span className="text-neutral-600 font-bold block">// Code environment rendering live</span>
              <span className="text-emerald-500 block">import &#123; createRoot &#125; from "react-dom/client";</span>
              <span className="text-neutral-300 block">const AppNode = document.getElementById("root");</span>
              <span className="text-orange-400 block">createRoot(AppNode).render(&lt;Workspace /&gt;);</span>
            </div>

            <div className="flex items-center justify-between text-[8px] text-neutral-600">
              <span>9,102 LOC total loaded</span>
              <span className="text-emerald-500 font-bold">● dev-node-active</span>
            </div>
          </div>

        </div>

      </div>
    </motion.div>
  );
}
