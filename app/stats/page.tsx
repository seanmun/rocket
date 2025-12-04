import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { BarChart3, TrendingUp, Target, Zap, Activity, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Stats Hub | Rocket Pool Tour',
  description: 'Revolutionary statistics tracking for professional billiards. Real-time analytics, player performance metrics, and comprehensive data tracking coming soon.',
};

export default function StatsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-rpt-teal/20 border border-rpt-teal/30 mb-6">
                <span className="text-rpt-teal text-sm font-medium">Coming Q2 2026</span>
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                RPT Stats Hub
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                The first comprehensive, accurate statistics engine in professional pool history
              </p>
              <p className="text-lg text-gray-400">
                Real-time tracking • Advanced analytics • Player insights
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Visual */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-rpt-gray-900 to-rpt-gray-800 rounded-xl p-12 border-2 border-rpt-teal/30 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 166, 166, 0.3) 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }} />
                </div>

                {/* Content */}
                <div className="relative text-center">
                  <div className="w-32 h-32 rounded-full bg-rpt-teal/20 border-4 border-rpt-teal/40 flex items-center justify-center mx-auto mb-8">
                    <BarChart3 size={64} className="text-rpt-teal" />
                  </div>
                  <h2 className="font-heading font-bold text-4xl mb-6">
                    Stats Engine in Development
                  </h2>
                  <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                    We're building the most sophisticated statistics platform in cue sports history. Track every shot, every rack, and every match with unprecedented detail and accuracy.
                  </p>
                  <div className="inline-block px-6 py-3 bg-rpt-gray-800 rounded-lg border border-rpt-teal/30">
                    <p className="text-sm text-gray-400">
                      Launch targeted for <span className="text-rpt-teal font-semibold">Q2 2026</span> alongside Season One
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Coming */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-4xl mb-4">
                  What's Coming
                </h2>
                <p className="text-lg text-gray-300">
                  Revolutionary features that will transform how we understand professional pool
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-teal/20 border border-rpt-teal/30 flex items-center justify-center mb-4">
                    <Target className="w-7 h-7 text-rpt-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Real-Time Tracking</h3>
                  <p className="text-gray-300 text-sm">
                    Live statistics during matches with instant updates on break percentages, run-out rates, and scoring efficiency.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-purple/20 border border-rpt-purple/30 flex items-center justify-center mb-4">
                    <TrendingUp className="w-7 h-7 text-rpt-purple" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Player Analytics</h3>
                  <p className="text-gray-300 text-sm">
                    Comprehensive performance metrics including head-to-head records, clutch performance, and improvement trends over time.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-aqua transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-aqua/20 border border-rpt-aqua/30 flex items-center justify-center mb-4">
                    <Zap className="w-7 h-7 text-rpt-aqua" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Advanced Metrics</h3>
                  <p className="text-gray-300 text-sm">
                    Break-and-run frequency, ball-in-hand conversion rates, second-suit run success, and dozens more unique statistics.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-yellow transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-yellow/20 border border-rpt-yellow/30 flex items-center justify-center mb-4">
                    <Activity className="w-7 h-7 text-rpt-yellow" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Match History</h3>
                  <p className="text-gray-300 text-sm">
                    Complete game-by-game breakdowns with rack-level detail, shot selection analysis, and position play tracking.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-teal/20 border border-rpt-teal/30 flex items-center justify-center mb-4">
                    <Database className="w-7 h-7 text-rpt-teal" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Historical Data</h3>
                  <p className="text-gray-300 text-sm">
                    Season-long tracking with career statistics, tournament results, and performance across different venues.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <div className="w-14 h-14 rounded-full bg-rpt-purple/20 border border-rpt-purple/30 flex items-center justify-center mb-4">
                    <BarChart3 className="w-7 h-7 text-rpt-purple" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Data Visualization</h3>
                  <p className="text-gray-300 text-sm">
                    Interactive charts, graphs, and visual breakdowns that make complex statistics easy to understand and explore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-4xl mb-4">
                  Why It Matters
                </h2>
                <p className="text-lg text-gray-300">
                  The Rocket Run-Out© format enables statistical precision that's never existed in professional pool
                </p>
              </div>

              <div className="bg-gradient-to-br from-rpt-purple/10 to-rpt-teal/10 rounded-xl p-8 md:p-12 border border-rpt-purple/30">
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg">
                    "For decades, pool has lacked the statistical depth of other professional sports. We've had win-loss records and maybe some rough estimates, but nothing like what you see in basketball, baseball, or golf."
                  </p>
                  <p>
                    The Rocket Run-Out© format changes everything. Its precise scoring system and structured gameplay enable comprehensive tracking of every aspect of player performance—from break success rates to clutch performance under pressure.
                  </p>
                  <p>
                    This data will power fan engagement features, broadcast graphics, betting opportunities with partners like Railbirds, and help players analyze their game in unprecedented detail.
                  </p>
                  <div className="pt-6 border-t border-rpt-gray-700">
                    <p className="text-sm text-gray-400 italic">
                      — Rodney "Rocket" Morris, Co-Founder & Tour Commissioner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learn More CTA */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Want to learn more about the Stats Engine development? Read our latest article.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/news/stats-engine-development"
                className="inline-block px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
              >
                Read Stats Engine Article
              </Link>
              <Link
                href="/news"
                className="inline-block px-8 py-4 bg-rpt-blue-dark hover:bg-rpt-blue text-white font-heading font-bold rounded-lg transition-all"
              >
                All News
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
