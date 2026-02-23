"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Zap,
  Sparkles,
  Database,
  Globe,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Hermitdroid",
    description:
      "Android-first companion to OpenClaw, delivering automation + AI workflows that mirror the desktop experience.",
    tech: ["Android", "Kotlin", "Jetpack Compose", "Automation"],
    url: "https://github.com/ramagusti/hermitdroid",
    icon: Cpu,
    featured: true,
  },
  {
    name: "Health Tracker",
    description:
      "FiTracker bridges Samsung Health to Google Fit with a premium, animated dashboard plus deep insights.",
    tech: ["Next.js", "Tailwind", "Google Fit API", "Nano Banana"],
    url: "https://health.ragst.vip",
    icon: Sparkles,
    featured: true,
  },
  {
    name: "PiggyBang",
    description:
      "AI-powered money manager with WhatsApp integration. Track expenses, analyze spending patterns, and get financial insights through natural language.",
    tech: ["Laravel", "Vue.js", "MySQL", "n8n", "AI"],
    url: "https://piggybang.ragst.vip",
    icon: Database,
    featured: true,
  },
  {
    name: "Reddit Alert",
    description:
      "AI-powered Reddit monitoring tool. Get instant email notifications when keywords are mentioned. Perfect for market research and competitor analysis.",
    tech: ["Next.js", "Tailwind", "Reddit API", "Vercel"],
    url: "https://reddit-alert.vercel.app",
    icon: Globe,
    featured: true,
  },
  {
    name: "SnapLink",
    description:
      "Modern URL shortener with analytics dashboard. Track clicks, devices, and geographic data with beautiful visualizations.",
    tech: ["Next.js", "Tailwind", "Recharts", "Vercel"],
    url: "https://snaplink-url-shortener.vercel.app",
    icon: Zap,
    featured: true,
  },
  {
    name: "SnapFetch",
    description:
      "Chrome extension for downloading images and videos from Instagram, TikTok, Twitter/X, and Reddit. Privacy-focused, no data collection.",
    tech: ["Chrome Extension", "JavaScript", "Manifest V3"],
    url: "https://github.com/ramagusti/social-media-downloader",
    icon: ExternalLink,
    featured: false,
  },
];

