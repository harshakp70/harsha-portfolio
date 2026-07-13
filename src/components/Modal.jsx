import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Sparkles, Send, Download, ExternalLink, Code2, Check, ArrowLeft, ArrowRight, Briefcase, GraduationCap, Award, CheckCircle } from 'lucide-react';
import { projects } from '../data';
import emailjs from "@emailjs/browser";
import ResumeModal from './Resume/ResumeModal';
import ProjectModal from '../components/Projects/ProjectModal'

export default function Modal({ type, project, onClose, onSwitchProject, openContactModal }) {
  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', projectType: 'Web Development', opportunity: 'Full-TIme Job', message: '' });
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
          opportunity: contactForm.opportunity,
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

 

  const currentProjectIndex = project ? projects.findIndex(p => p.id === project.id) : -1;

  

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
                          <option>MERN Stack Web Application</option>
                          <option>React Native Mobile App</option>
                          <option>Portfolio Website</option>
                          <option>Bug Fix / Feature Development</option>
                          <option>Full-Time Opportunity</option>
                          <option>Internship Opportunity</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700 mb-1.5">
                          Opportunity
                        </label>
                        <select
                          id="contact-budget"
                          value={contactForm.opportunity}
                          onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                          className="w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors bg-neutral-25/50 font-sans"
                        >
                          <option>Full-Time Job</option>
                          <option>Internship</option>
                          <option>Freelance Project</option>
                          <option>Project Discussion</option>
                          <option>Other</option>
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
                        placeholder="Tell me about your project, opportunity, or idea..."
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
                      Thank you <strong>{contactForm.name}</strong>!

                      Your message has been received successfully.

                      I'll review your message and get back to you as soon as possible.
                    </p>
                    <div className="rounded-xl bg-neutral-50 border border-neutral-150 p-4 text-left text-xs text-neutral-600 mb-8 font-mono">
                      <div className="flex justify-between py-1 border-b border-neutral-100">
                        <span>Project Track:</span> <span>{contactForm.projectType}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-neutral-100">
                        <span>Opportunity:</span> <span>{contactForm.opportunity}</span>
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
                                className={`text-xs py-2 rounded-lg font-medium transition-all cursor-pointer relative flex flex-col items-center justify-center ${!cd.available || isPast
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
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-xs font-semibold cursor-pointer border transition-all ${isSelected
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
          {type === "resume" && (
  <ResumeModal
    onClose={onClose}
  />
)}

            {/* 4. Project Details Showroom */}
           {type === "project" && (
    <ProjectModal
        project={project}
        isOpen={true}
        onClose={onClose}
    />
)}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
