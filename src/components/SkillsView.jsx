import React from "react";
import { motion } from "motion/react";
import {
  Code2,
  Database,
  Smartphone,
  ArrowRight,
} from "lucide-react";

const frontendSkills = [
  "React.js",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Redux Toolkit",
  "React Router",
  "Axios",
  "Responsive Design",
  "Vite",
];

const backendSkills = [
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "JWT Authentication",
  "MVC Architecture",
  "API Integration",
  "CRUD Operations",
  "JSON",
];

const mobileSkills = [
  "React Native",
  "Expo",
  "React Native CLI",
  "React Navigation",
  "Async Storage",
  "REST API Integration",
  "Android Studio",
  "State Management",
  "Mobile UI",
  "Performance Optimization",
];

function SkillCard({ icon, title, description, skills }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-xl transition-all"
    >
      <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF6000] flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
        {title}
      </h3>

      <p className="text-neutral-500 leading-7 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsView({ onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 pt-8 pb-20"
    >
      {/* Hero */}

      <div className="max-w-3xl mb-16">

        <span className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 text-[#FF6000] text-sm font-semibold">
          Technical Skills
        </span>

        <h1 className="mt-6 text-5xl font-extrabold text-neutral-900 leading-tight">
          Technologies
          <span className="text-[#FF6000]"> I Work With</span>
        </h1>

        <p className="mt-6 text-lg text-neutral-500 leading-8">
          I build modern web applications, REST APIs, and
          cross-platform mobile applications using the MERN Stack,
          React Native, and modern frontend technologies.
        </p>

      </div>

      {/* Skills */}

      <div className="grid lg:grid-cols-3 gap-8">

        <SkillCard
          icon={<Code2 size={28} />}
          title="Frontend Development"
          description="Building responsive, modern, and user-friendly interfaces using React.js and modern frontend technologies."
          skills={frontendSkills}
        />

        <SkillCard
          icon={<Database size={28} />}
          title="Backend Development"
          description="Developing scalable backend services, REST APIs, authentication, and database-driven applications."
          skills={backendSkills}
        />

        <SkillCard
          icon={<Smartphone size={28} />}
          title="Mobile Development"
          description="Creating Android & iOS applications using React Native, Expo, and React Native CLI."
          skills={mobileSkills}
        />

      </div>
            {/* Development Workflow */}

      <section className="mt-24">

        <div className="mb-12">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-sm font-semibold">
            Development Workflow
          </span>

          <h2 className="text-4xl font-bold text-neutral-900 mt-5">
            From Idea to Deployment
          </h2>

          <p className="mt-4 text-neutral-500 max-w-2xl leading-8">
            My development process focuses on writing clean, scalable,
            and maintainable code while delivering responsive web and
            mobile applications.
          </p>

        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {[
            {
              title: "Planning",
              desc: "Understand requirements & design UI/UX."
            },
            {
              title: "Development",
              desc: "Build frontend & backend using MERN."
            },
            {
              title: "Testing",
              desc: "Debug, optimize and improve performance."
            },
            {
              title: "Deployment",
              desc: "Deploy using Vercel, Netlify & Render."
            },
            {
              title: "Maintenance",
              desc: "Fix bugs and continuously improve."
            }

          ].map((step, index) => (

            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15
              }}
              className="bg-white border border-neutral-200 rounded-3xl p-6 hover:shadow-xl transition-all"
            >

              <div className="w-12 h-12 rounded-full bg-[#FF6000] text-white flex items-center justify-center font-bold text-lg mb-5">
                {index + 1}
              </div>

              <h3 className="font-bold text-xl text-neutral-900 mb-3">
                {step.title}
              </h3>

              <p className="text-neutral-500 leading-7 text-sm">
                {step.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Tools */}

      <section className="mt-24">

        <div className="mb-12">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-sm font-semibold">
            Tools & Platforms
          </span>

          <h2 className="text-4xl font-bold text-neutral-900 mt-5">
            Technologies I Use Every Day
          </h2>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

          {[
            "VS Code",
            "Git",
            "GitHub",
            "Postman",
            "MongoDB Atlas",
            "Android Studio",
            "Expo",
            "React Native CLI",
            "Cloudinary",
            "Render",
            "Netlify",
            "Vercel",
            "Figma",
            "npm",
            "Node Package Manager"

          ].map((tool, index) => (

            <motion.div
              key={tool}
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .03
              }}
              whileHover={{
                y: -6
              }}
              className="bg-white border border-neutral-200 rounded-2xl p-5 text-center hover:border-orange-300 hover:shadow-lg transition-all"
            >

              <span className="font-semibold text-neutral-700">
                {tool}
              </span>

            </motion.div>

          ))}

        </div>

      </section>
            {/* What I Can Build */}

      <section className="mt-24">

        <div className="mb-12">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-sm font-semibold">
            My Expertise
          </span>

          <h2 className="text-4xl font-bold text-neutral-900 mt-5">
            What I Can Build
          </h2>

          <p className="mt-4 text-neutral-500 max-w-2xl leading-8">
            I enjoy turning ideas into real-world applications by combining
            frontend, backend, and mobile technologies to create complete
            digital solutions.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: "Responsive Websites",
              desc: "Modern React applications with beautiful responsive UI."
            },
            {
              title: "REST APIs",
              desc: "Secure backend services with Node.js, Express & MongoDB."
            },
            {
              title: "Mobile Apps",
              desc: "Cross-platform Android & iOS apps using React Native."
            },
            {
              title: "AI Applications",
              desc: "AI-powered applications integrated with modern APIs."
            }
          ].map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-neutral-200 rounded-3xl p-8 hover:border-orange-300 hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#FF6000] flex items-center justify-center text-2xl mb-6">
                {["🌐", "⚙️", "📱", "🤖"][index]}
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {item.title}
              </h3>

              <p className="text-neutral-500 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* Professional Highlights */}

      <section className="mt-24">

        <div className="mb-12">

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-[#FF6000] text-sm font-semibold">
            Professional Highlights
          </span>

          <h2 className="text-4xl font-bold text-neutral-900 mt-5">
            Why Work With Me?
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white border border-neutral-200 rounded-3xl p-8"
          >

            <h3 className="text-2xl font-bold text-neutral-900 mb-6">
              Strengths
            </h3>

            <ul className="space-y-4">

              {[
                "Build complete MERN Stack applications",
                "Develop React Native & Expo mobile apps",
                "Design responsive modern interfaces",
                "REST API development & integration",
                "Authentication & Authorization",
                "Database design with MongoDB",
                "Problem solving & debugging",
                "Quick learner and adaptable"
              ].map((item) => (

                <li
                  key={item}
                  className="flex items-center gap-3 text-neutral-700"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6000]" />
                  {item}
                </li>

              ))}

            </ul>

          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-[#FF6000] to-orange-500 rounded-3xl p-8 text-white"
          >

            <h3 className="text-2xl font-bold mb-6">
              Career Objective
            </h3>

            <p className="leading-8 text-orange-50">
              My goal is to contribute to challenging projects,
              continuously improve my technical skills, and build
              scalable software that creates meaningful impact.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div>
                <h2 className="text-4xl font-bold">MERN</h2>
                <p className="text-orange-100 mt-2">
                  Full Stack Development
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">RN</h2>
                <p className="text-orange-100 mt-2">
                  Mobile Development
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>
            {/* Statistics */}

      <section className="mt-24">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              value: "MERN",
              label: "Full Stack"
            },
            {
              value: "React",
              label: "Frontend"
            },
            {
              value: "RN",
              label: "Mobile Apps"
            },
            {
              value: "REST",
              label: "API Development"
            }

          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{ y: -6 }}
              className="bg-white border border-neutral-200 rounded-3xl p-8 text-center hover:border-orange-300 hover:shadow-xl transition-all"
            >

              <h2 className="text-4xl font-bold text-[#FF6000]">
                {item.value}
              </h2>

              <p className="mt-3 text-neutral-500">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="mt-24">

        <div className="rounded-[32px] bg-gradient-to-r from-[#FF6000] to-orange-500 p-12 text-center text-white">

          <h2 className="text-4xl font-bold">
            Looking for a MERN Stack Developer?
          </h2>

          <p className="mt-5 text-lg text-orange-100 max-w-2xl mx-auto leading-8">
            I'm passionate about building scalable web applications,
            React Native mobile apps, and continuously learning new
            technologies. I'm excited to contribute to real-world
            projects and grow as a software developer.
          </p>

          <button
          onClick={() => onOpenModal("contact")}
            className="mt-10 inline-flex items-center gap-2 bg-white text-[#FF6000] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all"
          >
            Contact Me
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

    </motion.div>
  );
}