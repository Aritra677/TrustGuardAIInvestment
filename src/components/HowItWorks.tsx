'use client';

import { ClipboardPaste, ScanLine, ShieldCheck, ArrowDown } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardPaste,
    title: 'Paste & Scan',
    description:
      'Copy a job posting URL or paste the job description text directly into TrustGuard AI. Our system accepts both formats for maximum flexibility.',
    detail: 'Supports job descriptions, company URLs, email snippets, and recruiter messages.',
  },
  {
    number: '02',
    icon: ScanLine,
    title: 'AI Analysis',
    description:
      'Our multi-layered engine kicks in — checking for scam keywords, verifying the company domain, analyzing SSL certificates, and running deep semantic AI evaluation.',
    detail: 'Powered by NVIDIA NIM AI models with Firecrawl company verification.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Trust Score & Action',
    description:
      'Receive an instant, explainable trust score with a detailed breakdown of every finding. Know exactly what\'s safe, what\'s suspicious, and what to do next.',
    detail: 'Clear recommendations: Allow, Warn, Review, or Block with actionable next steps.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/[0.03] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-medium text-brand-emerald tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5 tracking-tight">
            Protection in{' '}
            <span className="text-gradient-cyan">Three Simple Steps</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            From paste to protection in under 10 seconds. No signup required for basic scans.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-cyan/30 to-transparent" />
                )}
                {/* Mobile connector arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-brand-cyan/30 absolute -bottom-6 left-1/2 -translate-x-1/2 z-10" />
                  </div>
                )}

                <div className="glass rounded-2xl p-8 hover:bg-white/[0.04] transition-all group">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-display text-4xl font-bold text-brand-cyan/20 group-hover:text-brand-cyan/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-cyan" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-brand-muted leading-relaxed mb-4">{step.description}</p>
                  <div className="text-xs text-brand-cyan/70 bg-brand-cyan/5 rounded-lg px-3 py-2">
                    {step.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
