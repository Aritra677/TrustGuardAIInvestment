'use client';

import { useState, useEffect } from 'react';
import { Shield, Menu, X, LogIn } from 'lucide-react';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#technology', label: 'Technology' },
    { href: '#pricing', label: 'Pricing' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative">
            <Shield className="w-8 h-8 text-brand-cyan transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            TrustGuard<span className="text-brand-cyan">.AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-muted hover:text-brand-text transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://trustguardai-tls.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-brand-muted hover:text-brand-text transition-colors px-3 py-2"
          >
            Try Demo
          </a>
          <button
            onClick={() => setAuthModalOpen(true)}
            className="flex items-center gap-2 text-sm text-white/90 hover:text-white glass hover:bg-white/10 px-4 py-2 rounded-lg transition-all border border-white/10"
          >
            <LogIn className="w-4 h-4 text-brand-cyan" />
            <span>Sign In</span>
          </button>
          <a
            href="#contact"
            className="text-sm font-medium bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-brand-cyan/25 transition-all hover:-translate-y-0.5"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-white/5 px-6 py-4 space-y-3 animate-slide-up">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm text-brand-muted hover:text-brand-text py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
            <a
              href="https://trustguardai-tls.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-center text-brand-muted hover:text-brand-text py-2"
            >
              Try Demo
            </a>
            <button
              onClick={() => {
                setMobileOpen(false);
                setAuthModalOpen(true);
              }}
              className="flex items-center justify-center gap-2 text-sm text-white glass hover:bg-white/10 px-4 py-2.5 rounded-lg border border-white/10"
            >
              <LogIn className="w-4 h-4 text-brand-cyan" />
              <span>Sign In with Google</span>
            </button>
            <a
              href="#contact"
              className="text-sm font-medium text-center bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg px-5 py-2.5 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </nav>
  );
}
