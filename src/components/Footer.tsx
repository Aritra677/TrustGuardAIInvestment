'use client';

import { Shield, Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Shield className="w-7 h-7 text-brand-cyan" />
              <span className="font-display font-bold text-lg tracking-tight">
                TrustGuard<span className="text-brand-cyan">.AI</span>
              </span>
            </div>
            <p className="text-sm text-brand-muted leading-relaxed mb-5">
              AI-powered trust and safety platform protecting job seekers 
              from recruitment fraud worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Aritra677/TrustGuardAIInvestment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 shadow-md"
                aria-label="GitHub Repository"
                title="TrustGuardAI Investment Repository"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.instagram.com/trustguard.ai/tagged/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 shadow-md text-pink-400 hover:text-pink-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/trustguard-ai-2863ab44a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BuTnPVFMeQR%2BATNQyXUAdWg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all hover:scale-110 shadow-md text-sky-400 hover:text-sky-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5">
              {['Features', 'How It Works', 'Pricing', 'API Docs', 'Integrations'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-brand-muted hover:text-brand-text transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted">
            © {new Date().getFullYear()} TrustGuard AI. All rights reserved.
          </p>
          <p className="text-xs text-brand-muted">
            Built with 🛡️ to make the internet safer for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}
