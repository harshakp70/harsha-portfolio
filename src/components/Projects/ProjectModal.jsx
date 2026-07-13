import React from "react";
import {
  Github,
  ExternalLink,
  CheckCircle,
  Briefcase,
  Code2,
  Target,
} from "lucide-react";

export default function ProjectModal({
  project,
  isOpen,
}) {
  if (!isOpen || !project) return null;

  return (
    <>

      {/* Hero */}

      <div className="relative overflow-hidden rounded-t-3xl">

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[380px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8">

          <span className="inline-flex px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm font-semibold">

            {project.category}

          </span>

          <h1 className="mt-5 text-5xl font-black text-white">

            {project.title}

          </h1>

          <p className="mt-4 text-lg text-white/90 max-w-3xl leading-8">

            {project.description}

          </p>

        </div>

      </div>

      <div className="p-10">

        {/* Status */}

        <div className="flex flex-wrap items-center gap-3">

          {project.status === "Live" && (

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">

              🌐 Live Project

            </span>

          )}

          {project.status === "In Development" && (

            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">

              🚧 In Development

            </span>

          )}

          {project.status === "Private Organization" && (

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">

              💼 Professional Project

            </span>

          )}

        </div>

        {/* Overview */}

        <section className="mt-10">

          <h2 className="flex items-center gap-3 text-2xl font-bold">

            <Target className="text-[#FF6000]" />

            Project Overview

          </h2>

          <div className="mt-5 rounded-3xl bg-orange-50 border border-orange-100 p-7">

            <p className="leading-8 text-neutral-700">

              {project.overview}

            </p>

          </div>

        </section>
                {/* Technologies */}

        <section className="mt-12">

          <h2 className="flex items-center gap-3 text-2xl font-bold">

            <Code2 className="text-[#FF6000]" />

            Technologies Used

          </h2>

          <div className="flex flex-wrap gap-3 mt-6">

            {project.technologies.map((tech) => (

              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] font-semibold"
              >
                {tech}
              </span>

            ))}

          </div>

        </section>

        {/* Responsibilities */}

        <section className="mt-12">

          <h2 className="flex items-center gap-3 text-2xl font-bold">

            <Briefcase className="text-[#FF6000]" />

            My Responsibilities

          </h2>

          <div className="mt-6 space-y-4">

            {project.responsibilities.map((item) => (

              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-2xl border border-neutral-200 bg-white"
              >

                <CheckCircle
                  size={20}
                  className="text-[#FF6000] mt-1 shrink-0"
                />

                <p className="leading-7 text-neutral-700">

                  {item}

                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Features */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold">

            Key Features

          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-6">

            {project.features.map((feature) => (

              <div
                key={feature}
                className="rounded-2xl border border-orange-100 bg-orange-50 p-6"
              >

                <div className="flex items-center gap-3">

                  <CheckCircle
                    className="text-[#FF6000]"
                    size={22}
                  />

                  <span className="font-semibold text-neutral-800">

                    {feature}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Challenges */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold">

            Challenges

          </h2>

          <div className="mt-5 rounded-3xl border border-neutral-200 bg-neutral-50 p-7">

            <p className="leading-8 text-neutral-700">

              {project.challenges}

            </p>

          </div>

        </section>

        {/* Learnings */}

        <section className="mt-12">

          <h2 className="text-2xl font-bold">

            What I Learned

          </h2>

          <div className="flex flex-wrap gap-3 mt-6">

            {project.learnings.map((item) => (

              <span
                key={item}
                className="px-4 py-2 rounded-full bg-neutral-100 text-neutral-700 font-medium"
              >
                {item}
              </span>

            ))}

          </div>

        </section>
                {/* Action Buttons */}

        <section className="mt-14">

          <div className="flex flex-wrap gap-4">

            {project.github ? (

              <button
                onClick={() => window.open(project.github, "_blank")}
                className="inline-flex items-center gap-3 px-7 py-4 bg-neutral-900 hover:bg-black text-white rounded-2xl font-semibold transition"
              >
                <Github size={20} />
                View Source Code
              </button>

            ) : (

              <div className="px-7 py-4 rounded-2xl bg-neutral-100 text-neutral-400 font-semibold">

                Private Repository

              </div>

            )}

            {project.live ? (

              <button
                onClick={() => window.open(project.live, "_blank")}
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#FF6000] hover:bg-orange-700 text-white rounded-2xl font-semibold transition"
              >
                <ExternalLink size={20} />
                Visit Live Project
              </button>

            ) : (

              <div className="px-7 py-4 rounded-2xl bg-orange-50 text-[#FF6000] font-semibold border border-orange-100">

                Live Demo Not Available

              </div>

            )}

          </div>

        </section>

        {/* Bottom CTA */}

        <section className="mt-16 rounded-3xl bg-gradient-to-r from-[#FF6000] to-orange-500 p-8 text-white">

          <h2 className="text-3xl font-black">

            Interested in a similar project?

          </h2>

          <p className="mt-4 leading-8 text-orange-100">

            This project demonstrates my experience in designing responsive
            user interfaces, integrating APIs, building scalable applications,
            and delivering modern web and mobile solutions using the MERN Stack
            and React Native.

          </p>

        </section>

      </div>

    </>
  );
}