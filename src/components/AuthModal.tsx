'use client';

import { useState } from 'react';
import { X, Shield, Lock, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    setLoading(true);
    // Simulate Google OAuth flow
    setTimeout(() => {
      setLoading(false);
      setSignedIn(true);
      setTimeout(() => {
        setSignedIn(false);
        onClose();
      }, 1800);
    }, 1200);
  };

  const handleGmailContact = () => {
    const email = 'swagataghosh538@gmail.com';
    const subject = encodeURIComponent('Inquiry regarding TrustGuard AI');
    const body = encodeURIComponent(
      'Hi TrustGuard AI Team,\n\nI am interested in learning more about your platform and partnership opportunities.\n\nBest regards,'
    );
    // Opens directly in Gmail web composer, with mailto fallback
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-md glass-strong border border-white/10 rounded-2xl p-7 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background glow */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {signedIn ? (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-14 h-14 text-brand-emerald mb-4 animate-bounce" />
            <h3 className="font-display text-2xl font-bold mb-2">Welcome to TrustGuard!</h3>
            <p className="text-sm text-brand-muted">
              Signed in successfully with Google. Redirecting...
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Shield className="w-6 h-6 text-brand-cyan" />
              <span className="font-display font-bold text-lg">
                TrustGuard<span className="text-brand-cyan">.AI</span>
              </span>
            </div>
            <h3 className="font-display text-xl font-bold mb-1.5">Get Started</h3>
            <p className="text-sm text-brand-muted mb-6">
              Sign in with your Google account or reach out directly to our team via Gmail.
            </p>

            {/* Google Auth button */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 font-medium py-3 px-4 rounded-xl hover:bg-gray-100 transition-all shadow-md hover:shadow-lg disabled:opacity-70 mb-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
            </button>

            {/* Direct Gmail button */}
            <button
              onClick={handleGmailContact}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-500/20 to-amber-500/20 hover:from-red-500/30 hover:to-amber-500/30 border border-red-500/30 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-sm hover:shadow-red-500/10 mb-5"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                  fill="#EA4335"
                />
              </svg>
              <span>Continue to Gmail (Email Us)</span>
            </button>

            <div className="flex items-center gap-2 justify-center text-xs text-brand-muted">
              <Lock className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Enterprise-grade security & privacy protected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
