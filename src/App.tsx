import React, { useState, useEffect } from 'react';
import { Copy, Check, Send, Github, Twitter } from 'lucide-react';

type Tab = 'info' | 'work' | 'contact';

const projects = [
  {
    title: 'BuyMePap',
    tagline: 'Paystack-powered tips for African creators',
    description: 'Buy Me a Coffee rebuilt for Nigeria. Tips + messages wall with fiat rails via Paystack. SQLite + Express backend, React + Vite frontend.',
    repo: 'https://github.com/xarkgg/buymepap',
  },
  {
    title: 'Exetazo',
    tagline: 'Protocol incentives & state transition explorer',
    description: 'On-chain analytics tool for observable state transitions and failure modes. Built for Midnight Buildathon privacy track.',
    repo: 'https://github.com/xarkgg/exetazo',
  },
  {
    title: 'Sherwood',
    tagline: 'Privacy-first demo app',
    description: 'Full-stack demo with verifiable privacy proofs and clean audit trail.',
    repo: 'https://github.com/xarkgg/sherwood',
  },
  {
    title: 'Handshake',
    tagline: 'Secure handshake protocol demo',
    description: 'Protocol-level handshake primitives with auditable logs.',
    repo: 'https://github.com/xarkgg/handshake',
  },
  {
    title: 'Condition',
    tagline: 'Conditional state machine',
    description: 'State machine for conditional payouts with idempotent fulfillment.',
    repo: 'https://github.com/xarkgg/condition',
  },
];

export default function App() {
  const [tab, setTab] = useState<Tab>('info');
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-GB', { hour12: false }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText('kuskomanass@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:kuskomanass@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-[480px] space-y-4">
        <header className="w-full bg-white rounded-full px-4 py-2.5 flex items-center justify-between shadow-sm border border-[#EEEEEE]">
          <div className="text-sm font-mono">MK</div>
          <nav className="flex gap-2">
            {(['info','work','contact'] as Tab[]).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-3 py-1 rounded-full text-xs font-medium capitalize transition ${
                  tab===t ? 'bg-[#003FC0] text-white' : 'bg-white border border-[#EEEEEE] hover:bg-neutral-50'
                }`}
                aria-current={tab===t ? 'page' : undefined}
              >
                {t}
              </button>
            ))}
          </nav>
        </header>

        {tab === 'info' && (
          <section className="bg-white rounded-3xl p-6 border border-[#EEEEEE] space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-24 h-24 rounded-2xl bg-[#003FC0] flex items-center justify-center text-white font-bold text-xl">MK</div>
              <div className="flex-1">
                <h1 className="text-xl font-semibold">Manass Kusko</h1>
                <p className="text-sm text-neutral-600">Smart Contract Developer & Protocol Architect</p>
                <p className="text-xs font-mono text-neutral-500 mt-1">{time}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700">
              Solo builder on Termux/Android targeting Midnight Buildathon 2026. I build secure, auditable decentralized systems with observable state transitions and failure modes. Focus on protocol incentives and privacy-preserving infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button onClick={copyEmail} className="text-xs flex items-center gap-1 hover:text-[#003FC0]">
                kuskomanass@gmail.com {copied ? <Check className="w-3 h-3 text-[#003FC0]"/> : <Copy className="w-3 h-3"/>}
              </button>
              <a href="https://github.com/xarkgg" className="text-xs flex items-center gap-1 hover:text-[#003FC0]"><Github className="w-3 h-3"/>GitHub</a>
            </div>
          </section>
        )}

        {tab === 'work' && (
          <section className="bg-white rounded-3xl p-4 border border-[#EEEEEE] space-y-3">
            <h2 className="text-sm font-semibold px-1">Selected Work</h2>
            {projects.map(p => (
              <a key={p.title} href={p.repo} target="_blank" rel="noreferrer" className="block bg-[#F8F8F8] hover:bg-[#F2F2F2] rounded-2xl p-4 border border-[#EEEEEE] transition">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">{p.title}</h3>
                  <span className="text-[10px] font-mono text-neutral-500">repo</span>
                </div>
                <p className="text-xs text-neutral-600 mt-1">{p.tagline}</p>
                <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{p.description}</p>
              </a>
            ))}
          </section>
        )}

        {tab === 'contact' && (
          <section className="bg-white rounded-3xl p-6 border border-[#EEEEEE] space-y-4">
            <h2 className="text-sm font-semibold">Contact</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} className="w-full rounded-xl border border-[#EEEEEE] px-3 py-2 text-sm bg-white" />
              <input placeholder="Email" type="email" required value={email} onChange={e=>setEmail(e.target.value)} className="w-full rounded-xl border border-[#EEEEEE] px-3 py-2 text-sm bg-white" />
              <textarea placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="w-full rounded-xl border border-[#EEEEEE] px-3 py-2 text-sm bg-white" />
              <button type="submit" className="w-full bg-[#003FC0] text-white rounded-xl py-2 text-sm flex items-center justify-center gap-2 hover:bg-[#023EC0]">
                <Send className="w-3.5 h-3.5"/> Send via email
              </button>
            </form>
            <p className="text-[11px] text-neutral-500">Direct: kuskomanass@gmail.com</p>
          </section>
        )}

        <footer className="text-center text-[11px] text-neutral-500">
          © {new Date().getFullYear()} Manass Kusko
        </footer>
      </div>
    </div>
  );
}
