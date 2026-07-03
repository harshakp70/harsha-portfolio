import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Monitor, Smartphone, Check, AppWindow, Code, Code2, 
  Settings, Database, Shield, BarChart, Activity, Hammer
} from 'lucide-react';

export default function SkillsView({ onOpenModal }) {
  // Blinking cursor state for Code Editor
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-8 md:py-16"
    >
      {/* Page Title & Subheading */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <h1 className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
          Technical Expertise & <span className="text-[#FF6000]">Toolchain.</span>
        </h1>
        <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-sans">
          A specialized stack focused on performance, scalability, and user-centric design. Building robust digital products with modern React architectures.
        </p>
      </div>

      {/* Main Core Stack Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" id="skills-main-cards">
        
        {/* Card 1: Web Development */}
        <div id="skills-web-card" className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#FF6000] items-center justify-center mb-6">
            <Monitor className="h-6 w-6 stroke-[2]" />
          </div>

          <h2 className="font-display font-black text-neutral-900 text-xl sm:text-2xl mb-6">
            Web Development
          </h2>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Framework
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                React / Next.js
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Styling
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                Tailwind CSS
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                State
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                Redux / Zustand
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Language
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                TypeScript
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                Testing
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                Jest / Cypress
              </div>
            </div>

            <div>
              <div className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider mb-1">
                API
              </div>
              <div className="text-sm font-semibold text-neutral-800 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                GraphQL / REST
              </div>
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-50">
            <span className="text-[10px] font-mono font-black tracking-wider px-2.5 py-1 bg-[#FF6000] text-white rounded-md uppercase">
              CORE
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md uppercase">
              SWR
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md uppercase">
              PRISMA
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-wider px-2.5 py-1 bg-neutral-100 text-neutral-600 rounded-md uppercase">
              FRAMERMOTION
            </span>
          </div>
        </div>

        {/* Card 2: Mobile Development */}
        <div id="skills-mobile-card" className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#FF6000] items-center justify-center mb-6">
              <Smartphone className="h-6 w-6 stroke-[2]" />
            </div>

            <h2 className="font-display font-black text-neutral-900 text-xl sm:text-2xl mb-6">
              Mobile Development
            </h2>

            {/* Bullets */}
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 border border-orange-200 text-[#FF6000] flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">React Native</h4>
                  <p className="text-xs text-neutral-500 mt-1">Expertise in building high-performance cross-platform apps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 border border-orange-200 text-[#FF6000] flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Expo Ecosystem</h4>
                  <p className="text-xs text-neutral-500 mt-1">Rapid development and EAS deployment pipelines.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-orange-100 border border-orange-200 text-[#FF6000] flex items-center justify-center mt-0.5">
                  <Check className="h-3.5 w-3.5 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Native Modules</h4>
                  <p className="text-xs text-neutral-500 mt-1">Bridging custom Swift/Kotlin code for specialized features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Editor & Tools Section Block */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        
        {/* Left Side: Mock Code Editor (2 columns width on large screens) */}
        <div className="lg:col-span-2 bg-[#1E1E1E] text-neutral-300 rounded-3xl p-5 md:p-6 shadow-xl border border-neutral-800 font-mono text-xs md:text-sm flex flex-col justify-between overflow-hidden">
          
          {/* Editor Header Tab */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6 font-sans text-neutral-500">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>
            <span className="text-[10px] font-mono tracking-wide text-neutral-400">skills.tsx</span>
            <div className="w-12 h-2" />
          </div>

          {/* Interactive Code Stream lines */}
          <div className="space-y-1.5 overflow-x-auto selection:bg-[#3E3E3E] selection:text-white leading-relaxed">
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">01</span>
              <span><span className="text-[#569CD6]">const</span> <span className="text-[#4FC1FF]">Developer</span> = &#123;</span>
            </div>
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">02</span>
              <span>&nbsp;&nbsp;<span className="text-[#9CDCFE]">coreStack</span>: [<span className="text-[#CE9178]">"React"</span>, <span className="text-[#CE9178]">"TS"</span>, <span className="text-[#CE9178]">"Node"</span>],</span>
            </div>
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">03</span>
              <span>&nbsp;&nbsp;<span className="text-[#9CDCFE]">focus</span>: <span className="text-[#CE9178]">"Scalable Frontend Architectures"</span>,</span>
            </div>
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">04</span>
              <span>&nbsp;&nbsp;<span className="text-[#9CDCFE]">mission</span>: () =&gt; <span className="text-[#CE9178]">"Bridges the gap between code & design"</span></span>
            </div>
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">05</span>
              <span>&#125;</span>
            </div>
            <div className="flex">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">06</span>
              <span></span>
            </div>
            <div className="flex text-neutral-500 italic">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">07</span>
              <span>// Running diagnostics...</span>
            </div>
            <div className="flex text-neutral-300">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">08</span>
              <span>$ npm run optimize-ux</span>
            </div>
            <div className="flex text-[#27C93F] font-bold">
              <span className="text-neutral-600 select-none text-right pr-4 w-8">09</span>
              <span className="flex items-center">
                &gt; Success: Peak performance reached.
                <span className={`inline-block ml-1 h-3.5 w-1.5 bg-[#27C93F] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
              </span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-neutral-800/50 flex justify-between items-center text-[10px] text-neutral-500 font-mono">
            <span>Encoding: UTF-8</span>
            <span>TypeScript React</span>
          </div>

        </div>

        {/* Right Side Stack: Tools Card & Available For Projects Banner */}
        <div className="space-y-6 flex flex-col justify-between">
          
          {/* Tools Card */}
          <div className="bg-white border border-neutral-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <Hammer className="h-4.5 w-4.5 text-[#FF6000]" />
              <h3 className="font-display font-black text-neutral-900 text-base">Tools</h3>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-neutral-50 text-xs">
                <span className="font-semibold text-neutral-700">Git & GitHub</span>
                <span className="font-mono text-[9px] font-black tracking-wider bg-orange-50 text-[#FF6000] px-2 py-0.5 rounded-md uppercase">ADVANCED</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-50 text-xs">
                <span className="font-semibold text-neutral-700">Figma</span>
                <span className="font-mono text-[9px] font-black tracking-wider bg-orange-50 text-[#FF6000] px-2 py-0.5 rounded-md uppercase">EXPERT</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-neutral-50 text-xs">
                <span className="font-semibold text-neutral-700">Jira / Agile</span>
                <span className="font-mono text-[9px] font-black tracking-wider bg-orange-50 text-[#FF6000] px-2 py-0.5 rounded-md uppercase">EXPERT</span>
              </div>
              <div className="flex items-center justify-between py-2 text-xs">
                <span className="font-semibold text-neutral-700">Storybook</span>
                <span className="font-mono text-[9px] font-black tracking-wider bg-orange-50 text-[#FF6000] px-2 py-0.5 rounded-md uppercase">ADVANCED</span>
              </div>
            </div>
          </div>

          {/* Orange/Red CTA Banner: Available for projects */}
          <div className="bg-[#FF6000] text-white rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between h-48 select-none shadow-lg shadow-orange-500/10">
            {/* Simple vector circle layouts under the copy to add visual balance */}
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full border-[10px] border-white/5 pointer-events-none" />
            <div className="absolute right-6 top-6 h-12 w-12 rounded-full border-2 border-white/5 pointer-events-none" />

            <div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-orange-200">Available for projects</span>
              <h3 className="font-display font-black text-xl mt-2 leading-snug">
                Looking for a React specialist to join your team?
              </h3>
            </div>

            <button
              onClick={() => onOpenModal('contact')}
              className="mt-4 self-start bg-white hover:bg-orange-50 text-[#FF6000] font-display font-bold text-xs tracking-wide px-5 py-2.5 rounded-xl transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              GET IN TOUCH
            </button>
          </div>

        </div>

      </div>

      {/* Ecosystem Specializations bottom banner */}
      <div className="pt-8 border-t border-neutral-100 flex flex-col items-center select-none">
        <h4 className="font-display font-black text-neutral-900 text-sm tracking-wide mb-8">
          Ecosystem Specializations
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-neutral-500 text-xs font-semibold w-full">
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-25 border border-neutral-100 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
            <AppWindow className="h-4.5 w-4.5 stroke-[1.5] text-[#FF6000]" />
            <span>AWS / Vercel</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-25 border border-neutral-100 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
            <Database className="h-4.5 w-4.5 stroke-[1.5] text-[#FF6000]" />
            <span>MongoDB / Postgres</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-25 border border-neutral-100 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors">
            <Shield className="h-4.5 w-4.5 stroke-[1.5] text-[#FF6000]" />
            <span>Auth0 / Firebase</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-25 border border-neutral-100 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors col-span-1">
            <BarChart className="h-4.5 w-4.5 stroke-[1.5] text-[#FF6000]" />
            <span>Google Analytics</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 bg-neutral-25 border border-neutral-100 rounded-2xl hover:bg-neutral-50 hover:text-neutral-900 transition-colors col-span-2 sm:col-span-1">
            <Activity className="h-4.5 w-4.5 stroke-[1.5] text-[#FF6000]" />
            <span>Sentry / Datadog</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
