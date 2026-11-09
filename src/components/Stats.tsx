'use client';

import { TrendingUp, Users, ShieldAlert, Clock } from 'lucide-react';

const stats = [
  {
    icon: ShieldAlert,
    value: '2.4M+',
    label: 'Scam Postings Detected',
    description: 'Fraudulent job listings identified and flagged',
  },
  {
    icon: Users,
    value: '500K+',
    label: 'Users Protected',
    description: 'Job seekers saved from recruitment fraud',
  },
  {
    icon: TrendingUp,
    value: '97.3%',
    label: 'Detection Accuracy',
    description: 'Across multi-layered AI analysis pipeline',
  },
  {
    icon: Clock,
    value: '<8s',
    label: 'Average Scan Time',
    description: 'Full analysis including company verification',
  },
];

export default function Stats() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-3xl p-10 sm:p-14 glow-purple">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center lg:border-r last:border-r-0 border-white/5 px-4">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-6 h-6 text-brand-purple" />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-purple mb-1">
                    {stat.value}
                  </div>
                  <div className="font-medium text-sm mb-1">{stat.label}</div>
                  <div className="text-xs text-brand-muted">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