const skills = [
  { name: "Next.js", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Laravel", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "n8n Automation", level: "Expert" },
  { name: "MySQL/PostgreSQL", level: "Advanced" },
  { name: "AI Integration", level: "Advanced" },
  { name: "Chrome Extensions", level: "Advanced" },
];

const dashboardMetrics = [
  { label: "Latency", value: "12 ms", detail: "avg / 24h" },
  { label: "Uptime", value: "99.982%", detail: "rolling 30-day" },
  { label: "Anomalies", value: "03", detail: "auto triaged" },
  { label: "Throughput", value: "1.2M req", detail: "per day" },
];

const heroAlerts = [
  { label: "Infra Secure", detail: "Zero-trust + SOC2 signal" },
  { label: "Automation Ops", detail: "AI-assisted deployments" },
  { label: "AI Fleet", detail: "16 models live" },
];

const deploymentTiers = [
  {
    name: "Explorer",
    price: "$49/mo",
    badge: "Starter",
    perks: ["Realtime dashboards", "Automation audit", "Weekly posture report"],
  },
  {
    name: "Command",
    price: "$149/mo",
    badge: "High-impact",
    highlight: true,
    perks: ["Custom n8n + POD rollout", "SEO + Etsy readiness", "24/5 monitoring"],
  },
  {
    name: "Pioneer",
    price: "$299/mo",
    badge: "Enterprise",
    perks: ["Bespoke AI tooling", "Security hardening", "Executive dashboards"],
  },
];

const securityHighlights = [
  {
    title: "Secure Auth Flows",
    description: "Passwordless, OTP, and hardware-backed sign-ins with drift monitoring.",
  },
  {
    title: "Activity Tracking",
    description: "Live telemetry, global device health, and anomaly scoring per session.",
  },
  {
    title: "Deployment Guardrails",
    description: "Approval gates, rollback snapshots, and compliance-ready logs.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const useParallax = () => {
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handler = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return offsetY;
};

export default function Home() {
  const offsetY = useParallax();

  return (
    <main className="min-h-screen bg-[#05050a] text-white overflow-x-hidden relative">
      <div className="fixed inset-0 grid-pattern opacity-40 pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#03030a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold gradient-text">
              RGA
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ramagusti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rama-gusti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ragst8@gmail.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 hero-gradient"
          style={{ transform: `translate3d(0, ${offsetY * 0.1}px, 0)` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hero-stripes opacity-30"
          style={{ transform: `translate3d(0, ${offsetY * 0.05}px, 0)` }}
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Monitoring & automation, real-time</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold max-w-3xl">
                <span className="gradient-text">Rama Gusti Anuga</span> — commander of automation-first
                universes.
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl">
                I sculpt futuristic, skeuomorphic experiences that fuse automation, AI, and human craft. Think
                premium dashboards, secure deployment tiers, and neon-lit command centers for modern high-tech teams.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all glow flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10"
                >
                  Get In Touch
                </a>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-300">
                {heroAlerts.map((alert) => (
                  <div key={alert.label} className="alert-chip">
                    <div className="text-[10px] uppercase tracking-wider text-gray-400">{alert.label}</div>
                    <div className="text-sm text-white">{alert.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="monitor-shell"
            >
              <div className="monitor-header">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-400">Control Room</p>
                  <p className="text-lg font-semibold text-white">Global Network Diagnostics</p>
                </div>
                <span className="chip">Live</span>
              </div>
              <div className="monitor-metrics">
                {dashboardMetrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-400">{metric.label}</div>
                    <div className="text-[11px] text-gray-400 mt-1">{metric.detail}</div>
                  </div>
                ))}
              </div>
              <div className="signal-panel">
                <div className="signal-wave" aria-hidden />
                <div className="signal-overlay">
                  <div className="text-xs uppercase text-gray-400 tracking-wide">Pulse</div>
                  <div className="text-lg font-semibold text-white">14:32 UTC</div>
                  <p className="text-[12px] text-gray-400 mt-1">Realtime activity + automation health</p>
                </div>
              </div>
              <div className="monitor-footer">
                <span className="text-xs text-gray-400">Last deploy • 2m ago</span>
                <span className="chip subtle">Audit ready</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="control" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">Neural Control Room</span>
              </h2>
              <p className="text-gray-400">
                Sleek, interactive tiles keep every deployment tier, secure auth event, and marketing signal within
                sight. Think holographic dashboards with neon highlights, fluid animations, and a feel that matches
                the reference video.
              </p>
              <div className="glass-panel">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm uppercase text-gray-400 tracking-[0.4em]">Dispatch</div>
                  <div className="chip">Auto Pilot</div>
                </div>
                <div className="control-grid">
                  <div>
                    <div className="text-2xl font-semibold text-white">Design QA</div>
                    <p className="text-xs text-gray-400">Queue length 4</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase text-gray-400">Status</div>
                    <div className="text-lg text-cyan-300 font-semibold">Stable</div>
                  </div>
                </div>
                <div className="activity-wave" aria-hidden />
              </div>
            </div>
            <div className="glass-panel control-grid bg-gradient-to-br from-white/5 to-white/0">
              {[
                {
                  title: "Latency Shield",
                  detail: "Device fingerprint checks, 2.3 ms average.",
                },
                {
                  title: "Deploy Pulse",
                  detail: "Multi-region rollout with fail-safes.",
                },
                {
                  title: "Automation Cache",
                  detail: "Replayable event history for audits.",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card">
                  <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                  <div className="text-white text-opacity-80 text-[13px]">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="deployments" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">Deployment Tiers</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Transparent, scalable plans with analytics, security, and automation built-in. Pick the tier that
                matches your pace and let me orchestrate the rest.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Secure, zero-touch deployments with live telemetry.
            </div>
          </div>
          <div className="pricing-grid">
            {deploymentTiers.map((tier) => (
              <div
                key={tier.name}
                className={`tier-card ${tier.highlight ? "tier-highlight" : ""}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm uppercase text-gray-400 tracking-[0.4em]">{tier.badge}</p>
                    <h3 className="text-2xl font-bold mt-2">{tier.name}</h3>
                  </div>
                  <span className="text-lg font-semibold text-cyan-300">{tier.price}</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="chip subtle" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="gradient-text">Skeuomorphic Secure Layer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Authentic, tactile UI that mirrors high-tech command centers: think dark glass panels, neon
                gradients, and animated authentication cues.
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Biometric + MFA-ready workflows.
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {securityHighlights.map((highlight) => (
              <div key={highlight.title} className="glass-card animate-pulse">
                <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-3">{highlight.title}</div>
                <p className="text-gray-200 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of SaaS tools, automation workflows, and developer products I&rsquo;ve built.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeInUp}
                className={`group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 card-hover ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10">
                    <project.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all text-center"
              >
                <div className="text-sm font-medium text-white mb-1">{skill.name}</div>
                <div className="text-xs text-gray-500">{skill.level}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Let&rsquo;s Work Together</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Open to freelance projects, SaaS collaborations, and full-time opportunities. Let&apos;s build
              something amazing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <a
                href="mailto:ragst8@gmail.com"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all glow flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Send Email
              </a>
              <a
                href="https://github.com/ramagusti"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10 flex items-center gap-2"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rama-gusti"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10 flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a
                href="https://www.upwork.com/freelancers/~013d5fbf6b05fa398b"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full font-medium transition-all border border-white/10"
              >
                Upwork
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">© 2026 Rama Gusti Anuga. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/ramagusti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rama-gusti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.upwork.com/freelancers/~013d5fbf6b05fa398b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-xs">
                Upwork
              </a>
              <a href="mailto:ragst8@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
