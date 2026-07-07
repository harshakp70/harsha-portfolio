import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Lock,
  Hammer,
} from "lucide-react";

export default function ProjectCard({ project, onOpenModal }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const getStatus = () => {
    switch (project.status) {
      case "Live":
        return (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
            🌐 Live
          </span>
        );

      case "In Development":
        return (
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">
            🚧 In Development
          </span>
        );

      default:
        return (
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
            💼 Professional Project
          </span>
        );
    }
  };

  return (
    <div className="group bg-white rounded-3xl border border-neutral-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
      {/* Image */}

      <div className="relative overflow-hidden">

       <div
  className="relative overflow-hidden cursor-zoom-in"
  onClick={() => setPreviewOpen(true)}
>

  <img
    src={project.image}
    alt={project.title}
    className="w-full h-64 object-contain transition duration-500 group-hover:scale-105"
  />

  <div className="absolute top-5 left-5">
    {getStatus()}
  </div>

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300 flex items-center justify-center">

    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-sm transition">
      🔍 Click to Preview
    </span>

  </div>

</div>
        <div className="absolute top-5 left-5">
          {getStatus()}
        </div>

      </div>

      {/* Content */}

      <div className="p-7">

        <span className="text-xs uppercase tracking-widest text-[#FF6000] font-bold">
          {project.category}
        </span>

        <h3 className="mt-3 text-2xl font-display font-bold text-neutral-900">
          {project.title}
        </h3>

        <p className="mt-4 text-neutral-500 leading-7">
          {project.description}
        </p>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mt-6">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="px-3 py-1 bg-orange-50 border border-orange-100 rounded-full text-xs font-medium text-[#FF6000]"
            >
              {tech}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex items-center justify-between mt-8">

          <button
            onClick={() => onOpenModal(project)}
            className="flex items-center gap-2 text-[#FF6000] font-semibold hover:gap-3 transition-all"
          >
            View Details

            <ArrowRight size={18} />
          </button>

          <div className="flex gap-3">

            {/* GitHub */}

            {project.github ? (

              <button
                onClick={() =>
                  window.open(project.github, "_blank")
                }
                className="h-11 w-11 rounded-xl border border-neutral-200 hover:bg-neutral-900 hover:text-white transition flex items-center justify-center"
              >
                <Github size={18} />
              </button>

            ) : (

              <div className="h-11 w-11 rounded-xl border border-neutral-200 bg-neutral-100 text-neutral-400 flex items-center justify-center">
                <Lock size={18} />
              </div>

            )}

            {/* Live */}

            {project.live ? (

              <button
                onClick={() =>
                  window.open(project.live, "_blank")
                }
                className="h-11 w-11 rounded-xl bg-[#FF6000] hover:bg-orange-700 text-white transition flex items-center justify-center"
              >
                <ExternalLink size={18} />
              </button>

            ) : (

              <div className="h-11 w-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Hammer size={18} />
              </div>

            )}

          </div>

        </div>

      </div>

{/* Image Preview Modal */}

{previewOpen && (

  <div
    className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
    onClick={() => setPreviewOpen(false)}
  >

    {/* Close */}

    <button
      onClick={() => setPreviewOpen(false)}
      className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl flex items-center justify-center"
    >
      ✕
    </button>

    {/* Image */}

    <img
      src={project.image}
      alt={project.title}
      onClick={(e) => e.stopPropagation()}
      className="max-w-[95vw] max-h-[90vh] rounded-2xl shadow-2xl object-contain"
    />

  </div>

)}
    </div>
  );

}