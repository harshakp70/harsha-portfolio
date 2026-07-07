import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import {projects} from "../../data";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ onOpenModal }) {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 pt-8 py-20 select-none"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
      >
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-xs font-bold tracking-wider uppercase">
            Featured Projects
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-display font-extrabold text-neutral-900">
            Projects I've Built
          </h2>

          <p className="mt-4 text-lg text-neutral-500 leading-8">
            A collection of web and mobile applications showcasing my
            experience with MERN Stack, React Native, Expo, and modern frontend
            technologies.
          </p>
        </div>

        <button
         onClick={() => onOpenModal("contact")}
          className="inline-flex items-center gap-2 text-[#FF6000] font-semibold hover:gap-3 transition-all"
        >
          Let's Work Together
          <ArrowRight size={18} />
        </button>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
          >
            <ProjectCard
              project={project}
              onOpenModal={onOpenModal}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}