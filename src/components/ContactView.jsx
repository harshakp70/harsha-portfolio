import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail, MapPin, Clock, Github, Linkedin, Twitter, FileText,
  Send, Sparkles, AlertCircle, Apple, Monitor, Play
} from 'lucide-react';
import emailjs from "@emailjs/browser";

export default function ContactView({ onOpenModal }) {
  // Local Form state
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_6qtbofq",
        "template_r8t9v3g",
        {
          name: formState.name,
          email: formState.email,
          message: formState.message,
        },
        "QptqINc9lvM4pPT1b"
      );

      console.log("Email sent:", result);

      setFormSubmitted(true);

      setFormState({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        error?.text ||
        error?.message ||
        "Failed to send email"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadResume = () => {
    onOpenModal('resume');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="max-w-7xl mx-auto px-6 py-8 md:py-16"
    >
      {/* Page Heading Headers */}
      <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[#FF6000] block mb-3 font-semibold">
        CONTACT ME
      </span>

      <h1 className="font-display font-extrabold text-neutral-900 text-4xl sm:text-5xl leading-[1.1] mb-5">
        Let's Build Something
        <br className="hidden sm:block" />
        <span className="text-[#FF6000]">Amazing Together.</span>
      </h1>

      <p className="text-neutral-500 text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
        I'm currently open to full-time opportunities, internships, freelance work,
        and exciting MERN Stack or React Native projects.
        Feel free to reach out—I'd love to connect with you.
      </p>

      {/* Two Columns Grid Layout */}
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start mb-12 mt-8">

        {/* Left Card Form layout (7 of 12 columns wide) */}
        <div className="lg:col-span-7 bg-white border border-neutral-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full border-b border-neutral-200/80 px-1 py-2 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full border-b border-neutral-200/80 px-1 py-2 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-black uppercase tracking-wider text-neutral-400 mb-1.5 font-sans">
                  YOUR MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project or inquiry..."
                  className="w-full border-b border-neutral-200/80 px-1 py-3 text-sm text-neutral-800 placeholder:text-neutral-300 focus:border-[#FF6000] focus:outline-none bg-transparent resize-none transition-colors font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-xl bg-[#FF6000] text-white py-3.5 px-6 font-display font-medium text-xs tracking-wider font-bold hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/10 active:scale-98 transition-all duration-150 disabled:bg-neutral-300 select-none cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
                <Play className="h-3 w-3 fill-current rotate-0 stroke-[3]" />
              </button>

            </form>
          ) : (
            <div className="text-center py-12 max-w-md mx-auto">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-[#FF6000] ring-4 ring-orange-50 shadow-inner mb-6">
                <Sparkles className="h-6 w-6" />
              </div>
              <h4 className="font-display font-black text-neutral-900 text-xl mb-2">Message Sent!</h4>
              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Thank you,
                <strong> {formState.name}</strong>!

                Your message has been received successfully.
                I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="inline-flex rounded-xl bg-neutral-900 text-white font-medium text-xs px-6 py-2.5 hover:bg-neutral-800 cursor-pointer"
              >
                Send another message
              </button>
            </div>
          )}

        </div>

        {/* Right Sidebar Details layout (5 of 12 columns wide) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8 h-full">

          {/* Top segment availability notice card */}
          <div className="border border-neutral-150 rounded-2xl p-4 bg-white shadow-xs flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6000]" />
            </span>
            <div className="text-xs text-neutral-700 font-medium font-sans">
              <strong>Open to Work</strong>: Available for Full-Time, Internship,
              Freelance, MERN Stack & React Native opportunities.
            </div>
          </div>

          {/* Contact coordinates list */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <Mail className="h-4 w-4" />
              </div>
              <span>harsharenjith70@gmail.com</span>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <MapPin className="h-4 w-4" />
              </div>
              <span>Kerala, India • Open to Remote & On-site</span>
            </div>

            <div className="flex items-center gap-3.5 text-xs text-neutral-500 font-sans">
              <div className="flex h-8 w-8 rounded-lg bg-orange-50 text-[#FF6000] items-center justify-center border border-orange-100">
                <Clock className="h-4 w-4" />
              </div>
              <span>Usually replies within 24 hours</span>
            </div>
          </div>

          {/* Connect social boxes layout */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://github.com/harshakp70"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans"
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">GITHUB</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </a>

            <a
              href="https://www.linkedin.com/in/harshakp70/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans"
            >
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">LINKEDIN</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </a>

            <button
              onClick={handleDownloadResume}
              className="group flex items-center justify-between p-3.5 rounded-xl border border-neutral-100 bg-white hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/5 transition-all outline-none font-sans cursor-pointer text-left"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-neutral-400 group-hover:text-[#FF6000]" />
                <span className="text-xs font-bold text-neutral-700 group-hover:text-neutral-900">RESUME</span>
              </div>
              <span className="text-[10px] text-neutral-400 group-hover:text-[#FF6000] select-none">&gt;</span>
            </button>
          </div>

          {/* Workstation mock iMac code container */}
          <div className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 text-white">

            <h3 className="text-2xl font-bold mb-6">
              Let's Connect 🚀
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-neutral-400">Role</p>
                <h4 className="font-semibold">
                  MERN Stack Developer
                </h4>
              </div>

              <div>
                <p className="text-sm text-neutral-400">Mobile</p>
                <h4 className="font-semibold">
                  React Native Developer
                </h4>
              </div>

              <div>
                <p className="text-sm text-neutral-400">Location</p>
                <h4 className="font-semibold">
                  Kerala, India
                </h4>
              </div>

              <div>
                <p className="text-sm text-neutral-400">Status</p>

                <span className="inline-flex items-center gap-2 text-green-400 font-semibold">

                  <span className="w-2 h-2 rounded-full bg-green-400"></span>

                  Open to Work

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
