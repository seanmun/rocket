'use client';

import { useCountUp } from '@/hooks/useCountUp';

interface BroadcastSlideProps {
  includeReachSummary?: boolean;
}

export function BroadcastSlide({ includeReachSummary = true }: BroadcastSlideProps) {
  // Count up animations for the main stats
  const usCount = useCountUp({ end: 125, duration: 2000, delay: 300 });
  const beinCount = useCountUp({ end: 50, duration: 2000, delay: 500 });
  const skyCount = useCountUp({ end: 23, duration: 2000, delay: 700 });

  // Count up for livestream stats
  const mosconiCount = useCountUp({ end: 1, duration: 1500, delay: 900 });
  const worldPoolCount = useCountUp({ end: 1, duration: 1500, delay: 1100 });

  return (
    <div className="space-y-8">
      <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
        Broadcast & Digital Reach
      </h2>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* U.S. Television */}
        <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-teal/20 to-rpt-teal/10 rounded-xl p-8 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl mb-4 text-rpt-teal">U.S. Television Reach</h3>
            <div className="text-6xl font-heading font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">
              {usCount}M
            </div>
            <p className="text-gray-200 font-semibold">U.S. TV households</p>
          </div>
        </div>

        {/* beIN Sports */}
        <div className="bg-gradient-to-br from-rpt-purple/30 via-rpt-purple/20 to-rpt-purple/10 rounded-xl p-8 border-2 border-rpt-purple/40 shadow-[0_0_30px_rgba(138,43,226,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl mb-4 text-rpt-purple">beIN Sports - ENA</h3>
            <div className="text-6xl font-heading font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">
              {beinCount}M
            </div>
            <p className="text-gray-200 font-semibold">Middle East & North Africa households</p>
          </div>
        </div>

        {/* SKY */}
        <div className="bg-gradient-to-br from-rpt-aqua/30 via-rpt-aqua/20 to-rpt-aqua/10 rounded-xl p-8 border-2 border-rpt-aqua/40 shadow-[0_0_30px_rgba(0,191,255,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl mb-4 text-rpt-aqua">SKY (UK & Ireland)</h3>
            <div className="text-6xl font-heading font-bold text-white mb-3 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">
              {skyCount}M
            </div>
            <p className="text-gray-200 font-semibold">subscribers</p>
          </div>
        </div>
      </div>

      {/* Digital & Social Section */}
      <div className="bg-rpt-gray-800 rounded-xl p-8 border border-rpt-gray-700">
        <h3 className="font-heading font-bold text-2xl mb-6 text-rpt-teal">Digital & Social Presence</h3>

        {/* Platform Pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="px-4 py-2 bg-gradient-to-r from-rpt-purple/20 to-rpt-teal/20 rounded-full border border-rpt-purple/30">
            <span className="font-semibold text-white">Instagram</span>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-rpt-teal/20 to-rpt-aqua/20 rounded-full border border-rpt-teal/30">
            <span className="font-semibold text-white">YouTube</span>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-rpt-aqua/20 to-rpt-purple/20 rounded-full border border-rpt-aqua/30">
            <span className="font-semibold text-white">TikTok</span>
          </div>
          <div className="px-4 py-2 bg-gradient-to-r from-rpt-purple/20 to-rpt-teal/20 rounded-full border border-rpt-purple/30">
            <span className="font-semibold text-white">Facebook</span>
          </div>
        </div>

        <p className="text-gray-300 mb-6 text-lg">
          A <span className="font-bold text-rpt-teal">Progressive Web App (PWA)</span> will support sponsor activations, contests, sweepstakes, and real-time engagement.
        </p>

        {/* Livestream Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-rpt-teal/10 to-transparent rounded-lg p-6 border border-rpt-teal/20 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">Mosconi Cup 2022</p>
            <p className="text-4xl font-heading font-bold text-rpt-teal drop-shadow-[0_0_8px_rgba(0,166,166,0.6)]">
              {mosconiCount}M
            </p>
            <p className="text-gray-300 mt-1">livestream views</p>
          </div>
          <div className="bg-gradient-to-br from-rpt-purple/10 to-transparent rounded-lg p-6 border border-rpt-purple/20 backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">World Pool Championship 2022</p>
            <p className="text-4xl font-heading font-bold text-rpt-purple drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]">
              {worldPoolCount}M
            </p>
            <p className="text-gray-300 mt-1">livestream views</p>
          </div>
        </div>
      </div>
    </div>
  );
}
