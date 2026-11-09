'use client';

import { Check, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'For individual job seekers who want basic protection.',
    features: [
      '10 scans per month',
      'Job description analysis',
      'Basic trust score',
      'Email scam detection',
      'Community reports access',
    ],
    cta: 'Start Free',
    highlighted: false,
    color: 'brand-muted',
  },
  {
    name: 'Professional',
    price: '$19',
    period: '/month',
    description: 'For active job seekers and freelancers who need full protection.',
    features: [
      'Unlimited scans',
      'Full company verification (7 checks)',
      'Explainable AI breakdown',
      'URL & domain analysis',
      'Smart moderation recommendations',
      'Priority scan processing',
      'Export reports',
    ],
    cta: 'Get Early Access',
    highlighted: true,
    color: 'brand-cyan',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For HR platforms, job boards, and organizations at scale.',
    features: [
      'Everything in Professional',
      'API access & webhooks',
      'Bulk scan processing',
      'Custom model training',
      'SSO & team management',
      'Dedicated support & SLA',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    color: 'brand-purple',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-emerald/[0.02] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-brand-emerald tracking-wide uppercase">
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-5 tracking-tight">
            Protection That{' '}
            <span className="text-gradient-cyan">Scales With You</span>
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Start free, upgrade when you need more. Every plan includes our core AI detection engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border ${
                plan.highlighted
                  ? 'glass-strong glow-cyan border-brand-cyan/40 hover:border-brand-cyan/70'
                  : 'glass border-white/5 hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display text-lg font-semibold mb-1">{plan.name}</h3>
                <p className="text-sm text-brand-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className="text-brand-muted text-sm">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 text-${plan.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-brand-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group flex items-center justify-center gap-2 w-full py-3 rounded-xl font-medium text-sm transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-brand-cyan to-brand-emerald text-brand-bg hover:shadow-lg hover:shadow-brand-cyan/25'
                    : 'glass hover:bg-white/10'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
