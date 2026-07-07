import React from "react";
import {
    X,
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Download,
    Briefcase,
    GraduationCap,
    Code2,
    Languages,
} from "lucide-react";

import ResumePDF from "./ResumePDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function ResumeModal({ onClose }) {





    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto">

            <div className="min-h-screen flex items-center justify-center p-6">

                <div
                    className="relative w-full max-w-6xl bg-white rounded-[32px] shadow-2xl overflow-hidden"
                >

                    {/* Close Button */}

                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 h-11 w-11 rounded-full bg-neutral-100 hover:bg-neutral-200 transition flex items-center justify-center z-20"
                    >
                        <X size={22} />
                    </button>

                    {/* Header */}

                    <div className="bg-gradient-to-r from-[#FF6000] to-orange-500 px-10 py-14 text-white">

                        <div className="flex flex-col lg:flex-row items-center gap-10">

                            {/* Profile Image */}

                            <img
                                src="\Images\harsha.jpg"
                                alt="Harsha K P"
                                className="w-40 h-40 rounded-full border-4 border-white object-cover shadow-xl"
                            />

                            {/* Intro */}

                            <div className="flex-1">

                                <h1 className="text-5xl font-black">
                                    Harsha K P
                                </h1>

                                <p className="mt-3 text-xl font-medium text-orange-100">
                                    MERN Stack & React Native Developer
                                </p>

                                <p className="mt-6 max-w-3xl leading-8 text-orange-50">

                                    Passionate Junior Full Stack Developer with
                                    professional experience building scalable
                                    MERN Stack web applications and React Native
                                    mobile applications. Experienced in frontend,
                                    backend and mobile development with a strong
                                    interest in solving real-world problems using
                                    modern technologies.

                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Body */}

                    <div className="grid lg:grid-cols-3 gap-10 p-10">

                        {/* LEFT SIDEBAR */}

                        <div className="space-y-10">

                            {/* Contact */}

                            <div>

                                <h3 className="flex items-center gap-2 text-lg font-bold mb-6">

                                    <Mail className="text-[#FF6000]" />

                                    Contact

                                </h3>

                                <div className="space-y-5 text-sm">

                                    <div className="flex gap-3">

                                        <Mail className="text-[#FF6000]" size={18} />

                                        <span>
                                            harsharenjith70@gmail.com
                                        </span>

                                    </div>

                                    <div className="flex gap-3">

                                        <Phone className="text-[#FF6000]" size={18} />

                                        <span>
                                            +91 9946929074
                                        </span>

                                    </div>

                                    <div className="flex gap-3">

                                        <MapPin className="text-[#FF6000]" size={18} />

                                        <span>
                                            Kerala, India
                                        </span>

                                    </div>

                                    <div className="flex gap-3">

                                        <Github className="text-[#FF6000]" size={18} />

                                        <a
                                            href="https://github.com/harshakp70"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#FF6000]"
                                        >
                                            github.com/harshakp70
                                        </a>

                                    </div>

                                    <div className="flex gap-3">

                                        <Linkedin className="text-[#FF6000]" size={18} />

                                        <a
                                            href="https://www.linkedin.com/in/harshakp70"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#FF6000]"
                                        >
                                            linkedin.com/in/harshakp70
                                        </a>

                                    </div>

                                </div>

                            </div>

                            {/* About */}

                            <div>

                                <h3 className="text-lg font-bold mb-5">
                                    About Me
                                </h3>

                                <p className="text-neutral-600 leading-8 text-sm">

                                    After completing my Bachelor's Degree in
                                    Computer Science & Technology, I focused on
                                    strengthening my software development skills
                                    through Full Stack Development training.

                                    I enjoy building scalable web applications,
                                    cross-platform mobile applications and
                                    continuously learning modern technologies.

                                </p>

                            </div>
                            {/* Frontend Skills */}

                            <div>

                                <h3 className="flex items-center gap-2 text-lg font-bold mb-5">

                                    <Code2 className="text-[#FF6000]" />

                                    Frontend

                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {[
                                        "React.js",
                                        "JavaScript",
                                        "HTML5",
                                        "CSS3",
                                        "Tailwind CSS",
                                        "Redux Toolkit",
                                        "React Router",
                                        "Vite",
                                    ].map((skill) => (

                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-orange-50 text-[#FF6000] text-xs font-semibold border border-orange-100"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            {/* Backend Skills */}

                            <div>

                                <h3 className="flex items-center gap-2 text-lg font-bold mb-5">

                                    <Code2 className="text-[#FF6000]" />

                                    Backend

                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {[
                                        "Node.js",
                                        "Express.js",
                                        "MongoDB",
                                        "Mongoose",
                                        "REST APIs",
                                        "JWT",
                                        "Cloudinary",
                                        "Firebase",
                                    ].map((skill) => (

                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            {/* Mobile Skills */}

                            <div>

                                <h3 className="flex items-center gap-2 text-lg font-bold mb-5">

                                    <Code2 className="text-[#FF6000]" />

                                    Mobile

                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {[
                                        "React Native",
                                        "Expo",
                                        "React Native CLI",
                                        "React Navigation",
                                        "Async Storage",
                                        "Android Studio",
                                    ].map((skill) => (

                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full bg-orange-50 text-[#FF6000] text-xs font-semibold border border-orange-100"
                                        >
                                            {skill}
                                        </span>

                                    ))}

                                </div>

                            </div>

                            {/* Tools */}

                            <div>

                                <h3 className="flex items-center gap-2 text-lg font-bold mb-5">

                                    <Code2 className="text-[#FF6000]" />

                                    Tools

                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {[
                                        "Git",
                                        "GitHub",
                                        "VS Code",
                                        "Postman",
                                        "Figma",
                                        "Render",
                                        "Netlify",
                                        "Vercel",
                                    ].map((tool) => (

                                        <span
                                            key={tool}
                                            className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold"
                                        >
                                            {tool}
                                        </span>

                                    ))}

                                </div>

                            </div>

                        </div>

                        {/* RIGHT CONTENT */}

                        <div className="lg:col-span-2 space-y-12">
                            {/* Professional Experience */}

                            <section>

                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">

                                    <Briefcase className="text-[#FF6000]" />

                                    Professional Experience

                                </h2>

                                <div className="relative border-l-2 border-orange-200 pl-8">

                                    <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-[#FF6000]" />

                                    <div className="mb-10">

                                        <div className="flex flex-wrap justify-between items-center gap-3">

                                            <h3 className="text-2xl font-bold text-neutral-900">
                                                Junior Full Stack Developer
                                            </h3>

                                            <span className="bg-orange-50 text-[#FF6000] px-4 py-1 rounded-full text-sm font-semibold">
                                                Jan 2025 – Jul 2026
                                            </span>

                                        </div>

                                        <p className="text-lg font-semibold text-neutral-600 mt-2">
                                            ElectoAi Analytics Magnifier Pvt. Ltd.
                                        </p>

                                        <ul className="mt-6 space-y-3 text-neutral-600 leading-8 list-disc ml-6">

                                            <li>
                                                Developed scalable MERN Stack web applications using React.js, Node.js, Express.js and MongoDB.
                                            </li>

                                            <li>
                                                Built secure REST APIs and integrated frontend with backend services.
                                            </li>

                                            <li>
                                                Developed cross-platform mobile applications using React Native and Expo.
                                            </li>

                                            <li>
                                                Participated in migrating applications from Expo to React Native CLI.
                                            </li>

                                            <li>
                                                Implemented JWT Authentication, MongoDB database operations and API integration.
                                            </li>

                                            <li>
                                                Developed reusable UI components using Tailwind CSS and React Native.
                                            </li>

                                            <li>
                                                Fixed production bugs, improved application performance and implemented new features.
                                            </li>

                                            <li>
                                                Collaborated with developers using Git and GitHub throughout the development lifecycle.
                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </section>

                            {/* Projects */}

                            <section>

                                <h2 className="text-2xl font-bold mb-8">

                                    Featured Projects

                                </h2>

                                <div className="grid md:grid-cols-2 gap-6">

                                    <div className="rounded-3xl border border-neutral-200 p-6 hover:border-orange-300 transition">

                                        <h3 className="text-xl font-bold">
                                            AI Resume Builder
                                        </h3>

                                        <p className="mt-4 text-neutral-600 leading-7">

                                            AI-powered mobile application developed using React Native,
                                            helping users create ATS-friendly resumes with modern templates,
                                            authentication, PDF export and AI-assisted content generation.

                                        </p>

                                    </div>

                                    <div className="rounded-3xl border border-neutral-200 p-6 hover:border-orange-300 transition">

                                        <h3 className="text-xl font-bold">
                                            Magnifier Web
                                        </h3>

                                        <p className="mt-4 text-neutral-600 leading-7">

                                            Full Stack MERN social media platform with authentication,
                                            admin dashboard, analytics, role-based access, API integration
                                            and responsive user interface.

                                        </p>

                                    </div>

                                    <div className="rounded-3xl border border-neutral-200 p-6 hover:border-orange-300 transition">

                                        <h3 className="text-xl font-bold">
                                            Magnifier Mobile
                                        </h3>

                                        <p className="mt-4 text-neutral-600 leading-7">

                                            Cross-platform mobile application developed using React Native,
                                            Expo and React Native CLI with authentication, REST API integration,
                                            notifications and profile management.

                                        </p>

                                    </div>

                                    <div className="rounded-3xl border border-neutral-200 p-6 hover:border-orange-300 transition">

                                        <h3 className="text-xl font-bold">
                                            Developer Portfolio
                                        </h3>

                                        <p className="mt-4 text-neutral-600 leading-7">

                                            Personal portfolio built using React, Tailwind CSS and Motion,
                                            showcasing projects, skills, experience and contact information
                                            with a modern responsive design.

                                        </p>

                                    </div>

                                </div>

                            </section>
                            {/* Education */}

                            <section>

                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">

                                    <GraduationCap className="text-[#FF6000]" />

                                    Education

                                </h2>

                                <div className="rounded-3xl border border-neutral-200 p-8">

                                    <h3 className="text-xl font-bold">
                                        B.Sc Computer Science & Technology
                                    </h3>

                                    <p className="mt-2 text-neutral-600">
                                        TSN College of Arts & Science
                                    </p>

                                    <p className="text-neutral-500">
                                        University of Madras, Chennai
                                    </p>

                                    <div className="flex flex-wrap gap-4 mt-5">

                                        <span className="bg-orange-50 text-[#FF6000] px-4 py-2 rounded-full font-semibold">
                                            Passed - 2016
                                        </span>

                                        <span className="bg-neutral-100 text-neutral-700 px-4 py-2 rounded-full font-semibold">
                                            82%
                                        </span>

                                    </div>

                                </div>

                            </section>

                            {/* Languages */}

                            <section>

                                <h2 className="flex items-center gap-3 text-2xl font-bold mb-8">

                                    <Languages className="text-[#FF6000]" />

                                    Languages

                                </h2>

                                <div className="flex flex-wrap gap-3">

                                    {[
                                        "English",
                                        "Malayalam",
                                        "Tamil",
                                        "Hindi",
                                    ].map((language) => (

                                        <span
                                            key={language}
                                            className="px-5 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] font-semibold"
                                        >
                                            {language}
                                        </span>

                                    ))}

                                </div>



                            </section>





                        </div>

                    </div>

                </div>


            </div>
            <div className="w-full max-w-6xl mt-8">

                <section>

                    <div className="rounded-3xl bg-gradient-to-r from-[#FF6000] to-orange-500 p-8 text-white text-center">

                        <h2 className="text-3xl font-bold">
                            Thank You
                        </h2>

                        <p className="mt-4 leading-8 text-orange-100 max-w-3xl mx-auto">

                            Thank you for taking the time to review my resume.
                            I am passionate about creating scalable web and mobile
                            applications and always eager to learn new technologies.
                            I look forward to contributing my skills to your team.

                        </p>

                        <PDFDownloadLink
                            document={<ResumePDF />}
                            fileName="Harsha_KP_Resume.pdf"
                        >
                            {({ loading }) => (
                                <button
                                    className="mt-8 inline-flex items-center gap-3 bg-white text-[#FF6000] px-7 py-4 rounded-2xl font-bold hover:scale-105 transition"
                                >
                                    <Download size={20} />

                                    {loading ? "Preparing..." : "Download Resume"}

                                </button>
                            )}
                        </PDFDownloadLink>

                    </div>

                </section>

            </div>

        </div>

    );
}
