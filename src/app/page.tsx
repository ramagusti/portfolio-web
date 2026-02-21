"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Code2, 
  Zap, 
  Palette,
  Database,
  Globe,
  Cpu,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const projects = [
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
    name: "Health Tracker",
    description:
      "FiTracker bridges Samsung Health to Google Fit with a premium, animated dashboard plus deep insights.",
    tech: ["Next.js", "Tailwind", "Google Fit API", "Nano Banana"],
    url: "https://health.ragst.vip",
    icon: Sparkles,
    featured: true,
  },
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
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold gradient-text">
              RGA
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
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
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="hero-dot" />
        <div className="hero-dot" />
        <div className="hero-dot" />
        <motion.div
          className="absolute inset-0 hero-background"
          style={{ transform: `translate3d(0, ${offsetY * 0.2}px, 0)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/70 via-[#0a0a0a]/70 to-[#080808]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-levitate">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-gray-300">Available for opportunities</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Rama Gusti Anuga</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto">
              Full-Stack Developer, AI explorer, and builder of automation-first products.
            </p>
            
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Creating experiences that blend automation, AI, and human craft—think premium dashboards, automation engines, and Android-first companions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs text-gray-300">
              <span className="px-3 py-1 rounded-full border border-white/20">
                Current focus: Health tracker, Android automation, AI research
              </span>
              <a
                href="https://health.ragst.vip"
                className="px-3 py-1 rounded-full border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10 transition"
              >
                Import from Samsung Health / Google Fit
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <div className="text-sm text-gray-500">SaaS Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-sm text-gray-500">Open Source</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">AI</div>
              <div className="text-sm text-gray-500">Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-500">Automation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative">
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
              A collection of SaaS tools, automation workflows, and developer products I've built.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300">All projects generated with the help of a custom AI assistant — except PiggyBang (that one's handcrafted 💪)</span>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project, index) => (
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

      {/* Skills Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Open to freelance projects, SaaS collaborations, and full-time opportunities. 
              Let's build something amazing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              © 2026 Rama Gusti Anuga. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/ramagusti" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
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
