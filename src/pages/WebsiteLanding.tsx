/**
 * Kubilitics Marketing Website — Production Landing Page
 * Dark theme only · #326CE5 Kubernetes Blue · #FFFFFF text
 */
import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  ArrowRight,
  Terminal,
  Check,
  Github,
  Network,
  Shield,
  Zap,
  Monitor,
  Server,
  ChevronRight,
  Star,
  Copy,
  CheckCheck,
  DollarSign,
  Brain,
  Layers,
  Plug,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const staggerFast: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

// ─── Kubernetes Wheel SVG Icon ─────────────────────────────────────────────────

function K8sWheelIcon({ size = 28, color = '#326CE5' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="14.5" stroke={color} strokeWidth="1.5" />
      <circle cx="16" cy="16" r="4" fill={color} />
      {[0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 16 + 4.5 * Math.cos(rad);
        const y1 = 16 + 4.5 * Math.sin(rad);
        const x2 = 16 + 12 * Math.cos(rad);
        const y2 = 16 + 12 * Math.sin(rad);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.8" strokeLinecap="round" />;
      })}
      {[0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 16 + 13 * Math.cos(rad);
        const cy = 16 + 13 * Math.sin(rad);
        return <circle key={i} cx={cx} cy={cy} r="1.5" fill={color} />;
      })}
    </svg>
  );
}

// ─── Copy Button ──────────────────────────────────────────────────────────────

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group"
    >
      {copied ? <CheckCheck size={14} className="text-[#6EF09E]" /> : <Copy size={14} />}
      <span className={copied ? 'text-[#6EF09E]' : ''}>{copied ? 'Copied!' : text}</span>
    </button>
  );
}
// ─── Typewriter Hook ──────────────────────────────────────────────────────────

function useTypewriter(text: string, speed: number = 20, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setComplete(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
          setComplete(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayedText, complete };
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Features', 'kcli', 'Docs', 'Blog'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${scrolled
        ? 'bg-[rgba(13,21,38,0.92)] backdrop-blur-[20px] border-b border-white/[0.06]'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <K8sWheelIcon size={28} />
          <span className="text-white font-display font-semibold text-lg tracking-tight group-hover:text-[#326CE5] transition-colors">
            Kubilitics
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#93A1BC] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/kubilitics/kubilitics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-[#93A1BC] hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
          >
            <Github size={15} />
            <Star size={13} />
            <span>Star</span>
          </a>
          <a
            href="#download"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#326CE5] hover:bg-[#1F56CC] transition-all duration-200 shadow-[0_0_20px_rgba(50,108,229,0.3)]"
          >
            Download Now
            <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#93A1BC] hover:text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {
        mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[rgba(13,21,38,0.97)] backdrop-blur-xl border-b border-white/[0.06] px-6 py-4 space-y-3"
          >
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-[#93A1BC] hover:text-white text-sm py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#download"
              className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#326CE5] mt-4"
              onClick={() => setMobileOpen(false)}
            >
              Download Now
            </a>
          </motion.div>
        )
      }
    </nav >
  );
}

// ─── Problem Section ──────────────────────────────────────────────────────────

