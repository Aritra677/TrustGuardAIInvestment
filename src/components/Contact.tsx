'use client';

import { useState } from 'react';
import { ArrowRight, Mail, Building2, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const recipientEmail = 'swagataghosh538@gmail.com';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `TrustGuard AI Inquiry from ${name || 'Prospective Partner'}${company ? ` (${company})` : ''}`
    );
    const bodyText = `Name: ${name}
Email: ${email}
Company / Role: ${company || 'N/A'}

Message:
${message}`;

    const body = encodeURIComponent(bodyText);

    // Direct Gmail composer link
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-mesh" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side — text */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-medium text-brand-cyan tracking-wide uppercase mb-3">
              Get In Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to{' '}
              <span className="text-gradient-cyan">Partner With Us?</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Whether you&apos;re an investor looking at the future of trust & safety, 
              a job board wanting to protect your users, or a recruiter fighting fraud — 
              we&apos;d love to hear from you.
            </p>
            <div className="space-y-4 mb-6">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent('Inquiry regarding TrustGuard AI')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 glass rounded-xl border border-white/10 hover:border-red-500/40 hover:bg-white/5 transition-all text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="font-medium text-white block">Continue to Gmail</span>
                    <span className="text-xs text-brand-muted">{recipientEmail}</span>
                  </div>
                </div>
                <span className="text-xs text-brand-cyan group-hover:translate-x-1 transition-transform">
                  Open Gmail →
                </span>
              </a>
              <div className="flex items-center gap-3 text-sm text-brand-muted">
                <div className="w-8 h-8 bg-brand-emerald/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-brand-emerald" />
                </div>
                Backed by NVIDIA NIM & Firecrawl technology partners
              </div>
            </div>
          </div>

          {/* Right side — form */}
          <div className="glass rounded-2xl p-8 glow-purple">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-brand-emerald mb-4 animate-bounce" />
                <h3 className="font-display text-2xl font-bold mb-2">Gmail Opened!</h3>
                <p className="text-brand-muted mb-4">
                  We&apos;ve pre-filled your message in Gmail addressed to <span className="text-brand-cyan">{recipientEmail}</span>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-brand-cyan hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-3.5 h-3.5 inline mr-1.5 text-brand-muted" />
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/25 transition-colors placeholder:text-brand-muted/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-3.5 h-3.5 inline mr-1.5 text-brand-muted" />
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/25 transition-colors placeholder:text-brand-muted/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <Building2 className="w-3.5 h-3.5 inline mr-1.5 text-brand-muted" />
                    Company / Role
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Company name or your role"
                    className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/25 transition-colors placeholder:text-brand-muted/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    <MessageSquare className="w-3.5 h-3.5 inline mr-1.5 text-brand-muted" />
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your interest in TrustGuard AI..."
                    className="w-full bg-brand-bg/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/25 transition-colors resize-none placeholder:text-brand-muted/50"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg font-semibold py-3.5 rounded-xl hover:shadow-lg hover:shadow-brand-cyan/25 transition-all"
                >
                  Send Message via Gmail
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
