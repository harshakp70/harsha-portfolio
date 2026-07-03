import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, ExternalLink, Cpu, BarChart3, Terminal, Activity, Zap, 
  Smartphone, Database, Shield, Globe, Layers, Eye
} from 'lucide-react';

export default function ProjectsView({ onOpenModal, onOpenProjectModal }) {
  // Mock data representing the 5 grid projects
  const secondaryProjects = [
    {
      id: 'syncro-dashboard',
      title: 'Syncro Dashboard',
      category: 'REACT',
      badges: ['REACT', 'REDUX'],
      description: 'Enterprise-grade analytics dashboard for community managers, featuring automated reporting and multi-platform API integration.',
      linkText: 'View Project',
      type: 'dashboard'
    },
    {
      id: 'automata-cli',
      title: 'Automata CLI',
      category: 'TYPESCRIPT',
      badges: ['TYPESCRIPT', 'NODE.JS'],
      description: 'A specialized command-line interface designed to automate repetitive React Native boilerplate generation and asset optimization.',
      linkText: 'View GitHub',
      type: 'cli'
    },
    {
      id: 'cryptoporto',
      title: 'CryptoPorto',
      category: 'WEB3',
      badges: ['WEB3'],
      description: 'Decentralized wallet tracker with real-time price alerts and portfolio rebalancing tools.',
      type: 'web3'
    },
    {
      id: 'fitstream',
      title: 'FitStream',
      category: 'HEALTHKIT',
      badges: ['HEALTHKIT'],
      description: 'Social fitness app that gamifies morning routines through community challenges and IoT integration.',
      type: 'health'
    },
    {
      id: 'lumina-os',
      title: 'Lumina OS',
      category: 'MQTT',
      badges: ['MQTT'],
      description: 'A localized smart-home operating system built for privacy-first automation and device control.',
      type: 'hardware'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-8 md:py-16"
    >
      {/* Page Title & Introductory Copy */}
      <div className="max-w-3xl mb-12 md:mb-16">
        <h1 className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl tracking-tight leading-tight mb-4">
          Selected <span className="text-[#FF6000]">Works</span>
        </h1>
        <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-sans">
          A curated collection of digital products, technical experiments, and scalable applications built with precision and passion.
        </p>
      </div>

      {/* Featured Project Card: Nexus E-commerce Suite */}
      <div 
        id="project-nexus-featured"
        onClick={() => onOpenProjectModal('nexus-fintech')}
        className="group bg-white border border-neutral-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:border-neutral-200/80 transition-all duration-300 cursor-pointer flex flex-col lg:flex-row items-stretch mb-16 shadow-sm"
      >
        {/* Left Side: Device Mockup */}
        <div className="relative lg:w-[45%] bg-neutral-100 flex items-center justify-center p-8 select-none overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-50 min-h-[340px]">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
          
          <div className="absolute top-4 left-4 z-10 bg-[#FF6000] text-white text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
            FEATURED PROJECT
          </div>

          {/* iOS Device Mockup container */}
          <div className="relative w-56 h-[320px] bg-neutral-950 rounded-[44px] shadow-2xl ring-12 ring-neutral-900 border-2 border-neutral-800 p-3 flex flex-col overflow-hidden transform group-hover:scale-102 transition-transform duration-300">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4.5 w-20 bg-black rounded-full z-20 flex items-center justify-end px-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            </div>

            {/* In-app visual interface */}
            <div className="bg-neutral-50 rounded-[32px] flex-1 flex flex-col overflow-hidden text-neutral-800 font-sans p-3">
              {/* Fake App Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100 mt-2 text-[8px] font-bold">
                <span className="text-[#FF6000]">NEXUS.STORE</span>
                <span className="bg-neutral-200 px-1.5 py-0.5 rounded-full text-[6px]">Active</span>
              </div>
              
              {/* App Hero Display */}
              <div className="my-2 bg-[#FF6000] text-white rounded-xl p-2.5 flex flex-col justify-between h-20 shadow-sm">
                <span className="text-[6px] uppercase font-bold tracking-wider">Dual Horizon</span>
                <h4 className="text-[10px] font-black leading-tight">Nexus E-commerce Engine</h4>
                <span className="text-[6px] opacity-80">99.98% Gateway Success Rate</span>
              </div>

              {/* Item grid representative lines */}
              <div className="grid grid-cols-2 gap-1.5 mt-1">
                <div className="bg-white border border-neutral-150 rounded-lg p-1 text-center">
                  <div className="h-6 w-full bg-neutral-100 rounded-md mb-1 flex items-center justify-center">
                    <Smartphone className="h-3 w-3 text-neutral-400" />
                  </div>
                  <span className="text-[6px] font-bold block text-neutral-700">Mobile Unit</span>
                  <span className="text-[5px] text-neutral-400">$849.00</span>
                </div>
                <div className="bg-white border border-neutral-150 rounded-lg p-1 text-center">
                  <div className="h-6 w-full bg-neutral-100 rounded-md mb-1 flex items-center justify-center">
                    <Database className="h-3 w-3 text-neutral-400" />
                  </div>
                  <span className="text-[6px] font-bold block text-neutral-700">Storage Cloud</span>
                  <span className="text-[5px] text-neutral-400">$39.00/mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy Details */}
        <div className="lg:w-[55%] p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-[9px] font-mono font-bold bg-orange-50 text-[#FF6000] px-2.5 py-1 rounded border border-orange-100">REACT NATIVE</span>
              <span className="text-[9px] font-mono font-bold bg-neutral-50 text-neutral-500 px-2.5 py-1 rounded border border-neutral-200/50">FIREBASE</span>
              <span className="text-[9px] font-mono font-bold bg-neutral-50 text-neutral-500 px-2.5 py-1 rounded border border-neutral-200/50">STRIPE API</span>
            </div>

            <h3 className="font-display font-black text-neutral-900 text-2xl sm:text-3xl mb-4 group-hover:text-[#FF6000] transition-colors">
              Nexus E-commerce Suite
            </h3>

            <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-sans">
              A high-performance mobile commerce engine featuring real-time inventory synchronization, biometric authentication, and a customized gesture-based navigation system for seamless shopping experiences.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-150 flex items-center justify-between text-xs">
            <span className="font-bold text-[#FF6000] flex items-center gap-1 group-hover:underline">
              Case Study <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>

      {/* Grid List of 5 other projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {secondaryProjects.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => onOpenProjectModal(proj.id === 'syncro-dashboard' ? 'lumina-analytics' : 'vanguard-commerce')}
            className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-neutral-200/80 transition-all duration-350 cursor-pointer flex flex-col h-full shadow-sm"
          >
            {/* Custom Visual Representation Container height 200px */}
            <div className="h-48 bg-neutral-100 border-b border-neutral-50 p-5 flex items-center justify-center relative overflow-hidden select-none">
              
              {/* Subtle Grid dots */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

              {/* Badges Overlay top right/left */}
              <div className="absolute top-4 left-4 z-10 bg-neutral-900 text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                {proj.category}
              </div>

              {/* Render dynamic mockup widgets depending on project key */}
              {proj.type === 'dashboard' && (
                <div className="relative w-full max-w-[200px] h-28 bg-[#1A1F2C] border border-neutral-800 rounded-xl p-3 flex flex-col justify-between text-white font-mono scale-95 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex justify-between items-center text-[7px] text-neutral-400">
                    <span>SYNCRO / AD_</span>
                    <span className="h-1.5 w-1.5 bg-orange-500 rounded-full" />
                  </div>
                  {/* analytical visual lines represent layout */}
                  <div className="grid grid-cols-3 gap-1.5 my-1.5">
                    <div className="bg-neutral-800/40 rounded p-1">
                      <span className="text-[5px] text-neutral-400 block">ROI</span>
                      <strong className="text-[7px] text-[#FF6000]">+24%</strong>
                    </div>
                    <div className="bg-neutral-800/40 rounded p-1 col-span-2 flex items-center justify-between">
                      <span className="text-[5px] text-neutral-400">Data Feed</span>
                      <span className="h-0.5 w-6 bg-emerald-500" />
                    </div>
                  </div>
                  <div className="h-6 bg-neutral-800/60 rounded flex items-end gap-0.5 p-1">
                    <div className="w-full bg-neutral-700 h-[20%] rounded-sm" />
                    <div className="w-full bg-neutral-700 h-[60%] rounded-sm" />
                    <div className="w-full bg-orange-500 h-[40%] rounded-sm" />
                    <div className="w-full bg-orange-500 h-[90%] rounded-sm" />
                  </div>
                </div>
              )}

              {proj.type === 'cli' && (
                <div className="relative w-full max-w-[200px] h-28 bg-[#151515] border border-neutral-800 rounded-xl p-3 flex flex-col justify-between text-[#FF6000] font-mono text-[8px] scale-95 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex items-center gap-1 text-neutral-500 border-b border-neutral-900 pb-1 pb-1">
                    <span className="h-2 w-2 rounded-full bg-neutral-700" />
                    <span>sh • bash</span>
                  </div>
                  <div className="space-y-0.5 my-1.5 text-neutral-300">
                    <div>$ npm install -g automata-cli</div>
                    <div className="text-emerald-500">&gt; Installed dependencies successfully.</div>
                    <div className="text-neutral-500">$ automata --optimize-assets</div>
                  </div>
                  <div className="text-[6px] text-neutral-600 block pl-1 border-l border-[#FF6000]">
                    Task finished in 180ms
                  </div>
                </div>
              )}

              {proj.type === 'web3' && (
                <div className="relative w-full max-w-[190px] h-28 bg-[#0B0D13] border border-neutral-800 rounded-xl p-3 flex flex-col justify-between text-white font-mono scale-95 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex items-center justify-between text-[6px] text-neutral-500">
                    <span>CryptoPorto Ledger</span>
                    <span>LIVE</span>
                  </div>
                  {/* grid vectors */}
                  <div className="relative flex-1 my-1 border border-neutral-900 rounded p-1 bg-neutral-950/40 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#FF6000]/5 rounded" />
                    <div className="space-y-1 w-full text-center">
                      <span className="text-[9px] text-[#FF6000] font-bold block">$1.48M</span>
                      <span className="text-[5px] text-emerald-400 block tracking-widest uppercase">Secured / Active Ledger</span>
                    </div>
                  </div>
                </div>
              )}

              {proj.type === 'health' && (
                <div className="relative w-full max-w-[190px] h-28 bg-[#F1F3F5] border border-neutral-200 rounded-xl p-3 flex flex-col justify-between text-neutral-800 font-mono scale-95 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex justify-between items-center text-[7px] text-neutral-400 font-bold">
                    <span>FitStream Fit_</span>
                    <span>0:12</span>
                  </div>
                  <div className="flex-1 flex items-center justify-center py-2 h-10">
                    {/* Ring indicator circle */}
                    <div className="relative h-12 w-12 rounded-full border-4 border-dashed border-neutral-200 flex items-center justify-center text-[8px] font-bold text-neutral-700">
                      <div className="absolute h-9 w-9 rounded-full border-2 border-[#FF6000]" />
                      12m
                    </div>
                  </div>
                  <div className="text-[6px] text-center text-neutral-500">
                    Avg streak: 14 days active
                  </div>
                </div>
              )}

              {proj.type === 'hardware' && (
                <div className="relative w-full max-w-[190px] h-28 bg-[#121214] border border-neutral-800 rounded-xl p-3 flex flex-col justify-between text-neutral-400 font-mono scale-95 group-hover:scale-100 transition-transform duration-300">
                  <div className="flex justify-between items-center text-[6px] text-neutral-500">
                    <span>Lumina Node Smart</span>
                    <span className="h-1 text-emerald-600 w-1 rounded-full animate-ping" />
                  </div>
                  <div className="grid grid-cols-2 gap-1 my-1">
                    <div className="bg-emerald-950/20 rounded p-1 border border-emerald-900/40 flex flex-col justify-center">
                      <span className="text-[5px] text-emerald-400 block">Living Room</span>
                      <strong className="text-[7px] text-white">ON</strong>
                    </div>
                    <div className="bg-red-950/10 rounded p-1 border border-red-900/20 flex flex-col justify-center">
                      <span className="text-[5px] text-neutral-500 block">Climate</span>
                      <strong className="text-[7px] text-neutral-500">OFF</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* Hover Inspect badge */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/25 to-transparent p-4 flex justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="bg-white text-neutral-900 text-[9px] font-semibold tracking-wider px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  Inspect <Eye className="h-3 w-3 text-[#FF6000]" />
                </span>
              </div>

            </div>

            {/* Project Copy Metadata */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-display font-black text-neutral-900 text-lg group-hover:text-[#FF6000] transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-sans">
                  {proj.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-50">
                <span className="text-[10px] font-mono font-bold text-neutral-400 flex items-center gap-1.5 uppercase">
                  {proj.badges[0]}
                </span>
                
                {proj.linkText && (
                  <span className="text-[10px] font-semibold text-[#FF6000] flex items-center gap-1">
                    {proj.linkText} <ExternalLink className="h-3 w-3" />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Under Section Highlight Block: Have a project in mind? */}
      <div 
        id="projects-cta-highlight"
        className="relative bg-gradient-to-r from-[#201008] to-[#120804] border border-neutral-900/60 rounded-[32px] p-8 sm:p-12 overflow-hidden select-none flex flex-col md:flex-row md:items-center justify-between gap-8 h-auto shadow-2xl"
      >
        {/* Dynamic circular design elements */}
        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full border-[12px] border-orange-500/[0.03] pointer-events-none" />
        <div className="absolute right-12 top-6 h-16 w-16 rounded-full border-2 border-orange-500/[0.04] pointer-events-none" />

        <div className="max-w-xl text-left">
          <h2 className="font-display font-extrabold text-white text-2xl sm:text-3xl tracking-tight leading-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-amber-100/70 text-xs sm:text-sm leading-relaxed font-sans">
            Whether you need a full-scale React Native application or a specialized technical audit, I'm currently accepting new projects for Q4 2024.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
          <button
            onClick={() => onOpenModal('contact')}
            className="px-6 py-3.5 bg-[#FF6000] hover:bg-orange-700 text-white font-display font-bold text-xs tracking-wider rounded-xl transition-all shadow-md shadow-orange-500/10 active:scale-98 cursor-pointer"
          >
            LET'S TALK
          </button>
          
          <button
            onClick={() => onOpenModal('resume')}
            className="px-6 py-3.5 bg-transparent hover:bg-white/5 border border-white/20 text-white font-display font-medium text-xs tracking-wide rounded-xl transition-all active:scale-98 cursor-pointer"
          >
            VIEW RESUME
          </button>
        </div>
      </div>
    </motion.div>
  );
}
