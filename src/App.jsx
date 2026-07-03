import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, Linkedin, Twitter
} from 'lucide-react';
import Header from './components/Header';
import Modal from './components/Modal';
import HomeView from './components/HomeView';
import SkillsView from './components/SkillsView';
import ProjectsView from './components/ProjectsView';
import ContactView from './components/ContactView';
import { SERVICES, PROJECTS } from './data';

export default function App() {
  // Modal tracking
  const [modalType, setModalType] = useState('none'); // 'none' | 'contact' | 'schedule' | 'resume' | 'project'
  const [selectedProject, setSelectedProject] = useState(null);

  // Active page selection state: 'home' | 'projects' | 'skills' | 'contact'
  const [currentPage, setCurrentPage] = useState('home');

  // Handlers
  const handleOpenModal = (type, targetProj = null) => {
    setSelectedProject(targetProj);
    setModalType(type);
    document.body.style.overflow = 'hidden'; // Lock background scrolling
  };

  const handleCloseModal = () => {
    setModalType('none');
    setSelectedProject(null);
    document.body.style.overflow = ''; // Unlock background scrolling
  };

  const handleSwitchProject = (proj) => {
    setSelectedProject(proj);
  };

  const handleOpenProjectModal = (projId) => {
    const proj = PROJECTS.find(p => p.id === projId);
    if (proj) {
      handleOpenModal('project', proj);
    }
  };

  const handleNavigatePage = (pageId) => {
    setCurrentPage(pageId);
  };

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden flex flex-col justify-between">
      
      {/* Fixed Header */}
      <Header 
        onOpenModal={(type) => handleOpenModal(type)} 
        activeSection={currentPage} 
        onChangePage={handleNavigatePage}
      />

      {/* Main Content Sections */}
      <main className="pt-24 sm:pt-28 flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <HomeView 
              key="home"
              services={SERVICES}
              projects={PROJECTS}
              onOpenModal={handleOpenModal}
              onScrollToSegment={handleNavigatePage}
            />
          )}

          {currentPage === 'skills' && (
            <SkillsView 
              key="skills"
              onOpenModal={handleOpenModal}
            />
          )}

          {currentPage === 'projects' && (
            <ProjectsView 
              key="projects"
              onOpenModal={handleOpenModal}
              onOpenProjectModal={handleOpenProjectModal}
            />
          )}

          {currentPage === 'contact' && (
            <ContactView 
              key="contact"
              onOpenModal={handleOpenModal}
            />
          )}
        </AnimatePresence>
      </main>

      {/* 5. Main Unified Footer always visible */}
      <footer className="border-t border-neutral-150 bg-white py-12 md:py-16 mt-20 select-none">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div>
            <span className="text-lg font-display font-black tracking-tighter text-neutral-900 block mb-2 font-sans">
              HARSHA<span className="text-[#FF6000]">.</span>K P
            </span>
            <p className="text-neutral-500 text-xs leading-relaxed max-w-sm font-sans">
              Architecting the future of web and mobile through React expertise.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6 font-sans">
            
            {/* Social link tracks */}
            <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-500">
              <a href="#github" className="hover:text-orange-600 flex items-center gap-1.5 transition-colors">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a href="#linkedin" className="hover:text-orange-600 flex items-center gap-1.5 transition-colors">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href="#twitter" className="hover:text-orange-600 flex items-center gap-1.5 transition-colors">
                <Twitter className="h-4 w-4" /> Twitter
              </a>
            </div>

            <div className="text-[11px] text-neutral-400 md:text-right">
              <div>© 2024 HARSHA.K P. All rights reserved. Built with React & Tailwind CSS.</div>
              <div className="flex gap-3 mt-1.5 md:justify-end text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                <a href="#privacy" className="hover:text-neutral-600">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-neutral-600">Terms of Use</a>
              </div>
            </div>

          </div>

        </div>
      </footer>

      {/* Unified Overlay Modal System */}
      <Modal
        type={modalType}
        project={selectedProject}
        onClose={handleCloseModal}
        onSwitchProject={handleSwitchProject}
        openContactModal={() => handleOpenModal('contact')}
      />

    </div>
  );
}
