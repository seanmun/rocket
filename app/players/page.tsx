import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { players } from '@/data/players';
import { Users, Trophy, Target } from 'lucide-react';

export const metadata = {
  title: 'Players | Rocket Pool Tour',
  description: '40 elite professional players competing on the Rocket Pool Tour. View player profiles, stats, and rankings.',
};

export default function PlayersPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
              Tour Players
            </h1>
            <p className="text-xl text-gray-300">
              40 elite professionals competing for $100,000 Tour Cards
            </p>
          </div>
        </section>

        {/* Players Grid */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {players.map((player) => (
                  <Link
                    key={player.id}
                    href={`/players/${player.id}`}
                    className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center flex-shrink-0 group-hover:glow-teal transition-all">
                        <Users size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-heading font-bold text-lg group-hover:text-rpt-teal transition-colors">
                            {player.name}
                          </h3>
                          <div className="text-xs bg-rpt-gray-700 px-2 py-1 rounded">
                            #{player.ranking}
                          </div>
                        </div>
                        {player.nickname && (
                          <p className="text-sm text-rpt-teal mb-2">"{player.nickname}"</p>
                        )}
                        <p className="text-sm text-gray-400 mb-3">{player.hometown}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="text-gray-500">Points</div>
                            <div className="font-bold text-rpt-purple">{player.stats.totalPoints}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Avg</div>
                            <div className="font-bold text-rpt-aqua">{player.stats.averageScore}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-rpt-gray-900 text-center">
          <div className="container mx-auto px-4">
            <Trophy className="w-16 h-16 text-rpt-teal mb-6 mx-auto" />
            <h2 className="font-heading font-bold text-4xl mb-6">
              Full Player Profiles Coming Soon
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Detailed stats, career highlights, and live match tracking for all 40 Tour players.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