function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const problemTools = [
    { name: 'kubectl', color: '#FFFFFF', icon: Terminal },
    { name: 'Helm', color: '#0F162A', icon: Layers },
    { name: 'K9s', color: '#6EF09E', icon: Terminal },
    { name: 'Lens', color: '#326CE5', icon: Monitor },
    { name: 'Stern', color: '#FB923C', icon: Zap },
    { name: 'Kubecost', color: '#87AAF3', icon: DollarSign },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              The Problem
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Kubernetes is powerful.<br />
              <span className="text-white/40">Your workflow isn't.</span>
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-6 text-lg text-white/50 leading-relaxed mb-10">
              <p>
                Managing modern clusters requires a fragmented stack of CLI tools, heavy Electron apps,
                and expensive SaaS subscriptions.
              </p>
              <p>
                Switching contexts, tailing logs across pods, and diagnosing OOMKilled errors
                shouldn't feel like a chore. <span className="text-white">There has to be a better way.</span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="relative h-[400px] flex items-center justify-center"
          >
            {/* Tool Stack Visual */}
            <div className="relative w-full max-w-sm aspect-square">
              {problemTools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? {
                    opacity: 1,
                    x: Math.sin(i * 1.04) * 120,
                    y: Math.cos(i * 1.04) * 120,
                  } : {}}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-2xl border border-white/10 glass shadow-xl flex flex-col items-center gap-2 w-24"
                >
                  <tool.icon size={20} style={{ color: tool.color }} />
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">{tool.name}</span>
                </motion.div>
              ))}

              {/* Center replacement icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-[#326CE5] flex items-center justify-center shadow-[0_0_60px_rgba(50,108,229,0.5)] z-20 border-4 border-[#0D1526]"
              >
                <K8sWheelIcon size={48} color="white" />
              </motion.div>

              {/* Connecting lines (SVG) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.circle
                  cx="50%" cy="50%" r="120"
                  fill="none"
                  stroke="#326CE5"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Open Source Section ──────────────────────────────────────────────────────

function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-12 md:p-20 overflow-hidden relative"
        >
          {/* Animated GitHub BG Logo */}
          <div className="absolute -right-20 -bottom-20 opacity-[0.03] scale-150 pointer-events-none">
            <Github size={400} />
          </div>

          <div className="max-w-2xl relative z-10">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6EF09E]/20 bg-[#6EF09E]/5 text-[#6EF09E] text-[10px] font-bold uppercase tracking-widest mb-8">
              Open Source
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Built by the community, for the community.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-white/50 mb-12 leading-relaxed">
              Kubilitics is Apache 2.0 licensed and always will be. We believe
              the best tools for developers are built in the open. Join 1,200+ contributors
              shaping the future of Kubernetes.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-12 mb-12">
              <div>
                <div className="text-3xl font-bold text-white mb-1">12.4k</div>
                <div className="text-sm text-white/30 uppercase tracking-widest font-bold">GitHub Stars</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">1.2k+</div>
                <div className="text-sm text-white/30 uppercase tracking-widest font-bold">Contributors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">50k+</div>
                <div className="text-sm text-white/30 uppercase tracking-widest font-bold">Installs</div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <a
                href="https://github.com/kubilitics/kubilitics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <Github size={20} />
                Explore the Source
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Animated Hero Mesh Background — PRD 3.2 Option A */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Mesh Gradients */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(50, 108, 229, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(110, 240, 158, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(50, 108, 229, 0.05) 0%, transparent 80%)
            `,
          }}
        />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Floating Orbs */}
        <div
          className="absolute -top-32 -left-32 w-[700px] h-[700px] rounded-full animate-[orb-drift-1_22s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(50,108,229,0.12) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full animate-[orb-drift-2_30s_ease-in-out_infinite]"
          style={{
            background: 'radial-gradient(circle, rgba(50,108,229,0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-[#326CE5] bg-[rgba(50,108,229,0.08)] border border-[rgba(50,108,229,0.2)] backdrop-blur-md">
              <span className="text-[#6EF09E] animate-pulse">✦</span>
              Kubernetes Operating System
            </span>
          </motion.div>

          {/* H1 — PRD 3.2 Variant A */}
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(44px,9vw,84px)] font-bold leading-[1] tracking-tight mb-8"
          >
            <span className="text-white">Your Kubernetes</span>
            <br />
            <span className="text-gradient">Command Center.</span>
          </motion.h1>

          {/* Subheadline — PRD 3.2 Option B */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 text-[#93A1BC]"
          >
            kubectl · kubens · kubectx · k9s · stern · AI · dashboard.
            <br className="hidden sm:block" />
            All in one unified platform. <span className="text-white font-medium">Free and open source.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <a
              href="#download"
              className="group flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#326CE5] hover:bg-[#1F56CC] transition-all duration-300 shadow-[0_20px_40px_rgba(50,108,229,0.3)] hover:shadow-[0_25px_50px_rgba(50,108,229,0.45)] hover:-translate-y-0.5"
            >
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              Download Now
            </a>
            <a
              href="https://github.com/kubilitics/kubilitics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-[#F1F5FB] border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github size={18} />
              View on GitHub ★
            </a>
          </motion.div>

          {/* Hero Visual — PRD 3.2 Specification */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto max-w-4xl"
            style={{ perspective: '1200px' }}
          >
            <div
              className="relative rounded-2xl border border-white/10 glass shadow-[0_40px_100px_rgba(0,0,0,0.6)] overflow-hidden transition-transform duration-700 hover:rotate-x-0"
              style={{ transform: 'rotateX(8deg) translateY(0)' }}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
                  kubilitics ● prod-us-east / payments-prod
                </div>
                <div className="w-10" />
              </div>

              {/* Mock Dashboard Content */}
              <div className="p-8 text-left bg-[#080E1A]">
                <div className="flex items-center gap-4 mb-8">
                  <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
                    CLUSTER HEALTH: 98/100
                  </div>
                  <div className="flex gap-4 text-[11px] font-mono text-white/40">
                    <span>● 23 Pods</span>
                    <span>● 5 Deployments</span>
                    <span>● 2 Services</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { label: 'CPU Usage', val: '63%', sub: '12.6 / 20 cores', color: '#326CE5' },
                    { label: 'Memory', val: '52%', sub: '42 / 80 Gi', color: '#87AAF3' },
                    { label: 'Network', val: '847', sub: 'MB/s ingress', color: '#6EF09E' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                      <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">{stat.label}</div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.val}</div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-2">
                        <div className="h-full rounded-full" style={{ width: stat.val, background: stat.color }} />
                      </div>
                      <div className="text-[10px] text-white/30 font-mono">{stat.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-widest text-[#326CE5] font-bold mb-2">Active Pods</div>
                    {[
                      { name: 'payment-api-7d9f', status: 'Running', replicas: '2/2' },
                      { name: 'fraud-detector-92k', status: 'Running', replicas: '1/1' },
                      { name: 'legacy-api-4xp9', status: 'Pending', replicas: '0/1', warn: true },
                    ].map((p) => (
                      <div key={p.name} className="flex items-center justify-between text-[11px] font-mono p-2 rounded hover:bg-white/[0.03]">
                        <span className="text-white/70 flex items-center gap-2">
                          <span className={p.warn ? 'text-amber-500' : 'text-emerald-500'}>●</span> {p.name}
                        </span>
                        <span className="text-white/40">{p.replicas}</span>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl bg-black/40 border border-white/5 p-4 font-mono text-[11px]">
                    <div className="text-white/30 mb-2">$ kcli why pod/payment-api</div>
                    <div className="text-[#87AAF3] leading-relaxed">
                      ▶ AI DIAGNOSIS: Pod is stable but experiencing high latencies due to downstream DB connection timeouts. Recommend increasing connection pool.
                    </div>
                    <div className="mt-2 animate-pulse text-white/20">_</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Absolute element for extra depth */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#326CE5]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#326CE5] via-[#326CE5]/20 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const stats = [
    { num: '50+', label: 'Resource Types', desc: 'Full k8s coverage' },
    { num: '<5MB', label: 'Bundle Size', desc: 'Tiny footprint' },
    { num: '∞', label: 'Clusters', desc: 'No limits' },
    { num: '100%', label: 'Open Source', desc: 'Apache 2.0' },
  ];

  return (
    <section ref={ref} className="py-16 relative">
      <div className="section-divider mb-0" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/[0.06]"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center px-8 py-10">
              <div className="text-5xl font-display font-bold mb-1" style={{ color: '#326CE5' }}>
                {stat.num}
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-sm" style={{ color: '#93A1BC' }}>{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="section-divider mt-0" />
    </section>
  );
}

// ─── Tools Replacement Table ──────────────────────────────────────────────────

// ─── Tools Replacement Table ──────────────────────────────────────────────────

function ComparisonSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const features = [
    { name: 'Web UI / Dashboard', kubectl: false, k9s: false, headlamp: true, lens: true, kubilitics: true },
    { name: 'Desktop App (Tauri)', kubectl: false, k9s: false, headlamp: false, lens: true, kubilitics: true },
    { name: 'CLI (First-class)', kubectl: true, k9s: false, headlamp: false, lens: false, kubilitics: true },
    { name: 'AI Assistance', kubectl: false, k9s: false, headlamp: false, lens: false, kubilitics: true },
    { name: 'Topology Graph', kubectl: false, k9s: false, headlamp: true, lens: false, kubilitics: true },
    { name: 'Cost Visibility', kubectl: false, k9s: false, headlamp: false, lens: false, kubilitics: true },
    { name: 'Security Scanning', kubectl: false, k9s: false, headlamp: false, lens: false, kubilitics: true },
    { name: 'Multi-pod logs', kubectl: false, k9s: true, headlamp: false, lens: false, kubilitics: true },
    { name: 'Open Source Core', kubectl: true, k9s: true, headlamp: true, lens: false, kubilitics: true },
  ];

  const tools = ['kubectl', 'k9s', 'Headlamp', 'Lens', 'Kubilitics'];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Built for Engineers Who've Tried Everything Else
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've used Lens, k9s, kubectl, and Headlamp too. Here's what Kubilitics does that they don't.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/5 overflow-hidden"
            style={{ background: 'rgba(20, 33, 61, 0.4)', backdropFilter: 'blur(20px)' }}
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/5 bg-white/[0.02]">
                    <th className="px-8 py-5 text-sm font-bold text-white uppercase tracking-widest">Feature</th>
                    {tools.map((tool) => (
                      <th
                        key={tool}
                        className={`px-6 py-5 text-sm font-bold uppercase tracking-widest text-center ${tool === 'Kubilitics' ? 'text-[#326CE5] bg-[#326CE5]/5' : 'text-white/40'
                          }`}
                      >
                        {tool}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, i) => (
                    <tr
                      key={feature.name}
                      className={`border-b border-white/5 transition-colors hover:bg-white/[0.02] ${i === features.length - 1 ? 'border-0' : ''
                        }`}
                    >
                      <td className="px-8 py-5 text-sm font-medium text-white/80">{feature.name}</td>
                      {tools.map((tool) => {
                        const val = feature[tool.toLowerCase() as keyof typeof feature];
                        return (
                          <td
                            key={tool}
                            className={`px-6 py-5 text-center ${tool === 'Kubilitics' ? 'bg-[#326CE5]/5 border-x border-[#326CE5]/10' : ''
                              }`}
                          >
                            <div className="flex justify-center">
                              {val ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                  <Check size={12} className="text-[#6EF09E]" />
                                </div>
                              ) : (
                                <X size={14} className="text-white/10" />
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-white/[0.01] text-center">
              <p className="text-xs text-white/30 italic">
                Kubilitics is fully open source. Comparison accurate as of February 2026.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const testimonials = [
    {
      quote: "I uninstalled k9s, kubectx, and Lens on the same day. kcli does everything they did and the AI changes how I debug.",
      author: "Marcus Chen",
      role: "Senior SRE @ Series B Startup",
    },
    {
      quote: "The topology view finally helped my team understand service dependencies in seconds. One diagram replaced hours of docs.",
      author: "Priya Nair",
      role: "Platform Engineer",
    },
    {
      quote: "kcli cost overview showed we were burning $800/month on idle resources. Paid for itself in one command.",
      author: "James O'Sullivan",
      role: "Engineering Manager",
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Engineers who've made the switch</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 rounded-2xl border border-white/10 glass transition-all hover:-translate-y-1 hover:border-white/20"
              >
                <div className="text-[#326CE5] mb-6">
                  <Star size={24} fill="#326CE5" className="inline mr-1" />
                  <Star size={24} fill="#326CE5" className="inline mr-1" />
                  <Star size={24} fill="#326CE5" className="inline mr-1" />
                  <Star size={24} fill="#326CE5" className="inline mr-1" />
                  <Star size={24} fill="#326CE5" className="inline" />
                </div>
                <p className="text-lg text-white/90 leading-relaxed mb-8">"{t.quote}"</p>
                <div>
                  <div className="text-white font-bold">{t.author}</div>
                  <div className="text-sm text-white/40">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Terminal Showcase ────────────────────────────────────────────────────────

const terminalCommands = [
  {
    cmd: '$ kcli cost overview',
    output: [
      '  NAMESPACE          CPU (cores)   MEM (GiB)   EST. MONTHLY',
      '  ───────────────────────────────────────────────────────',
      '  production         12.4          48.2         $892.40',
      '  staging             3.1          12.8         $223.10',
      '  monitoring          1.8           6.4          $98.72',
      '  default             0.3           1.1          $14.32',
      '',
      '  TOTAL CLUSTER COST: ~$1,228.54 / month',
    ],
    color: '#6EF09E',
  },
  {
    cmd: '$ kcli security scan',
    output: [
      '  [CRITICAL] clusterrolebinding/dev-team → cluster-admin',
      '  [HIGH]     pod/api-server: privileged container detected',
      '  [HIGH]     namespace/logging: no NetworkPolicy coverage',
      '  [MEDIUM]   pod/worker: latest image tag (unpinned)',
      '  [LOW]      pod/cache: writable root filesystem',
      '',
      '  5 findings across 3 namespaces',
    ],
    color: '#FB923C',
  },
  {
    cmd: '$ kcli ai "why is my pod crashing?"',
    output: [
      '  🤖 Analyzing pod events and logs...',
      '',
      '  Root cause: OOMKilled — memory limit too low.',
      '  pod/api-server hit 512Mi limit (request: 256Mi).',
      '',
      '  Fix: Set resources.limits.memory: "1Gi"',
      '  in your deployment spec. Consider VPA.',
    ],
    color: '#87AAF3',
  },
  {
    cmd: '$ kcli ui',
    output: [
      '  ┌─ Kubilitics TUI ──────────────────────────────────────┐',
      '  │  Clusters: gke-prod  eks-staging  kind-local          │',
      '  │  Context : gke-us-east1-prod                          │',
      '  │                                                        │',
      '  │  Pods: 142 Running  3 Pending  0 Failed               │',
      '  │  Nodes: 12 Ready                                       │',
      '  │                                                        │',
      '  │  [p] Pods  [d] Deploy  [s] Svc  [l] Logs  [/] Search │',
      '  └────────────────────────────────────────────────────────┘',
    ],
    color: '#326CE5',
  },
];

function TerminalSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Simple typewriter effect for the active command
  const { displayedText } = useTypewriter(terminalCommands[activeTab].cmd, 25);

  return (
    <section id="kcli" className="py-24 px-6 border-y border-white/5" style={{ background: 'rgba(13,21,38,0.4)' }}>
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#326CE5]/20 bg-[#326CE5]/5 text-[#326CE5] text-[10px] font-bold uppercase tracking-widest mb-6">
              Command Line Power
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              kcli — The Last CLI You'll Ever Need
            </h2>
            <p style={{ color: '#93A1BC' }} className="text-lg max-w-xl mx-auto">
              kubectl parity + context switching, streaming logs, AI diagnosis, Helm, and GitOps — in one binary.
            </p>
          </motion.div>

          {/* Terminal window */}
          <motion.div
            variants={fadeUp}
            className="terminal shadow-[0_40px_100px_rgba(0,0,0,0.7)] border-white/10"
            style={{ background: '#050A14' }}
          >
            {/* Chrome header */}
            <div className="terminal-header border-white/5 bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="text-white/20 text-[10px] font-mono ml-4 uppercase tracking-widest">kcli Showcase — zsh</span>
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 px-4 py-2 border-b border-white/5 overflow-x-auto bg-black/20">
              {terminalCommands.map((tc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${activeTab === i
                    ? 'text-white bg-white/10 border border-white/10 shadow-inner'
                    : 'text-white/30 hover:text-white/60 hover:bg-white/[0.02]'
                    }`}
                >
                  {tc.cmd.split(' ')[1]} {tc.cmd.split(' ')[2] || ''}
                </button>
              ))}
            </div>

            {/* Terminal content */}
            <div className="p-8 font-mono text-[13px] min-h-[320px]">
              <div className="text-[#93A1BC] mb-5">
                <span className="text-[#6EF09E] mr-2">➜</span>{' '}
                <span className="text-white">{displayedText}</span>
                <span className="inline-block w-1.5 h-4 ml-1 bg-[#326CE5] animate-pulse align-middle" />
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-1"
              >
                {terminalCommands[activeTab].output.map((line, i) => (
                  <div key={i} className="leading-relaxed whitespace-pre" style={{ color: terminalCommands[activeTab].color }}>
                    {line || '\u00A0'}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-2 pl-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <span className="text-white/40 text-xs font-mono">Quick Install:</span>
              <code className="text-[#6EF09E] font-mono text-sm px-4 py-2 rounded-lg bg-black/40 border border-white/5 leading-none">
                curl -fsSL https://get.kubilitics.com/kcli | sh
              </code>
              <button
                className="p-3 rounded-xl bg-[#326CE5] text-white hover:bg-[#1F56CC] transition-all shadow-lg"
                onClick={() => navigator.clipboard.writeText('curl -fsSL https://get.kubilitics.com/kcli | sh')}
              >
                <Copy size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Deployment Modes ─────────────────────────────────────────────────────────

const deploymentModes = [
  {
    id: 'desktop',
    title: 'Desktop App',
    icon: Monitor,
    desc: 'Native Tauri app. Uses your kubeconfig. Works offline with tiny footprint (~50MB RAM). No account required.',
    cta: 'Download for Mac',
    sub: 'macOS · Windows · Linux',
  },
  {
    id: 'helm',
    title: 'In-Cluster (Helm)',
    icon: Server,
    desc: 'Deploy to your cluster and share with the team. Real-time topology and logs for everyone via one central UI.',
    cta: 'View Helm Chart',
    cmd: 'helm install kubilitics kubilitics/kubilitics',
  },
  {
    id: 'binary',
    title: 'kcli Binary',
    icon: Terminal,
    desc: 'Single static binary. No dependencies. 100% kubectl compatibility plus AI diagnosis and cost analysis.',
    cta: 'Install via Brew',
    cmd: 'brew install kubilitics/tap/kcli',
  }
];

function DeploymentSection() {
  const [activeTab, setActiveTab] = useState('desktop');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const activeMode = deploymentModes.find(m => m.id === activeTab)!;

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Run It Your Way</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Three modes. One platform. Your data follows you wherever you work.
            </p>
          </motion.div>

          {/* Tab Switcher */}
          <motion.div variants={fadeUp} className="flex justify-center mb-12">
            <div className="flex p-1 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
              {deploymentModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveTab(mode.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === mode.id
                    ? 'bg-[#326CE5] text-white shadow-lg'
                    : 'text-white/40 hover:text-white/70'
                    }`}
                >
                  <mode.icon size={16} />
                  {mode.title}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Card */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-12 items-center p-12 rounded-3xl border border-white/10 glass max-w-5xl mx-auto"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#326CE5]/10 border border-[#326CE5]/20 mb-8">
                <activeMode.icon size={24} className="text-[#326CE5]" />
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-4">{activeMode.title}</h3>
              <p className="text-lg text-white/50 mb-8 leading-relaxed">{activeMode.desc}</p>

              <div className="flex flex-col gap-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bgcolor-[#326CE5] text-white font-bold hover:bg-[#1F56CC] transition-all bg-[#326CE5]">
                  {activeMode.cta}
                  <ArrowRight size={18} />
                </button>
                {activeMode.sub && (
                  <p className="text-center text-xs text-white/30 uppercase tracking-widest font-bold">{activeMode.sub}</p>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/5 p-8 font-mono text-sm h-full flex flex-col justify-center">
              {activeMode.cmd ? (
                <>
                  <div className="text-white/30 mb-4 tracking-tighter uppercase text-[10px] font-bold">Quick Install</div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-[#6EF09E]">{activeMode.cmd}</span>
                    <button className="text-white/20 hover:text-white transition-colors">
                      <Copy size={14} />
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-white/5 rounded" />
                  <div className="h-4 w-full bg-white/5 rounded" />
                  <div className="h-4 w-5/6 bg-white/5 rounded" />
                  <div className="h-4 w-2/3 bg-white/5 rounded" />
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features Grid ────────────────────────────────────────────────────────────

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    desc: 'Ask natural language questions about your cluster. Get root cause analysis, optimization tips, and actionable fixes instantly.',
    accent: '#326CE5',
  },
  {
    icon: Network,
    title: 'Topology Visualization',
    desc: 'See your entire cluster as an interactive relationship graph. Understand service dependencies, pod connections, and network flows.',
    accent: '#87AAF3',
  },
  {
    icon: DollarSign,
    title: 'Cost Visibility',
    desc: 'Know exactly what you are spending per namespace, workload, and pod. No Kubecost subscription required.',
    accent: '#6EF09E',
  },
  {
    icon: Shield,
    title: 'Security Analysis',
    desc: 'RBAC misconfigurations, privileged containers, and NetworkPolicy gaps — detected and remediated without a separate SaaS tool.',
    accent: '#FB923C',
  },
  {
    icon: Monitor,
    title: 'Desktop + CLI + Web',
    desc: 'One platform, three interfaces. Tauri desktop app, powerful CLI, and a web UI — all synchronized to the same state.',
    accent: '#326CE5',
  },
  {
    icon: Plug,
    title: 'Multi-Cluster',
    desc: 'Connect unlimited clusters. Instant switching between contexts with a single keystroke. Works with EKS, GKE, AKS, and any k8s.',
    accent: '#6EF09E',
  },
];

function FeaturesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="text-center mb-14">
            <p className="text-[#326CE5] font-medium text-sm uppercase tracking-widest mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Everything you need to master Kubernetes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                className="group relative p-7 rounded-2xl cursor-default overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(20,33,61,0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${feat.accent}10 0%, transparent 70%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: `${feat.accent}18`, border: `1px solid ${feat.accent}30` }}
                >
                  <feat.icon size={22} style={{ color: feat.accent }} />
                </div>
                <h3 className="text-white font-display font-semibold text-lg mb-3 relative z-10">{feat.title}</h3>
                <p className="text-sm leading-relaxed relative z-10" style={{ color: '#93A1BC' }}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


// ─── Final CTA ────────────────────────────────────────────────────────────────

function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(50,108,229,0.12) 0%, transparent 70%)',
        }}
      />
      <div className="section-divider mb-24" />

      <div className="max-w-3xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div variants={stagger} initial="hidden" animate={inView ? 'show' : 'hidden'}>
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <K8sWheelIcon size={48} />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-5 leading-tight"
          >
            Start mastering Kubernetes today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl mb-10" style={{ color: '#93A1BC' }}>
            One binary. Seven tools. Zero compromise.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-[#326CE5] hover:bg-[#1F56CC] transition-all duration-200 shadow-[0_0_40px_rgba(50,108,229,0.45)] hover:shadow-[0_0_60px_rgba(50,108,229,0.6)]"
            >
              <ArrowRight size={18} />
              Download Now
            </a>
            <a
              href="https://github.com/kubilitics/kubilitics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[#93A1BC] hover:text-white border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
            >
              <Github size={18} />
              Star on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const cols = [
    {
      label: 'Product',
      links: ['Features', 'kcli CLI', 'Web UI', 'Desktop App', 'Changelog'],
    },
    {
      label: 'Resources',
      links: ['Documentation', 'Blog', 'Tutorials', 'GitHub', 'Community Slack'],
    },
    {
      label: 'Company',
      links: ['About', 'Careers', 'Press Kit', 'Security', 'Contact'],
    },
    {
      label: 'Community',
      links: ['GitHub Discussions', 'Discord', 'Twitter / X', 'YouTube', 'Newsletter'],
    },
  ];

  return (
    <footer
      className="border-t py-16 px-6"
      style={{ background: '#080E1A', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <K8sWheelIcon size={24} />
              <span className="text-white font-display font-semibold">Kubilitics</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: '#93A1BC' }}>
              The Kubernetes Operating System. Free and open source.
            </p>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.label}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.label}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: '#93A1BC' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm" style={{ color: '#93A1BC' }}>
            © 2026 Kubilitics · Apache 2.0 License
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: '#93A1BC' }}>Privacy</a>
            <a href="#" className="text-sm hover:text-white transition-colors" style={{ color: '#93A1BC' }}>Terms</a>
            <a
              href="https://github.com/kubilitics/kubilitics"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm hover:text-white transition-colors"
              style={{ color: '#93A1BC' }}
            >
              <Github size={14} />
              Open Source
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export default function WebsiteLanding() {
  return (
    <div className="min-h-screen bg-[#0D1526] text-[#F1F5FB] selection:bg-[#326CE5]/30">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ComparisonSection />
      <TerminalSection />
      <FeaturesGrid />
      <DeploymentSection />
      <TestimonialsSection />
      <GitHubSection />
      <CTASection />
      <Footer />
    </div>
  );
}
