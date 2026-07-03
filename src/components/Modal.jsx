import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Send, Download, ExternalLink, Code2, Check, ArrowLeft, ArrowRight, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../data';
import emailjs from "@emailjs/browser";

export default function Modal({ type, project, onClose, onSwitchProject, openContactModal }) {
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', projectType: 'Web Development', budget: '$5k - $10k', message: '' });
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Scheduler State
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [scheduleStep, setScheduleStep] = useState(1); // 1 = dateTime, 2 = details, 3 = success
  const [scheduleDetails, setScheduleDetails] = useState({ name: '', email: '', notes: '' });

  // Code Tab state for Project Detail
  const [activeCodeTab, setActiveCodeTab] = useState(0);

  // Handlers
 const handleContactSubmit = async (e) => {
  e.preventDefault();

  setSubmitting(true);

  try {
    const result = await emailjs.send(
      "service_6qtbofq",
      "template_r8t9v3g",
      {
        name: contactForm.name,
        email: contactForm.email,
        project: contactForm.projectType,
       budget: contactForm.budget,
        message: contactForm.message,
      },
      "QptqINc9lvM4pPT1b"
    );

    console.log(result);

    setSubmitting(false);
    setIsSubmitSuccess(true);
  } catch (error) {
    console.error(error);

    setSubmitting(false);
    alert("Failed to send message");
  }
};

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    setScheduleStep(3);
  };

  const handleDownloadResume = () => {
    // Generate text-based resume fallback download
    const rawResumeText = `HARSHA.K P - Portfolio Resume
Architecting the future of web and mobile through React expertise.

CONTACT:
Email: harsharenjith70@gmail.com
Website: https://harsharenjith.dev.helper/

PROFESSIONAL EXPERIENCE:
1. Lead Web & Mobile Developer - Vanguard Retail (2022 - Present)
   - Built serverless high-performing checkout routes saving millions.
   - Configured custom bundlers reducing LCP from 2.6s to 0.85s.
2. Web Applications Engineer - Lumina Labs (2020 - 2022)
   - Spearheaded enterprise analytics pipeline rendering millions of nodes in D3.
   - Refactored state synchronization using React Query.

SKILLS:
- Web Specialist: React, Next.js, Tailwind CSS v4, TypeScript, SEO, Webpack, .
- Mobile Expert: React Native, Expo, Reanimated 3, Firebase, Android Studio.

EDUCATION:
- B.S. in Computer Science And Technology (2013-2016)

CERTIFICATIONS:
- Advanced React & Next Solutions Architect
- Google Cloud - Mobile Deployment Associate
`;
    const element = document.createElement("a");
    const file = new Blob([rawResumeText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Developer_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const currentProjectIndex = project ? PROJECTS.findIndex(p => p.id === project.id) : -1;

  const navigateProject = (dir) => {
    if (!project || currentProjectIndex === -1) return;
    let nextIndex = dir === 'next' ? currentProjectIndex + 1 : currentProjectIndex - 1;
    if (nextIndex >= PROJECTS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = PROJECTS.length - 1;
    onSwitchProject(PROJECTS[nextIndex]);
    setActiveCodeTab(0);
  };

  // Generate 2026 June dates list (simulated scheduler calendar dates)
  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const calendarDays = [
    { day: 24, available: false }, { day: 25, available: false }, { day: 26, available: false }, { day: 27, available: false }, { day: 28, available: false }, { day: 29, available: false }, { day: 30, available: false },
    { day: 1, available: true }, { day: 2, available: true }, { day: 3, available: true }, { day: 4, available: true }, { day: 5, available: true }, { day: 6, available: false }, { day: 7, available: false },
    { day: 8, available: true }, { day: 9, available: true }, { day: 10, available: true }, { day: 11, available: true }, { day: 12, available: true }, { day: 13, available: false }, { day: 14, available: false },
    { day: 15, available: true }, { day: 16, available: true }, { day: 17, available: true }, { day: 18, available: true }, { day: 19, available: true }, { day: 20, available: false }, { day: 21, available: false },
    { day: 22, available: true, isToday: true }, { day: 23, available: true }, { day: 24, available: true }, { day: 25, available: true }, { day: 26, available: true }, { day: 27, available: false }, { day: 28, available: false },
  ];
  const timeSlots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:30 PM', '5:00 PM'];

  if (type === 'none') return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/65 backdrop-blur-sm"
        />

        {/* Modal Window Container */}
        <motion.div
          id="modal-window"
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-neutral-200 border border-neutral-100 flex flex-col focus:outline-none"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white/90 backdrop-blur-md px-6 py-4">
            <div className="flex items-center gap-3">
              {type === 'contact' && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg">Start a Conversation</h3>
                    <p className="text-neutral-500 text-xs mt-0.5">Let's create something epic together.</p>
                  </div>
                </>
              )}
              {type === 'schedule' && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg">Schedule a Strategy Call</h3>
                    <p className="text-neutral-500 text-xs mt-0.5">Choose an open slot to sync on details.</p>
                  </div>
                </>
              )}
              {type === 'resume' && (
                <>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-900">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg">Professional Resume</h3>
                    <p className="text-neutral-500 text-xs mt-0.5">Full engineering & domain background.</p>
                  </div>
                </>
              )}
              {type === 'project' && project && (
                <>
                  <div className="flex h-7 items-center justify-center rounded-full bg-orange-100 px-3 text-[10px] font-mono font-bold tracking-wider text-orange-600">
                    {project.category}
                  </div>
                  <h3 className="font-display font-bold text-neutral-900 text-lg hidden sm:block">
                    {project.title}
                  </h3>
                </>
              )}
            </div>

            <button
              id="modal-close"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-100 bg-white text-neutral-400 hover:text-neutral-800 hover:border-neutral-200 shadow-sm transition-all duration-150 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Dynamic Content */}
          <div className="flex-1 p-6 sm:p-8">
            
            {/* 1. Contact Form Modal */}
            {type === 'contact' && (
              <div id="contact-modal-content">
                {!isSubmitSuccess ? (
                  <form onSubmit={handleContactSubmit} className="space-y-6 max-w-xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="Jane Doe"
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Project Framework
                        </label>
                        <select
                          id="contact-project-type"
                          value={contactForm.projectType}
                          onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                        >
                          <option>Web Development (React / Next.js)</option>
                          <option>Mobile App (React Native / Expo)</option>
                          <option>Full-stack Cross-platform Suite</option>
                          <option>Hourly Consulting / Advisory</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Estimated Budget
                        </label>
                        <select
                          id="contact-budget"
                          value={contactForm.budget}
                          onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                        >
                          <option>$2.5k - $5k</option>
                          <option>$5k - $10k</option>
                          <option>$10k - $25k</option>
                          <option>$25k+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                        Tell me about your product or idea
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="I want to build a real-time portfolio management portal with dynamic data visualization tools..."
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 resize-none font-sans"
                      />
                    </div>

                    <button
                      id="contact-submit"
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FF6000] text-white py-3.5 px-4 font-display font-medium text-sm hover:bg-orange-700 active:scale-98 shadow-md shadow-orange-500/10 cursor-pointer transition-all duration-150 disabled:bg-neutral-300"
                    >
                      {submitting ? 'Sending Request...' : 'Send Message Now'}
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                ) : (
                  <motion.div
                    id="contact-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12 max-w-md mx-auto"
                  >
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-4 ring-emerald-50 shadow-inner mb-6">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <h4 className="font-display font-extrabold text-neutral-900 text-2xl mb-3">
                      Awesome, Message Sent!
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                      Hi, <strong>{contactForm.name}</strong>! Thank you for reaching out. I've received your request about <strong>{contactForm.projectType}</strong> and will read through it, responding at <strong>{contactForm.email}</strong> within 24 hours.
                    </p>
                    <div className="rounded-xl bg-neutral-50 border border-neutral-150 p-4 text-left text-xs text-neutral-600 mb-8 font-mono">
                      <div className="flex justify-between py-1 border-b border-neutral-100">
                        <span>Project Track:</span> <span>{contactForm.projectType}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-neutral-100">
                        <span>Allocated Budget:</span> <span>{contactForm.budget}</span>
                      </div>
                      <div className="flex justify-between py-1 pt-2">
                        <span>Status:</span> <span className="text-emerald-600 font-bold">QUEUED FOR REVIEW</span>
                      </div>
                    </div>
                    <button
                      id="contact-dismiss"
                      onClick={onClose}
                      className="inline-flex rounded-xl bg-neutral-900 text-white font-medium text-sm px-6 py-2.5 hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Return to Portfolio
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* 2. Schedule strategy Call */}
            {type === 'schedule' && (
              <div id="schedule-modal-content" className="max-w-2xl mx-auto">
                {scheduleStep === 1 && (
                  <div className="space-y-6">
                    <p className="text-center text-sm text-neutral-500 max-w-md mx-auto mb-4">
                      Book a quick 15-minute introductory video meeting to talk feasibility, architecture solutions, and timeline scopes.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Left: June 2026 Calendar */}
                      <div className="border border-neutral-150 rounded-xl p-4 bg-neutral-50/50">
                        <div className="flex justify-between items-center mb-4 px-1">
                          <span className="text-xs font-bold font-display uppercase tracking-wider text-neutral-700">
                            June 2026
                          </span>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            UTC -07:00
                          </span>
                        </div>
                        <div className="grid grid-cols-7 text-center gap-1 mb-2">
                          {weekdays.map((wd, i) => (
                            <span key={i} className="text-[10px] font-bold text-neutral-400 py-1 font-mono">
                              {wd}
                            </span>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                          {calendarDays.map((cd, i) => {
                            const isSelected = selectedDate === `2026-06-${cd.day}`;
                            const isPast = cd.day < 22;
                            return (
                              <button
                                key={i}
                                disabled={!cd.available || isPast}
                                onClick={() => setSelectedDate(`2026-06-${cd.day}`)}
                                className={`text-xs py-2 rounded-lg font-medium transition-all cursor-pointer relative flex flex-col items-center justify-center ${
                                  !cd.available || isPast
                                    ? 'text-neutral-300 pointer-events-none'
                                    : cd.isToday
                                      ? isSelected
                                        ? 'bg-orange-600 text-white shadow-md'
                                        : 'border border-orange-500 text-orange-600 font-bold bg-orange-50/40 hover:bg-orange-50'
                                      : isSelected
                                        ? 'bg-orange-600 text-white shadow-md shadow-orange-500/10'
                                        : 'bg-white hover:bg-neutral-100 text-neutral-800 shadow-sm border border-neutral-200/50'
                                }`}
                              >
                                <span>{cd.day}</span>
                                {cd.isToday && (
                                  <span className={`absolute bottom-0.5 h-1 w-1 rounded-full ${isSelected ? 'bg-white' : 'bg-orange-500'}`} />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right: Available Times */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <span className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3 ml-1 font-sans">
                            Available Slots
                          </span>
                          {!selectedDate ? (
                            <div className="flex flex-col items-center justify-center p-8 text-center border border-dashed border-neutral-200 rounded-xl bg-white h-48">
                              <Calendar className="h-6 w-6 text-neutral-300 stroke-[1.5] mb-2" />
                              <span className="text-xs text-neutral-400 font-sans">
                                Select a date on the calendar to reveal available sync hours.
                              </span>
                            </div>
                          ) : (
                            <div className="space-y-2">
                              {timeSlots.map((time, idx) => {
                                const isSelected = selectedTime === time;
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => setSelectedTime(time)}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${
                                      isSelected
                                        ? 'bg-orange-600 text-white border-orange-600 shadow-md shadow-orange-500/10'
                                        : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                                    }`}
                                  >
                                    <div className="flex items-center gap-2">
                                      <Clock className="h-3.5 w-3.5 opacity-80" />
                                      <span>{time}</span>
                                    </div>
                                    <span className={`text-[10px] uppercase tracking-wider font-bold ${isSelected ? 'text-white/90' : 'text-neutral-400'}`}>
                                      {isSelected ? 'SELECTED' : 'OPEN'}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        <button
                          id="scheduler-next"
                          disabled={!selectedDate || !selectedTime}
                          onClick={() => setScheduleStep(2)}
                          className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-neutral-900 text-white py-3 px-4 font-display font-medium text-xs hover:bg-neutral-800 disabled:bg-neutral-200 disabled:text-neutral-400 transition-colors cursor-pointer"
                        >
                          Next: Sync Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {scheduleStep === 2 && (
                  <form onSubmit={handleScheduleSubmit} className="space-y-4 max-w-md mx-auto">
                    <div className="border border-neutral-150 rounded-xl p-4 bg-orange-50/20 flex items-center justify-between text-xs text-neutral-700 mb-2 font-mono">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-orange-600" />
                        <span>{selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span>{selectedTime}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setScheduleStep(1); setSelectedTime(null); }}
                        className="text-[10px] text-orange-600 font-bold hover:underline"
                      >
                        Change
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1 font-sans">
                        Your Name
                      </label>
                      <input
                        id="schedule-name"
                        type="text"
                        required
                        value={scheduleDetails.name}
                        onChange={(e) => setScheduleDetails({ ...scheduleDetails, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1 font-sans">
                        Email Address
                      </label>
                      <input
                        id="schedule-email"
                        type="email"
                        required
                        value={scheduleDetails.email}
                        onChange={(e) => setScheduleDetails({ ...scheduleDetails, email: e.target.value })}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1 font-sans">
                        Topic or Context (Optional)
                      </label>
                      <textarea
                        id="schedule-notes"
                        rows={3}
                        value={scheduleDetails.notes}
                        onChange={(e) => setScheduleDetails({ ...scheduleDetails, notes: e.target.value })}
                        placeholder="Introduce core architectural questions, or outline specs..."
                        className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 resize-none font-sans"
                      />
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setScheduleStep(1)}
                        className="flex-1 rounded-xl border border-neutral-200 text-neutral-700 font-medium text-xs px-4 py-3 hover:bg-neutral-50 text-center cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        id="schedule-confirm"
                        type="submit"
                        className="flex-1 rounded-xl bg-[#FF6000] text-white font-medium text-xs px-4 py-3 hover:bg-orange-700 text-center flex items-center justify-center gap-1 cursor-pointer"
                      >
                        Confirm Booking
                        <Check className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}

                {scheduleStep === 3 && (
                  <motion.div
                    id="schedule-success"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8 max-w-md mx-auto animate-fade-in"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 ring-4 ring-emerald-50 shadow-inner mb-6">
                      <Clock className="h-6 w-6" />
                    </div>
                    <h4 className="font-display font-extrabold text-neutral-900 text-2xl mb-2">
                      Intro Call Confirmed!
                    </h4>
                    <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                      Hi, <strong>{scheduleDetails.name}</strong>! Your strategy call has been logged on <strong>{selectedDate && new Date(selectedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</strong> at <strong>{selectedTime}</strong>. A calendar invite complete with an audio/video link has been dispatched to <strong>{scheduleDetails.email}</strong>.
                    </p>

                    <div className="rounded-xl border border-neutral-200 bg-neutral-25/30 p-4 text-left space-y-2 mb-8 divide-y divide-neutral-100 font-mono">
                      <div className="flex justify-between items-center text-xs text-neutral-600 pb-2">
                        <span>Host:</span>
                        <span className="font-sans font-bold">HARSHA.K P (React Architect)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-neutral-600 py-2">
                        <span>Video Session:</span>
                        <span className="text-orange-600 font-bold font-sans flex items-center gap-1">
                          Google Meet <ExternalLink className="h-3 w-3" />
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-neutral-600 pt-2">
                        <span>Status:</span>
                        <span className="text-emerald-600 font-bold flex items-center gap-1 font-sans">
                          <Check className="h-3 w-3" /> CONFIRMED
                        </span>
                      </div>
                    </div>

                    <button
                      id="schedule-dismiss"
                      onClick={onClose}
                      className="inline-flex rounded-xl bg-neutral-900 text-white font-semibold text-xs px-6 py-2.5 hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Return to Portfolio
                    </button>
                  </motion.div>
                )}
              </div>
            )}

            {/* 3. Resume Modal */}
            {type === 'resume' && (
              <div id="resume-modal-content" className="space-y-8">
                {/* Print and Download Toolbar */}
                <div className="flex flex-wrap justify-between items-center gap-3 bg-neutral-50 rounded-xl p-3 border border-neutral-150">
                  <span className="text-xs text-neutral-500 font-mono flex items-center gap-1.5 pl-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Interactive markup layout for printable reference review
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50 text-xs font-semibold text-neutral-700 transition-all cursor-pointer shadow-sm"
                    >
                      Print Resume
                    </button>
                    <button
                      id="resume-download-btn"
                      onClick={handleDownloadResume}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6000] hover:bg-orange-700 text-xs font-semibold text-white transition-all cursor-pointer shadow-sm"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download Resume
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Left Column: Contact and Skills */}
                  <div className="space-y-6 md:border-r md:border-neutral-100 md:pr-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                        Contact Info
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-700 font-mono">
                        <li>
                          <span className="text-neutral-400">Email:</span>
                          <span className="block font-sans font-medium text-neutral-900">harsharenjith70@gmail.com</span>
                        </li>
                        <li>
                          <span className="text-neutral-400">GitHub:</span>
                          <a href="#github" className="block text-orange-600 font-sans font-medium hover:underline">github.com/developer-harsha</a>
                        </li>
                        <li>
                          <span className="text-neutral-400">LinkedIn:</span>
                          <a href="#linkedin" className="block text-orange-600 font-sans font-medium hover:underline">linkedin.com/in/harsharenjith</a>
                        </li>
                        <li>
                          <span className="text-neutral-400">Location:</span>
                          <span className="block font-sans font-medium text-neutral-900">San Francisco, CA (Remote Friendly)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                        Web Competencies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Redux', 'Zustand', 'TypeScript', 'Jest', 'Webpack', 'CSS Modules'].map((s, i) => (
                          <span key={i} className="text-[10px] font-mono font-medium bg-neutral-100 text-neutral-800 px-2 py-0.5 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3 font-mono">
                        Mobile Competencies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {['React Native', 'Expo SDK', 'Reanimated 3', 'Skia graphics', 'Firebase Core', 'iOS Bridging', 'Android Gradle', 'WatermelonDB'].map((s, i) => (
                          <span key={i} className="text-[10px] font-mono font-medium bg-orange-50 text-orange-800 px-2 py-0.5 rounded">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2 font-mono">
                        Sectors
                      </h4>
                      <ul className="text-xs text-neutral-700 space-y-1.5 font-sans">
                        <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> Decentralized Finance (DeFi)</li>
                        <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> Headless Commerce</li>
                        <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-emerald-500" /> Core Platform Tooling</li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Experience and Education */}
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-5 font-mono flex items-center gap-2">
                        <Briefcase className="h-4 w-4" /> Professional Experience
                      </h4>
                      <div className="space-y-6 font-sans">
                        {/* Job 1 */}
                        <div className="relative pl-5 border-l-2 border-orange-500/30">
                          <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-orange-600 ring-4 ring-white" />
                          <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                            <h5 className="font-display font-bold text-neutral-900 text-sm">
                              Senior Web & Mobile Engineer
                            </h5>
                            <span className="text-[10px] text-neutral-400 font-mono">
                              2022 - PRESENT
                            </span>
                          </div>
                          <span className="block text-xs font-semibold text-orange-600 mb-2 font-mono">
                            Vanguard Retail Commerce Systems
                          </span>
                          <p className="text-xs text-neutral-500 leading-relaxed">
                            Built, managed and optimized custom React and Next.js digital store architectures on Shopify Hydrogen, driving over $45M in yearly transactions. Reduced aggregate LCP metric to 0.85s. Developed React Native/Expo logistics companion apps resulting in a 40% uptick in fulfillment speeds.
                          </p>
                        </div>

                        {/* Job 2 */}
                        <div className="relative pl-5 border-l-2 border-neutral-100">
                          <div className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full bg-neutral-300 ring-4 ring-white" />
                          <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1.5">
                            <h5 className="font-display font-bold text-neutral-900 text-sm">
                              Web Specialist
                            </h5>
                            <span className="text-[10px] text-neutral-400 font-mono">
                              2020 - 2022
                            </span>
                          </div>
                          <span className="block text-xs font-semibold text-neutral-600 mb-2 font-mono">
                            Lumina Analytics & SaaS Platforms
                          </span>
                          <p className="text-xs text-neutral-500 leading-relaxed">
                            Pioneered vector coordinate dashboard integrations plotting real-time telemetry pools using D3 graphs and high-frequency WebSocket updates. Standardized responsive layouts via Tailwind CSS across unified multi-tenant customer views.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 font-mono flex items-center gap-2">
                        <GraduationCap className="h-4 w-4" /> Education
                      </h4>
                      <div className="pl-5 border-l-2 border-neutral-100 relative font-sans">
                        <div className="absolute -left-[6px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-200 ring-4 ring-white" />
                        <div className="flex justify-between items-baseline gap-2 mb-1">
                          <h5 className="font-display font-semibold text-neutral-900 text-xs">
                            B.S. in Computer Science
                          </h5>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            2016 - 2020
                          </span>
                        </div>
                        <span className="text-[11px] text-neutral-500">
                          Tech Institute of Engineering • High Honors Graduate
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4 font-mono flex items-center gap-2">
                        <Award className="h-4 w-4" /> Core Technical Philosophies
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-500 font-sans">
                        <li className="flex gap-2 items-start">
                          <div className="mt-0.5 rounded bg-orange-50 text-orange-600 p-0.5"><Check className="h-3 w-3" /></div>
                          <span><strong>Semantic DOM Integrity</strong>: Pixel accuracy matching Figma guidelines perfectly across viewport densities.</span>
                        </li>
                        <li className="flex gap-2 items-start">
                          <div className="mt-0.5 rounded bg-orange-50 text-orange-600 p-0.5"><Check className="h-3 w-3" /></div>
                          <span><strong>Performance First</strong>: Keeping state loops clean, preventing visual layout shifts, prioritizing lazy caches.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Project Details Showroom */}
            {type === 'project' && project && (
              <div id="project-modal-content" className="space-y-8">
                
                {/* Project Header Panel */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="md:col-span-2">
                    <h2 className="font-display font-black text-neutral-900 text-3xl tracking-tight leading-tight">
                      {project.title}
                    </h2>
                    <p className="text-neutral-500 text-sm mt-2 leading-relaxed font-sans max-w-xl">
                      {project.longDescription}
                    </p>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-150 rounded-xl p-4 space-y-3">
                    <div className="text-[10px] font-mono uppercase tracking-wider font-bold text-neutral-400">
                      Primary Tech Stack
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono font-medium rounded-md bg-white border border-neutral-200 px-2.5 py-1 text-neutral-800 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="border border-neutral-150 rounded-2xl p-4 bg-orange-50/10">
                      <span className="block text-[10px] font-mono tracking-wider uppercase text-neutral-400 mb-1">
                        {metric.label}
                      </span>
                      <strong className="font-display font-extrabold text-neutral-900 text-lg sm:text-xl font-sans">
                        {metric.value}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Main section: Features & Code block */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 font-sans">
                  {/* Left: Core product features */}
                  <div className="lg:col-span-2 space-y-4">
                    <h4 className="font-display font-bold text-neutral-950 text-base flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-orange-600" /> Product Milestones
                    </h4>
                    <ul className="space-y-4 text-xs text-neutral-600">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-3 items-start leading-relaxed p-3.5 bg-neutral-25 rounded-xl border border-neutral-100">
                          <div className="h-5 w-5 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 text-[10px] font-bold">
                            {idx + 1}
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Code Inspector */}
                  <div className="lg:col-span-3 flex flex-col h-full min-h-[300px]">
                    <div className="flex justify-between items-center bg-neutral-900 px-4 py-2 border-b border-neutral-850 rounded-t-xl">
                      <div className="flex items-center gap-2">
                        <Code2 className="h-3.5 w-3.5 text-orange-500" />
                        <span className="text-[10px] font-mono text-neutral-300 font-bold tracking-tight">Code Inspector</span>
                      </div>
                      <div className="flex gap-1.5">
                        {project.codeFiles.map((file, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveCodeTab(i)}
                            className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer transition-colors ${i === activeCodeTab ? 'bg-[#FF6000] text-white font-bold' : 'text-neutral-400 hover:text-white'}`}
                          >
                            {file.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 bg-neutral-950 p-4 rounded-b-xl overflow-x-auto text-[11px] font-mono text-neutral-300 leading-relaxed border border-neutral-850 h-72">
                      <pre className="text-left"><code>{project.codeFiles[activeCodeTab]?.snippet}</code></pre>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Controls / Carousel Navigation */}
                <div className="flex justify-between items-center pt-6 border-t border-neutral-150 font-sans">
                  <div className="flex gap-2">
                    <button
                      id="proj-nav-prev"
                      onClick={() => navigateProject('prev')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-150 hover:bg-neutral-50 text-[10px] font-bold text-neutral-600 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" /> Prev
                    </button>
                    <button
                      id="proj-nav-next"
                      onClick={() => navigateProject('next')}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-150 hover:bg-neutral-50 text-[10px] font-bold text-neutral-600 uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Next <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => { onClose(); openContactModal(); }}
                    className="flex items-center gap-1.5 rounded-xl bg-neutral-900 border border-neutral-900 hover:bg-neutral-850 hover:border-neutral-850 text-white font-display font-medium text-xs px-4 py-2 transition-colors cursor-pointer"
                  >
                    Discuss This Solution
                  </button>
                </div>

              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
