'use client';

import {
  ShieldCheck,
  ScanSearch,
  Brain,
  Globe,
  AlertTriangle,
  Lock,
  Users,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: ScanSearch,
    title: 'Multi-Layered Scam Detection',
    description:
      'Combines rule-based heuristics, domain reputation analysis, and deep semantic AI evaluation to catch even the most sophisticated job scams.',
    color: 'cyan' as const,
  },
  {
    icon: Globe,
    title: 'Automated Company Verification',
    description:
      '7-point company verification — SSL checks, contact validation, legal page audits, social media cross-referencing, and domain authenticity.',
    color: 'emerald' as const,
  },
  {
    icon: Brain,
    title: 'Explainable AI Trust Scores',
    description:
      'Not just a binary verdict. Get detailed, context-aware trust scores with clear breakdowns of exactly why content was flagged.',
    color: 'purple' as const,
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description:
      'Scan job postings and verify companies in seconds, not hours. Our AI processes thousands of signals simultaneously.',
    color: 'cyan' as const,
  },
  {
    icon: AlertTriangle,
    title: 'Smart Moderation',
    description:
      'Intelligent recommendations — Allow, Warn, Review, or Block — with actionable advice for users on their next steps.',
    color: 'emerald' as const,
  },
  {
    icon: Lock,
    title: 'Privacy-First Architecture',
    description:
      'Your data never leaves your control. We analyze content in-flight and never store personal job application details.',
    color: 'purple' as const,
  },
  {
    icon: Users,
    title: 'Community Protection',
    description:
      'Scales from individual job seekers to enterprise HR platforms, protecting entire communities from recruitment fraud.',
    color: 'cyan' as const,
  },
  {
    icon: ShieldCheck,
    title: 'Continuous Learning',
    description:
      'Our models continuously train on emerging scam patterns, staying ahead of evolving fraudster tactics and new attack vectors.',
    color: 'emerald' as const,
  },
];

const colorMap = {
  cyan: {
    iconBg: 'bg-brand-cyan/10',
    iconColor: 'text-brand-cyan',
    glow: 'group-hover:shadow-brand-cyan/10',
  },
  emerald: {
    iconBg: 'bg-brand-emerald/10',
    iconColor: 'text-brand-emerald',
    glow: 'group-hover:shadow-brand-emerald/10',
  },
  purple: {
    iconBg: 'bg-brand-purple/10',
    iconColor: 'text-brand-purple',
    glow: 'group-hover:shadow-brand-purple/10',
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-brand-cyan tracking-wide uppercase">
            Features
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5 tracking-tight">
            Everything You Need to{' '}
            <span className="text-gradient-purple">Stay Protected</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            A comprehensive AI-powered platform that analyzes, verifies, and protects 
            at every step of the job search process.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const colors = colorMap[feature.color];
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/5 hover:border-white/20 relative overflow-hidden ${colors.glow}`}
              >
                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div
                  className={`w-12 h-12 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${colors.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-white transition-colors">{feature.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed group-hover:text-brand-text/90 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
