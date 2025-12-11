'use client';

import { useState, useEffect } from 'react';

export function AdvantagesSlide() {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex((prev) => (prev + 1) % 6);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const advantages = [
    {
      title: 'Broadcast App & RTX Studio',
      description: 'Promote Broadcast App and RTX Studio tools to content creators, streamers, and production staff.',
    },
    {
      title: 'Exclusive Game Format',
      description: 'Only Professional Pool Tour with Rocket Run-Out—RPT owns the intellectual property.',
    },
    {
      title: 'Official Tech Partner',
      description: 'Position NVIDIA as the Official Tech Partner of the Rocket Pool Tour©.',
    },
    {
      title: 'Live Event Engagement',
      description: 'VIP meet and greets with on-site product showcasing and demos at live tournaments.',
    },
    {
      title: 'Generative AI Content',
      description: 'AI-powered highlights running on NVIDIA hardware. ("NVIDIA Precision Shot of the Day")',
    },
    {
      title: 'Multi-Platform Showcase',
      description: 'Showcase across digital, TV, live events, apps, and social media for maximum reach.',
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
        Advantages
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-4 isolate">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-6 border-2 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden transition-all duration-500 ${
              highlightedIndex === index
                ? 'border-rpt-yellow shadow-[0_0_40px_rgba(255,215,0,0.6)] scale-105'
                : 'border-rpt-teal/40'
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            {highlightedIndex === index && (
              <div className="absolute inset-0 bg-gradient-to-br from-rpt-yellow/20 via-rpt-yellow/10 to-transparent pointer-events-none" />
            )}
            <div className="relative z-10">
              <h4 className={`font-heading font-bold text-xl mb-3 transition-colors duration-500 ${
                highlightedIndex === index ? 'text-rpt-yellow' : 'text-white'
              }`}>
                {advantage.title}
              </h4>
              <p className="text-white leading-relaxed">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
