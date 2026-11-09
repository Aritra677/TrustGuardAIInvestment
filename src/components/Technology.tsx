'use client';

import { Cpu, Globe, Code2, Layers } from 'lucide-react';

const techItems = [
  {
    icon: Cpu,
    name: 'NVIDIA NIM AI',
    role: 'Deep Semantic Analysis',
    description:
      'Powered by Mistral/Nemotron models through NVIDIA NIM Cloud APIs for context-aware fraud detection that understands natural language nuance.',
    color: 'brand-cyan',
  },
  {
    icon: Globe,
    name: 'Firecrawl',
    role: 'Company Verification Engine',
    description:
      'Automated web scraping and verification — checks SSL, validates contact information, audits legal pages, and confirms social media presence.',
    color: 'brand-emerald',
  },
  {
    icon: Code2,
    name: 'Next.js + FastAPI',
    role: 'Full-Stack Architecture',
    description:
      'Lightning-fast React frontend with Next.js App Router, backed by a high-performance Python FastAPI service for AI orchestration.',
    color: 'brand-purple',
  },
  {
    icon: Layers,
    name: 'Multi-Layer Pipeline',
    role: 'Heuristic + AI Fusion',
    description:
      'Combines traditional rule-based heuristics (keyword matching, domain checks) with deep LLM analysis for defense-in-depth coverage.',
    color: 'brand-cyan',
  },
];

export default function Technology() {
  return (
    <section id="technology" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-cyan/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-brand-purple tracking-wide uppercase">
            Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5 tracking-tight">
            Built on{' '}
            <span className="text-gradient-purple">Cutting-Edge AI</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Enterprise-grade AI infrastructure powering real-time threat detection 
            and verification at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/5 hover:border-white/20 group relative overflow-hidden"
              >
                {/* Accent glow on card hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/5 rounded-full blur-2xl group-hover:bg-brand-cyan/15 transition-all pointer-events-none" />
                <div className="flex items-start gap-5 relative z-10">
                  <div className={`w-14 h-14 bg-${item.color}/10 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-115 group-hover:rotate-6 shadow-md`}>
                    <Icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-lg font-semibold group-hover:text-white transition-colors">{item.name}</h3>
                      <span className={`text-xs text-${item.color} bg-${item.color}/10 rounded-full px-2.5 py-0.5 font-medium`}>
                        {item.role}
                      </span>
                    </div>
                    <p className="text-brand-muted leading-relaxed text-sm mt-2 group-hover:text-brand-text/90 transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture diagram placeholder */}
        <div className="mt-12 glass rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-brand-cyan rounded-full animate-glow-pulse" />
                <span>User Input</span>
              </div>
              <span className="text-brand-muted hidden sm:block">→</span>
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-brand-purple rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Rule Engine + LLM</span>
              </div>
              <span className="text-brand-muted hidden sm:block">→</span>
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-brand-emerald rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
                <span>Company Verify</span>
              </div>
              <span className="text-brand-muted hidden sm:block">→</span>
              <div className="glass rounded-xl px-5 py-3 flex items-center gap-2 border border-brand-emerald/30">
                <div className="w-2.5 h-2.5 bg-brand-emerald rounded-full" />
                <span className="text-brand-emerald font-medium">Trust Score</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
