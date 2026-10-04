import React, { useState, useEffect } from 'react';
import { PortraitKane } from './components/PortraitKane';
import { PhoneMockupEffy } from './components/PhoneMockupEffy';
import { TradeMockup } from './components/TradeMockup';
import { ClientLogos } from './components/ClientLogos';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Copy, Check } from 'lucide-react';

export default function App() {
  // Navigation pill expand/collapse states (Info is expanded by default, Work and Contact show +)
  const [infoOpen, setInfoOpen] = useState(true);
  const [workOpen, setWorkOpen] = useState(true);
  const [contactOpen, setContactOpen] = useState(true);

  // Language toggle (EN vs CY / Welsh)
  const [language, setLanguage] = useState<'EN' | 'CY'>('EN');

  // Real-time ticking digital clock
  const [currentTime, setCurrentTime] = useState('13:55:19');

  // Selected project for modal inspection
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    details: string;
    role: string;
    year: string;
    client: string;
    tags: string[];
  } | null>(null);

  // Copy email toast state
  const [copied, setCopied] = useState(false);

  // Profile switcher between Exact Screenshot (Jonathan Kane) and Personalized (Manass Kusko)
  const [isKuskoMode, setIsKuskoMode] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    const email = isKuskoMode ? 'kuskomanass@gmail.com' : 'contact@jkane.co';
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const effyProject = {
    title: 'Effy',
    description:
      'A social platform with a twist. Effy is focused on giving you access to share your thoughts, experiences and knowledge with the world through the power of voice.',
    details:
      'Complete end-to-end mobile design system, audio wave visualization, micro-interactions, and visual brand identity for the next-generation voice-first community.',
    role: 'Creative Director & Brand Lead',
    year: '2024',
    client: 'Effy Social Corp',
    tags: ['Brand Identity', 'Product Design', 'iOS App', 'Voice Audio UI'],
  };

  const tradeProject = {
    title: 'Trade',
    description:
      'Trade is a fast growth logistics company, innovating the way the world does business. Offering cutting edge technology at the intersection of international trade and global supply chain.',
    details:
      'Architectural visual guidelines, signage, digital portal interface, and high-impact international marketing collateral for global logistics infrastructure.',
    role: 'Brand Architecture & Design System',
    year: '2023',
    client: 'Trade Global Logistics',
    tags: ['Logistics', 'Enterprise Brand', 'Spatial Signage', 'Web Platform'],
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-neutral-900 flex flex-col justify-center items-center py-6 sm:py-10 px-3 font-sans selection:bg-[#003FC0] selection:text-white">
      
      {/* Central Floating Column matching exact proportions of the screenshot */}
      <div className="w-full max-w-[420px] sm:max-w-[440px] space-y-3">
        
        {/* ================= CARD 1: TOP BAR ================= */}
        <header className="w-full bg-white rounded-full px-4 py-2.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#EEEEEE]">
          
          {/* Logo Glyph on Left */}
          <div className="flex items-center pl-1">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-neutral-900"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Head */}
              <circle cx="12" cy="6" r="2.2" fill="currentColor" stroke="none" />
              {/* Arms / Bar */}
              <line x1="6" y1="12" x2="18" y2="12" />
              {/* Left Leg */}
              <line x1="8" y1="18.5" x2="12" y2="12" />
              {/* Right Leg */}
              <line x1="16" y1="18.5" x2="12" y2="12" />
            </svg>
          </div>

          {/* Navigation Pills on Right */}
          <nav className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Info Pill (Blue #003FC0 with Minus when open) */}
            <button
              type="button"
              onClick={() => setInfoOpen(!infoOpen)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                infoOpen
                  ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                  : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
              }`}
            >
              <span>Info</span>
              {infoOpen ? (
                /* Minus circle */
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                /* Plus circle */
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>

            {/* Work Pill */}
            <button
              type="button"
              onClick={() => setWorkOpen(!workOpen)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                workOpen
                  ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                  : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
              }`}
            >
              <span>Work</span>
              {workOpen ? (
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>

            {/* Contact Pill */}
            <button
              type="button"
              onClick={() => setContactOpen(!contactOpen)}
              className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                contactOpen
                  ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                  : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
              }`}
            >
              <span>Contact</span>
              {contactOpen ? (
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                  <circle cx="8" cy="8" r="6.8" />
                  <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>

          </nav>
        </header>

        {/* ================= CARD 2: INFO CARD ================= */}
        {infoOpen && (
          <section className="w-full bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-6 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Top Row: Portrait on Left, Language & Clock on Right */}
            <div className="flex items-start justify-between">
              
              {/* Portrait */}
              <div className="w-[125px] h-[150px] sm:w-[130px] sm:h-[155px] rounded-2xl overflow-hidden bg-neutral-200 shrink-0 shadow-xs border border-[#EEEEEE]">
                <PortraitKane isKusko={isKuskoMode} />
              </div>

              {/* Language Switcher & Clock */}
              <div className="flex items-center gap-6 pt-1 select-none">
                {/* EN / CY Toggle */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-medium">
                  <button
                    type="button"
                    onClick={() => setLanguage('EN')}
                    className={`transition-colors cursor-pointer ${
                      language === 'EN' ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-700'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage('CY')}
                    className={`transition-colors cursor-pointer ${
                      language === 'CY' ? 'text-neutral-900 font-bold' : 'text-neutral-400 hover:text-neutral-700'
                    }`}
                    title="Welsh / Cymraeg"
                  >
                    CY
                  </button>
                </div>

                {/* Digital Clock */}
                <div className="text-xs font-mono text-neutral-500 tracking-tight tabular-nums">
                  {currentTime}
                </div>
              </div>

            </div>

            {/* Bio Paragraph */}
            <div>
              {isKuskoMode ? (
                <p className="text-[15px] sm:text-[16px] text-[#222222] leading-[1.48] font-normal tracking-[-0.01em]">
                  A Nasarawa based smart contract developer and protocol architect, reasoning in state transitions, observable signals, and failure modes. Over the past years I have focused on what actually happens on-chain, building secure and auditable decentralized systems.
                </p>
              ) : language === 'EN' ? (
                <p className="text-[15px] sm:text-[16px] text-[#222222] leading-[1.48] font-normal tracking-[-0.01em]">
                  A Welsh based creative director and brand designer, crafting strategic brands for clients across industries. Over the past 10 years I have helped brands big and small develop their visual identities and discover their brand character.
                </p>
              ) : (
                <p className="text-[15px] sm:text-[16px] text-[#222222] leading-[1.48] font-normal tracking-[-0.01em]">
                  Cyfarwyddwr creadigol a dylunydd brandiau wedi&apos;i leoli yng Nghymru, yn crefftio brandiau strategol ar gyfer cleientiaid ar draws diwydiannau. Dros y 10 mlynedd diwethaf rwyf wedi helpu brandiau mawr a bach i ddatblygu eu hunaniaeth weledol a darganfod cymeriad eu brand.
                </p>
              )}
            </div>

          </section>
        )}

        {/* ================= CARD 3: LOGO STRIP ================= */}
        <section className="border border-[#EEEEEE] rounded-full overflow-hidden">
          <ClientLogos />
        </section>

        {/* ================= CARD 4: WORK CARDS ================= */}
        {workOpen && (
          <section className="w-full bg-white rounded-3xl p-3.5 space-y-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] animate-in fade-in zoom-in-95 duration-200">
            
            {/* Work Item 1: Effy */}
            <div
              onClick={() => setSelectedProject(effyProject)}
              className="w-full bg-[#F8F8F8] hover:bg-[#F2F2F2] rounded-2xl p-4 flex gap-4 items-center transition-all cursor-pointer group border border-[#EEEEEE]"
            >
              <PhoneMockupEffy />

              <div className="flex-1 pr-1">
                <h2 className="text-sm font-semibold text-neutral-900 tracking-tight group-hover:text-[#003FC0] transition-colors">
                  Effy
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed mt-1 line-clamp-3">
                  A social platform with a twist. Effy is focused on giving you access to share your thoughts, experiences and knowledge with the world through the power of voice.
                </p>
              </div>
            </div>

            {/* Work Item 2: Trade */}
            <div
              onClick={() => setSelectedProject(tradeProject)}
              className="w-full bg-[#F8F8F8] hover:bg-[#F2F2F2] rounded-2xl p-4 flex gap-4 items-center transition-all cursor-pointer group border border-[#EEEEEE]"
            >
              <TradeMockup />

              <div className="flex-1 pr-1">
                <h2 className="text-sm font-semibold text-neutral-900 tracking-tight group-hover:text-[#003FC0] transition-colors">
                  Trade
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed mt-1 line-clamp-3">
                  Trade is a fast growth logistics company, innovating the way the world does business. Offering cutting edge technology at the intersection of international trade and global supply chain.
                </p>
              </div>
            </div>

          </section>
        )}

        {/* ================= CARD 5: CONTACT FOOTER CARD ================= */}
        {contactOpen && (
          <footer className="w-full bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-1 animate-in fade-in zoom-in-95 duration-200">
            
            <a
              href="https://twitter.com/jkane"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-neutral-400 hover:text-neutral-800 transition-colors"
            >
              {isKuskoMode ? '@xarkgg' : '@jkane'}
            </a>

            <div className="flex items-center justify-between">
              <a
                href={isKuskoMode ? 'mailto:kuskomanass@gmail.com' : 'mailto:contact@jkane.co'}
                className="block text-sm text-neutral-400 hover:text-neutral-800 transition-colors"
              >
                {isKuskoMode ? 'kuskomanass@gmail.com' : 'contact@jkane.co'}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-pointer"
                title="Copy email address"
              >
                {copied ? (
                  <span className="text-[#003FC0] font-medium flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Copied!</span>
                  </span>
                ) : (
                  <Copy className="w-3.5 h-3.5 opacity-60" />
                )}
              </button>
            </div>

          </footer>
        )}

        {/* Discreet Profile Mode Switcher in corner */}
        <div className="pt-2 flex justify-center">
          <button
            type="button"
            onClick={() => setIsKuskoMode(!isKuskoMode)}
            className="text-[11px] font-mono text-neutral-400 hover:text-neutral-700 transition-colors px-3 py-1 rounded-full bg-white/60 hover:bg-white border border-[#EEEEEE] cursor-pointer"
          >
            {isKuskoMode ? 'Switch to Exact Screenshot (J. Kane)' : 'Personalize with Manass Kusko Data'}
          </button>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
