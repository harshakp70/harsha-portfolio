import React from "react";
import {
    X,
    Github,
    ExternalLink,
    CheckCircle,
} from "lucide-react";

export default function ProjectModal({
    project,
    isOpen,
    onClose,
}) {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-5">

            <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative">

                {/* Close */}

                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 h-10 w-10 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition z-10"
                >
                    <X size={20} />
                </button>

                {/* Image */}

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                />

                <div className="p-8">

                    {/* Category */}

                    <span className="inline-flex px-4 py-1 rounded-full bg-orange-100 text-[#FF6000] text-sm font-semibold">
                        {project.category}
                    </span>

                    {/* Title */}

                    <h2 className="text-4xl font-bold text-neutral-900 mt-5">
                        {project.title}
                    </h2>

                    {/* Status */}

                    <div className="mt-4">

                        {project.status === "Live" && (

                            <span className="inline-flex px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                                🌐 Live
                            </span>

                        )}

                        {project.status === "In Development" && (

                            <span className="inline-flex px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold">
                                🚧 In Development
                            </span>

                        )}

                        {project.status === "Private Organization" && (

                            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                                💼 Professional Project
                            </span>

                        )}

                    </div>

                    {/* Description */}

                    <p className="mt-6 text-neutral-600 leading-8 text-lg">
                        {project.description}
                    </p>

                    {/* Technologies */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold mb-4">
                            Technologies Used
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            {project.technologies.map((tech) => (

                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] font-medium"
                                >
                                    {tech}
                                </span>

                            ))}

                        </div>

                    </div>

                    {/* Features */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold mb-5">
                            Key Features
                        </h3>

                        <div className="grid md:grid-cols-2 gap-4">

                            {project.features.map((feature) => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle
                                        size={18}
                                        className="text-[#FF6000]"
                                    />

                                    <span className="text-neutral-700">
                                        {feature}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Contribution */}

                    <div className="mt-10">

                        <h3 className="text-xl font-bold mb-4">
                            My Contribution
                        </h3>

                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 leading-8 text-neutral-700">
                            {project.contribution}
                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="flex flex-wrap gap-4 mt-10">

                        {project.github ? (
                            <button
                                onClick={() => window.open(project.github, "_blank")}
                                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-black transition"
                            >
                                <Github size={18} />
                                GitHub
                            </button>
                        ) : null}

                        {project.live ? (
                            <button
                                onClick={() => window.open(project.live, "_blank")}
                                className="flex items-center gap-2 px-6 py-3 bg-[#FF6000] text-white rounded-xl hover:bg-orange-700 transition"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </button>
                        ) : null}

                    </div>

                </div>

            </div>

        </div>
    );
}