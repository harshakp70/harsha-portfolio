import React from 'react';
import { motion } from 'motion/react';
import {
  Globe, Phone, ArrowRight, Terminal, Cpu, ChevronRight, ShieldCheck, Github,
} from 'lucide-react';
import ProjectsSection from './Projects/ProjectsSection';

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
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 pt-6 pb-14 flex flex-col items-start select-none"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-5 text-[#FF6000] text-xs font-bold font-mono tracking-wider"
        >
          <span className="h-2 w-2 rounded-full bg-[#FF6000] animate-pulse" />
          OPEN TO WORK
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-3xl font-semibold text-neutral-900 mb-2"
        >
          Hello <span className="inline-block animate-wave">👋</span>{" "}
          <span className="text-[#FF6000]">I'm Harsha K P</span>
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl md:text-6xl leading-tight max-w-4xl mb-5"
        >
          MERN Stack <br />
          <span className="text-[#FF6000]">&</span> React Native Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-neutral-600 text-base md:text-lg leading-8 max-w-2xl mb-8"
        >
          I'm a MERN Stack Developer with hands-on experience building responsive
          web applications and React Native mobile apps. I enjoy solving
          real-world problems through clean, scalable code and continuously
          learning modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => onScrollToSegment("projects")}
            className="px-7 py-3.5 bg-[#FF6000] hover:bg-orange-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-orange-500/20"
          >
            View Projects
          </button>

          <button
            onClick={() => onOpenModal("resume")}
            className="px-7 py-3.5 bg-white border border-neutral-200 hover:bg-neutral-100 rounded-xl font-semibold transition-all"
          >
            Download Resume
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/harshakp70", "_blank")
            }
            className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-900 hover:text-white rounded-xl font-semibold transition-all duration-300 shadow-sm"
          >
            <Github size={18} />
            View GitHub
          </button>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          {[
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "React Native",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-orange-100 bg-orange-50 text-[#FF6000] text-sm font-semibold"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </section>

     {/* ================= Core Expertise ================= */}
<section
  id="expertise"
  className="py-20 bg-white border-y border-neutral-100 select-none"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="max-w-3xl mb-14">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-xs font-bold tracking-wider uppercase">
        Core Expertise
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-display font-extrabold text-neutral-900">
        What I Build
      </h2>

      <p className="mt-4 text-lg text-neutral-500 leading-8">
        I specialize in building modern web applications, scalable backend
        systems, and cross-platform mobile applications using the MERN Stack
        and React Native.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {services.map((srv) => (

        <div
          key={srv.id}
          className="group bg-white border border-neutral-200 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
        >

          {/* Icon */}
          <div className="h-14 w-14 rounded-2xl bg-orange-50 text-[#FF6000] flex items-center justify-center border border-orange-100 mb-6 group-hover:bg-[#FF6000] group-hover:text-white transition-all">

            {srv.iconType === "web" ? (
              <Globe className="w-7 h-7" />
            ) : srv.iconType === "backend" ? (
              <Terminal className="w-7 h-7" />
            ) : (
              <Phone className="w-7 h-7" />
            )}

          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            {srv.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-500 leading-7 mb-8">
            {srv.description}
          </p>

          {/* Skills */}
          <div className="space-y-3">

            {srv.skills.map((skill, index) => (

              <div
                key={index}
                className="flex items-center gap-3 text-neutral-700"
              >
                <ShieldCheck className="w-4 h-4 text-[#FF6000]" />

                <span>{skill}</span>
              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  </div>
</section>

 <ProjectsSection
  projects={projects}
  onOpenModal={(project) => onOpenModal("project", project)}
/>

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
