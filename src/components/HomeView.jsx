import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Phone, ArrowRight, Terminal, Cpu, ChevronRight, ShieldCheck 
} from 'lucide-react';

export default function HomeView({ 
  services, 
  projects, 
  onOpenModal, 
  onScrollToSegment 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* 1. Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 py-10 md:py-20 flex flex-col items-start select-none">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-orange-50/70 border border-orange-100 rounded-full px-4 py-1.5 mb-6 text-[#FF6000] text-xs font-bold font-mono tracking-wider"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF6000] animate-pulse" />
          AVAILABLE FOR FREELANCE
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] max-w-3xl mb-6 text-left"
        >
          Building Modern <br />
          <span className="text-[#FF6000]">Web & Mobile</span> <br />
          Experiences.
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-500 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8 text-left font-sans"
        >
          Specializing in high-performance React and React Native applications with a focus on technical precision and vibrant user interfaces.
        </motion.p>

        {/* Buttons CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <button
            id="hero-view-projects"
            onClick={() => onScrollToSegment('projects')}
            className="px-6 py-3.5 bg-[#FF6000] text-white hover:bg-orange-700 font-display font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-orange-500/10 cursor-pointer active:scale-98 transition-all"
          >
            View Projects
          </button>
          <button
            id="hero-read-resume"
            onClick={() => onOpenModal('resume')}
            className="px-6 py-3.5 bg-white border border-neutral-200 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50 font-display font-medium text-sm tracking-wide rounded-xl cursor-pointer shadow-sm active:scale-98 transition-all"
          >
            Read Resume
          </button>
        </motion.div>

      </section>

      {/* 2. Services Overview Cards */}
      <section id="services-summary" className="bg-neutral-25/50 border-y border-neutral-100 py-16 sm:py-20 select-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {services.map((srv) => (
              <div 
                key={srv.id} 
                className="bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:border-neutral-200/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 text-[#FF6000] items-center justify-center mb-6">
                    {srv.iconType === 'web' ? (
                      <Globe className="h-6 w-6 stroke-[1.5]" />
                    ) : (
                      <Phone className="h-6 w-6 stroke-[1.5]" />
                    )}
                  </div>

                  <h3 className="font-display font-black text-neutral-900 text-xl mb-3">
                    {srv.title}
                  </h3>
                  
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6 font-sans">
                    {srv.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-50 mb-4 font-sans">
                    {srv.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className={`text-[9px] font-mono font-extrabold tracking-wider px-2.5 py-1 rounded-md uppercase ${
                          tag.highlight 
                            ? 'bg-[#FF6000] text-white' 
                            : 'bg-neutral-100 text-neutral-600 border border-neutral-200/50'
                        }`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-500 pt-2 font-sans">
                    {srv.skills.slice(0, 4).map((skill, si) => (
                      <li key={si} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 3. Recent Projects Preview Carousel/Grid */}
      <section id="projects-summary" className="max-w-7xl mx-auto px-6 py-20 select-none">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl font-sans">
            <h2 className="font-display font-black text-neutral-900 text-2xl sm:text-3xl tracking-tight mb-3">
              Latest Work
            </h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              A curated selection of my recent technical projects, spanning from complex fintech dashboards to high-traffic e-commerce solutions.
            </p>
          </div>
          
          <button
            onClick={() => onScrollToSegment('projects')}
            className="inline-flex items-center gap-1 text-xs font-bold tracking-wide text-neutral-500 hover:text-orange-600 group uppercase cursor-pointer border-b border-transparent hover:border-orange-600/30 transition-all py-1 font-sans"
          >
            View All Projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              onClick={() => onOpenModal('project', project)}
              className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-neutral-200/80 transition-all duration-300 cursor-pointer flex flex-col h-full shadow-sm"
            >
              
              <div className="relative h-56 bg-neutral-100 flex items-center justify-center p-6 overflow-hidden border-b border-neutral-50 select-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

                <div className="absolute top-4 left-4 z-10 bg-neutral-900 text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {project.tag}
                </div>

                {/* Render corresponding visual thumbnail illustration representation */}
                {project.id === 'nexus-fintech' && (
                  <div className="relative w-full max-w-[200px] h-32 bg-slate-900 rounded-2xl shadow-xl border border-slate-800 p-3 flex flex-col justify-between text-white font-mono scale-95 group-hover:scale-100 transition-all duration-300">
                    <div className="flex justify-between items-center text-[8px] text-slate-400">
                      <span className="flex items-center gap-1"><Cpu className="h-2.5 w-2.5 text-orange-500" /> Nexus OS</span>
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#FF6000]" />
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 block uppercase">NXS Index</span>
                      <span className="text-sm font-extrabold font-sans text-white block">$42,912.44</span>
                      <span className="text-[8px] text-emerald-400 font-bold block">+12.8% (24h)</span>
                    </div>
                    <div className="flex gap-1 items-end h-8">
                      <div className="w-full bg-slate-800 h-[10%] rounded-sm" />
                      <div className="w-full bg-slate-800 h-[30%] rounded-sm" />
                      <div className="w-full bg-slate-800 h-[20%] rounded-sm" />
                      <div className="w-full bg-orange-500 h-[60%] rounded-sm" />
                      <div className="w-full bg-orange-500 h-[45%] rounded-sm" />
                      <div className="w-full bg-orange-500 h-[80%] rounded-sm" />
                    </div>
                  </div>
                )}

                {project.id === 'vanguard-commerce' && (
                  <div className="relative w-full max-w-[220px] h-32 bg-white rounded-xl shadow-xl border border-neutral-200/70 p-3 flex flex-col justify-between text-neutral-800 scale-95 group-hover:scale-100 transition-all duration-300">
                    <div className="flex justify-between items-center text-[7px] text-neutral-400 pb-1 border-b border-neutral-100 font-mono">
                      <span className="font-extrabold text-neutral-800">VANGUARD / DECK_</span>
                      <span>CART (2)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 my-2">
                      <div className="bg-neutral-50 rounded-lg p-1.5 flex flex-col justify-center border border-neutral-150">
                        <span className="text-[6px] text-neutral-400">Subtotal</span>
                        <span className="text-[10px] font-extrabold text-[#FF6000] font-sans">$149.00</span>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-1.5 flex flex-col justify-center border border-neutral-150 font-sans">
                        <span className="text-[6px] text-neutral-400">Checkout</span>
                        <span className="text-[8px] font-bold text-neutral-700 flex items-center justify-between font-mono">GO <ChevronRight className="h-2 w-2 text-[#FF6000]" /></span>
                      </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-100 rounded-md p-1 flex items-center justify-between text-[6px] text-orange-850">
                      <span className="font-bold flex items-center gap-1"><ShieldCheck className="h-2.5 w-2.5 text-[#FF6000]" /> Edge Location: Singapore Edge</span>
                      <span className="font-mono">85ms</span>
                    </div>
                  </div>
                )}

                {project.id === 'lumina-analytics' && (
                  <div className="relative w-full max-w-[210px] h-32 bg-neutral-950 rounded-xl shadow-xl border border-neutral-800 p-3 flex flex-col justify-between text-neutral-300 scale-95 group-hover:scale-100 transition-all duration-300 font-sans">
                    <div className="flex justify-between items-center text-[7px] text-neutral-500 font-mono">
                      <span className="text-[#FF6000] font-bold">LUMINA_METRICS</span>
                      <span>LIVE STREAMING</span>
                    </div>
                    <div className="space-y-1.5 my-1.5 border-t border-neutral-900 pt-1.5">
                      <div className="h-1.5 w-full bg-neutral-800 rounded-sm overflow-hidden relative">
                        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-orange-600 to-orange-400 w-3/4" />
                      </div>
                      <div className="h-1.5 w-full bg-neutral-800 rounded-sm overflow-hidden relative">
                        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-orange-600 to-orange-400 w-1/2" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-t border-neutral-900 pt-1.5 font-mono">
                      <div className="flex gap-1.5">
                        <span className="text-[7px] text-emerald-400 font-bold">200 OK</span>
                        <span className="text-[7px] text-neutral-400">t-active</span>
                      </div>
                      <span className="text-[8px] text-neutral-200">1,024 RPS</span>
                    </div>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent p-4 flex justify-end transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="bg-white text-neutral-900 text-[10px] font-semibold tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    Inspect Solution <ArrowRight className="h-3 w-3" />
                  </span>
                </div>

              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display font-black text-neutral-900 text-lg group-hover:text-[#FF6000] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6 font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-50">
                  <span className="text-xs font-mono font-medium text-neutral-400 flex items-center gap-1.5 uppercase">
                    <Terminal className="h-3.5 w-3.5" />
                    {project.techLabel}
                  </span>
                  
                  <div className="h-8 w-8 rounded-full border border-neutral-100 bg-white group-hover:border-orange-500 group-hover:bg-orange-50 text-neutral-400 group-hover:text-orange-600 flex items-center justify-center transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. Bottom Contact block banner */}
      <section id="banner-teaser-co" className="relative bg-[#1A0B02] text-white py-16 sm:py-24 overflow-hidden select-none border-t border-neutral-950">
        
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute inset-x-0 top-6 sm:top-10 flex justify-center overflow-hidden h-28 pointer-events-none">
          <span className="text-[11vw] font-display font-black text-white/[0.02] uppercase tracking-widest leading-none select-none">
            LET'S BUILD
          </span>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4 leading-tight">
            Let's build <span className="text-[#FF6000]">something epic</span> together.
          </h2>

          <p className="text-amber-100/60 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            Currently accepting new projects and consulting opportunities. Whether it's a mobile app or a complex web system, I'm ready to bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenModal('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-[#FF6000] text-white hover:bg-orange-600 font-display font-bold text-xs tracking-wider uppercase rounded-xl cursor-pointer shadow-xl shadow-orange-500/10 active:scale-98 transition-all"
            >
              Start a Conversation
            </button>
            {/* <button
              onClick={() => onOpenModal('schedule')}
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white/80 hover:bg-white/5 font-display font-bold text-xs tracking-wide rounded-xl cursor-pointer active:scale-98 transition-all"
            >
              Schedule a Call
            </button> */}
          </div>

        </div>
      </section>
    </motion.div>
  );
}
