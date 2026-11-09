'use client';

import { Shield, ArrowRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute inset-0 grid-bg" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-cyan/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-brand-emerald/6 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-brand-cyan" />
            <span className="text-xs font-medium text-brand-cyan tracking-wide uppercase">
              AI-Powered Trust & Safety Platform
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-slide-up">
            Stop Job Scams{' '}
            <br className="hidden sm:block" />
            <span className="text-gradient-cyan">Before They Start</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto mb-10 animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            TrustGuard AI uses multi-layered artificial intelligence to analyze job postings, 
            verify companies, and protect millions of job seekers from recruitment fraud — 
            in seconds, not days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg font-semibold px-8 py-3.5 rounded-xl hover:shadow-xl hover:shadow-brand-cyan/25 transition-all hover:-translate-y-0.5 text-base"
            >
              Request Early Access
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://trustguardai-tls.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 glass hover:bg-white/10 font-medium px-8 py-3.5 rounded-xl transition-all text-base"
            >
              <Play className="w-4 h-4 text-brand-cyan" />
              Try Live Demo
            </a>
          </div>

          {/* Trust Score Demo Card */}
          <div className="max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="glass rounded-2xl p-6 glow-cyan">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-cyan" />
                  <span className="text-sm font-medium text-brand-muted">Live Scan Result</span>
                </div>
                <span className="text-xs text-brand-emerald bg-brand-emerald/10 px-2.5 py-1 rounded-full font-medium">
                  ● Verified Safe
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-muted">Job Description Analysis</span>
                  <span className="text-sm font-semibold text-brand-emerald">92/100</span>
                </div>
                <div className="w-full h-2 bg-brand-bg rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-emerald to-brand-cyan rounded-full" style={{ width: '92%' }} />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-brand-muted">Company Verification</span>
                  <span className="text-sm font-semibold text-brand-emerald">88/100</span>
                </div>
                <div className="w-full h-2 bg-brand-bg rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-cyan to-brand-purple rounded-full" style={{ width: '88%' }} />
                </div>
                <div className="pt-2 border-t border-white/5 flex justify-between items-center">
                  <span className="text-sm font-medium">Overall Trust Score</span>
                  <span className="text-2xl font-display font-bold text-gradient-cyan">90</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-bg to-transparent" />
    </section>
  );
}
