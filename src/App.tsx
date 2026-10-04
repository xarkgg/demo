import React, { useState, useEffect } from 'react';
import { PortraitKane } from './components/PortraitKane';
import { PhoneMockupEffy } from './components/PhoneMockupEffy';
import { TradeMockup } from './components/TradeMockup';
import { OmnitypeMockup } from './components/OmnitypeMockup';
import { LumarMockup } from './components/LumarMockup';
import { ClientLogos } from './components/ClientLogos';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Copy, Check, Send, Columns, Smartphone } from 'lucide-react';

type PageTab = 'info' | 'work' | 'contact';

export default function App() {
  // Current active page tab ('info', 'work', or 'contact')
  const [activeTab, setActiveTab] = useState<PageTab>('info');

  // Multi-screen view mode: Single screen (default) vs Side-by-Side Triple View (matching the screenshot!)
  const [viewMode, setViewMode] = useState<'single' | 'triple'>('single');

  // Language toggle (EN vs CY / Welsh)
  const [language, setLanguage] = useState<'EN' | 'CY'>('EN');

  // Real-time ticking digital clock
  const [currentTime, setCurrentTime] = useState('13:55:19');

  // Selected filter tag in Work/Contact
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Contact form state
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Copy email toast state
  const [copied, setCopied] = useState(false);

  // Profile switcher between Exact Screenshot (Jonathan Kane) and Personalized (Manass Kusko)
  const [isKuskoMode, setIsKuskoMode] = useState(false);

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactEmail.trim()) return;

    const emailTo = isKuskoMode ? 'kuskomanass@gmail.com' : 'contact@jkane.co';
    const subject = encodeURIComponent(
      `Project Inquiry${selectedService ? ` - ${selectedService}` : ''} from ${contactName || 'Client'}`
    );
    const body = encodeURIComponent(
      `Name: ${contactName}\nEmail: ${contactEmail}\nService: ${selectedService || 'General'}\n\nMessage:\n${contactMessage}`
    );
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const servicesList = ['STRATEGY', 'BRANDING', 'ILLUSTRATION', 'ANIMATION', 'PITCH DECKS'];

  // Project definitions
  const projects = [
    {
      id: 'effy',
      title: 'Effy',
      description:
        'A social platform with a twist. Effy is focused on giving you access to share your thoughts, experiences and knowledge with the world through the power of voice.',
      details:
        'Complete end-to-end mobile design system, audio wave visualization, micro-interactions, and visual brand identity for the next-generation voice-first community.',
      role: 'Creative Director & Brand Lead',
      year: '2024',
      client: 'Effy Social Corp',
      tags: ['Brand Identity', 'Product Design', 'iOS App', 'Voice Audio UI'],
      renderMockup: () => <PhoneMockupEffy />,
    },
    {
      id: 'trade',
      title: 'Trade',
      description:
        'Offering cutting edge technology at the intersection of international trade and global supply chain. I had the pleasure of developing a brand identity that represents the product\'s innovative and modern outlook within the industry.',
      details:
        'Architectural visual guidelines, signage, digital portal interface, and high-impact international marketing collateral for global logistics infrastructure.',
      role: 'Brand Architecture & Design System',
      year: '2023',
      client: 'Trade Global Logistics',
      tags: ['Logistics', 'Enterprise Brand', 'Spatial Signage', 'Web Platform'],
      renderMockup: () => <TradeMockup />,
    },
    {
      id: 'omnitype',
      title: 'Omnitype',
      description:
        'Custom mechanical keyboard typography, bespoke keycap legends, packaging design, and visual brand identity system for premier hardware enthusiasts.',
      details:
        'Minimalist packaging engineering, foil-stamped monochrome box graphics, custom geometric typography, and e-commerce aesthetic for international release.',
      role: 'Packaging & Visual Identity',
      year: '2023',
      client: 'Omnitype Hardware',
      tags: ['Packaging', 'Hardware', 'Industrial Design', 'Typography'],
      renderMockup: () => <OmnitypeMockup />,
    },
    {
      id: 'lumar',
      title: 'Lumar',
      description:
        'A social platform with a twist. Lumar is focused on heritage botanical blending, artisanal identity, and sustainable packaging design through craft storytelling.',
      details:
        'Hand-drawn vintage filigree seals, copperplate typography, archival paper labels, and sustainable glass bottle packaging guidelines.',
      role: 'Artisanal Label Design',
      year: '2022',
      client: 'Lumar Botanical Co',
      tags: ['Packaging', 'Illustration', 'Botanical', 'Brand Design'],
      renderMockup: () => <LumarMockup />,
    },
  ];

  // ================= RENDER TOP BAR =================
  const renderTopBar = (currentTab: PageTab, onSelectTab?: (tab: PageTab) => void) => {
    const handleTab = (t: PageTab) => {
      if (onSelectTab) onSelectTab(t);
      else setActiveTab(t);
    };

    return (
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
            <circle cx="12" cy="6" r="2.2" fill="currentColor" stroke="none" />
            <line x1="6" y1="12" x2="18" y2="12" />
            <line x1="8" y1="18.5" x2="12" y2="12" />
            <line x1="16" y1="18.5" x2="12" y2="12" />
          </svg>
        </div>

        {/* Navigation Pills on Right */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          {/* Info Pill */}
          <button
            type="button"
            onClick={() => handleTab('info')}
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'info'
                ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
            }`}
          >
            <span>Info</span>
            {currentTab === 'info' ? (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* Work Pill */}
          <button
            type="button"
            onClick={() => handleTab('work')}
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'work'
                ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
            }`}
          >
            <span>Work</span>
            {currentTab === 'work' ? (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>

          {/* Contact Pill */}
          <button
            type="button"
            onClick={() => handleTab('contact')}
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              currentTab === 'contact'
                ? 'bg-[#003FC0] hover:bg-[#023EC0] text-white shadow-xs'
                : 'bg-white text-neutral-800 hover:bg-neutral-50 border border-[#EEEEEE]'
            }`}
          >
            <span>Contact</span>
            {currentTab === 'contact' ? (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6.8" />
                <line x1="8" y1="5" x2="8" y2="11" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="5" y1="8" x2="11" y2="8" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </nav>
      </header>
    );
  };

  // ================= SOCIAL FOOTER BAR (Used in Work & Contact) =================
  const renderSocialFooter = () => (
    <footer className="w-full bg-white rounded-full px-5 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-[#EEEEEE] flex items-center justify-between">
      {/* Email Pill with Copy icon */}
      <button
        type="button"
        onClick={copyEmail}
        className="flex items-center gap-1.5 text-xs font-mono text-neutral-700 hover:text-[#003FC0] transition-colors cursor-pointer"
        title="Copy email address"
      >
        <span>{isKuskoMode ? 'kuskomanass@gmail.com' : 'contact@jkane.co'}</span>
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#003FC0]" />
        ) : (
          <Copy className="w-3.5 h-3.5 opacity-60" />
        )}
      </button>

      {/* Social Circular Icons */}
      <div className="flex items-center gap-1.5 text-neutral-400">
        {/* X / Twitter */}
        <a
          href="https://twitter.com/jkane"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 rounded-full flex items-center justify-center hover:text-neutral-900 transition-colors"
          title="Twitter / X"
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* Dribbble */}
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 rounded-full flex items-center justify-center hover:text-neutral-900 transition-colors"
          title="Dribbble"
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.849 10.518a10.024 10.024 0 0 1-.78 3.513c-.45-.236-2.61-1.328-5.309-1.328-.515 0-1.013.04-1.503.097a26.24 26.24 0 0 0 1.57-4.887 10.457 10.457 0 0 1 6.022 2.605z" />
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 rounded-full flex items-center justify-center hover:text-neutral-900 transition-colors"
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-5 h-5 rounded-full flex items-center justify-center hover:text-neutral-900 transition-colors"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>
    </footer>
  );

  // ================= PAGE 1: INFO VIEW =================
  const renderInfoPage = (onSelectTab?: (tab: PageTab) => void) => (
    <div className="w-full max-w-[420px] sm:max-w-[440px] space-y-3">
      {renderTopBar('info', onSelectTab)}

      {/* Info Card */}
      <section className="w-full bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-6">
        <div className="flex items-start justify-between">
          {/* Portrait */}
          <div className="w-[125px] h-[150px] sm:w-[130px] sm:h-[155px] rounded-2xl overflow-hidden bg-neutral-200 shrink-0 shadow-xs border border-[#EEEEEE]">
            <PortraitKane isKusko={isKuskoMode} />
          </div>

          {/* Language Switcher & Clock */}
          <div className="flex items-center gap-6 pt-1 select-none">
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

            <div className="text-xs font-mono text-neutral-500 tracking-tight tabular-nums">
              {currentTime}
            </div>
          </div>
        </div>

        {/* Bio */}
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

      {/* Client Logos Strip */}
      <section className="border border-[#EEEEEE] rounded-full overflow-hidden">
        <ClientLogos />
      </section>

      {/* Work Preview List (Effy + Trade) */}
      <section className="w-full bg-white rounded-3xl p-3.5 space-y-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE]">
        {/* Effy */}
        <div
          onClick={() => setSelectedProject(projects[0])}
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

        {/* Trade */}
        <div
          onClick={() => setSelectedProject(projects[1])}
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

      {/* Footer Info Card */}
      <footer className="w-full bg-white rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-1">
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
    </div>
  );

  // ================= PAGE 2: WORK VIEW =================
  const renderWorkPage = (onSelectTab?: (tab: PageTab) => void) => (
    <div className="w-full max-w-[420px] sm:max-w-[440px] space-y-3">
      {renderTopBar('work', onSelectTab)}

      {/* Services Pill Strip Card */}
      <section className="w-full bg-white rounded-3xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-4">
        {/* Top row: EN CY and Clock */}
        <div className="flex items-center justify-between text-xs font-mono select-none">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-neutral-900 font-bold">EN</span>
            <span className="text-neutral-400">CY</span>
          </div>
          <div className="text-neutral-500 tabular-nums">{currentTime}</div>
        </div>

        {/* Services pill tags (matching screenshot: STRATEGY, BRANDING, ILLUSTRATION, ANIMATION, PITCH DECKS) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {servicesList.map((srv) => {
            const isSelected = selectedService === srv;
            return (
              <button
                key={srv}
                type="button"
                onClick={() => setSelectedService(isSelected ? null : srv)}
                className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#003FC0] text-white border-[#003FC0] shadow-xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border-neutral-300/80 hover:border-neutral-400'
                }`}
              >
                {srv}
              </button>
            );
          })}
        </div>
      </section>

      {/* Full Work Items Card (Effy, Trade, Omnitype, Lumar) */}
      <section className="w-full bg-white rounded-3xl p-3.5 space-y-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE]">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => setSelectedProject(proj)}
            className="w-full bg-[#F8F8F8] hover:bg-[#F2F2F2] rounded-2xl p-4 flex gap-4 items-center transition-all cursor-pointer group border border-[#EEEEEE]"
          >
            {proj.renderMockup()}
            <div className="flex-1 pr-1">
              <h2 className="text-sm font-semibold text-neutral-900 tracking-tight group-hover:text-[#003FC0] transition-colors">
                {proj.title}
              </h2>
              <p className="text-xs text-neutral-500 leading-relaxed mt-1 line-clamp-3">
                {proj.description}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Social Footer Bar */}
      {renderSocialFooter()}
    </div>
  );

  // ================= PAGE 3: CONTACT VIEW =================
  const renderContactPage = (onSelectTab?: (tab: PageTab) => void) => (
    <div className="w-full max-w-[420px] sm:max-w-[440px] space-y-3">
      {renderTopBar('contact', onSelectTab)}

      {/* Services Selector Card */}
      <section className="w-full bg-white rounded-3xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-3">
        {/* Top row: EN CY and Clock */}
        <div className="flex items-center justify-between text-xs font-mono select-none">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-neutral-900 font-bold">EN</span>
            <span className="text-neutral-400">CY</span>
          </div>
          <div className="text-neutral-500 tabular-nums">{currentTime}</div>
        </div>

        <div>
          <span className="text-xs font-medium text-neutral-800 block mb-2">Services:</span>
          <div className="flex flex-wrap gap-1.5">
            {servicesList.map((srv) => {
              const isSelected = selectedService === srv;
              return (
                <button
                  key={srv}
                  type="button"
                  onClick={() => setSelectedService(isSelected ? null : srv)}
                  className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-[#003FC0] text-white border-[#003FC0] shadow-xs'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border-neutral-300/80 hover:border-neutral-400'
                  }`}
                >
                  {srv}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Card */}
      <section className="w-full bg-white rounded-3xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-[#EEEEEE] space-y-3">
        {formSubmitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-[#003FC0] mx-auto flex items-center justify-center">
              <Check className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-semibold text-neutral-900">Message Dispatched!</h3>
            <p className="text-xs text-neutral-500 max-w-xs mx-auto">
              Your default email client has been triggered. Alternatively, copy our address directly below.
            </p>
            <button
              type="button"
              onClick={() => setFormSubmitted(false)}
              className="text-xs text-[#003FC0] hover:underline pt-2 inline-block cursor-pointer font-mono"
            >
              Send another note
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-2.5">
            {/* Enter Name */}
            <div>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="Enter Name"
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#EEEEEE] focus:border-[#003FC0] focus:ring-1 focus:ring-[#003FC0] text-xs text-neutral-800 placeholder-neutral-400 outline-hidden transition-all"
              />
            </div>

            {/* Enter Email */}
            <div>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-2.5 bg-white rounded-xl border border-[#EEEEEE] focus:border-[#003FC0] focus:ring-1 focus:ring-[#003FC0] text-xs text-neutral-800 placeholder-neutral-400 outline-hidden transition-all"
              />
            </div>

            {/* Enter Message */}
            <div>
              <textarea
                required
                rows={4}
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                placeholder="Enter Message"
                className="w-full px-4 py-2.5 bg-white rounded-2xl border border-[#EEEEEE] focus:border-[#003FC0] focus:ring-1 focus:ring-[#003FC0] text-xs text-neutral-800 placeholder-neutral-400 outline-hidden transition-all resize-none"
              />
            </div>

            {/* Submit Button (matching screenshot: Submit with pink/blue arrow button) */}
            <div className="pt-1">
              <button
                type="submit"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-white bg-[#003FC0] hover:bg-[#023EC0] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Submit</span>
                {/* Right Arrow / Send Glyph */}
                <svg viewBox="0 0 16 16" className="w-3 h-3 fill-current">
                  <path d="M4 2.5 L12 8 L4 13.5 Z" />
                </svg>
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Social Footer Bar */}
      {renderSocialFooter()}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-neutral-900 flex flex-col justify-center items-center py-6 sm:py-10 px-3 font-sans selection:bg-[#003FC0] selection:text-white">
      
      {/* Top Floating View Controls for user convenience */}
      <div className="mb-4 flex items-center gap-2 select-none">
        <button
          type="button"
          onClick={() => setViewMode('single')}
          className={`px-3 py-1 rounded-full text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer border ${
            viewMode === 'single'
              ? 'bg-white text-neutral-900 font-semibold border-neutral-300 shadow-2xs'
              : 'text-neutral-500 hover:text-neutral-900 border-transparent'
          }`}
          title="Interactive Mobile Screen with Tab Switching"
        >
          <Smartphone className="w-3 h-3" />
          <span>Single Screen (Tabbed)</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('triple')}
          className={`hidden md:flex px-3 py-1 rounded-full text-[11px] font-mono items-center gap-1.5 transition-colors cursor-pointer border ${
            viewMode === 'triple'
              ? 'bg-white text-neutral-900 font-semibold border-neutral-300 shadow-2xs'
              : 'text-neutral-500 hover:text-neutral-900 border-transparent'
          }`}
          title="Side-by-Side Triple View matching the uploaded screenshot!"
        >
          <Columns className="w-3 h-3" />
          <span>Triple Mockup View</span>
        </button>
      </div>

      {/* Main Container: Single Interactive View or Triple Side-by-Side View */}
      {viewMode === 'triple' ? (
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-items-center">
          {/* Column 1: Info Page */}
          <div className="w-full flex justify-center">
            {renderInfoPage((t) => {
              setActiveTab(t);
              setViewMode('single');
            })}
          </div>

          {/* Column 2: Work Page */}
          <div className="w-full flex justify-center">
            {renderWorkPage((t) => {
              setActiveTab(t);
              setViewMode('single');
            })}
          </div>

          {/* Column 3: Contact Page */}
          <div className="w-full flex justify-center">
            {renderContactPage((t) => {
              setActiveTab(t);
              setViewMode('single');
            })}
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center">
          {activeTab === 'info' && renderInfoPage()}
          {activeTab === 'work' && renderWorkPage()}
          {activeTab === 'contact' && renderContactPage()}
        </div>
      )}

      {/* Discreet Profile Mode Switcher in corner */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setIsKuskoMode(!isKuskoMode)}
          className="text-[11px] font-mono text-neutral-400 hover:text-neutral-700 transition-colors px-3 py-1 rounded-full bg-white/60 hover:bg-white border border-[#EEEEEE] cursor-pointer"
        >
          {isKuskoMode ? 'Switch to Exact Screenshot (J. Kane)' : 'Personalize with Manass Kusko Data'}
        </button>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}
