'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { PlayerModal } from '@/components/player-modal';
import { EmailSignup } from '@/components/email-signup';
import { ChevronDown, Trophy, Zap, BarChart3, Users, Ticket, Calendar, Building2, TrendingUp } from 'lucide-react';
import { getRecentArticles } from '@/data/news';
import { getUpcomingEvents } from '@/data/events';
import { getPlayersByRanking } from '@/data/players';
import { Player } from '@/data/types';
import { useState } from 'react';

export default function Home() {
  const recentNews = getRecentArticles(3);
  const upcomingEvents = getUpcomingEvents().slice(0, 3);
  const topPlayers = getPlayersByRanking().slice(0, 3);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Next Event Banner */}
        {upcomingEvents.length > 0 && (
          <Link
            href="/schedule"
            className="block w-full bg-rpt-gray-800/95 backdrop-blur-sm border-b border-rpt-teal/30 hover:bg-rpt-gray-700/95 transition-all"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-center gap-3 text-sm">
                <span className="text-gray-400">Next Event:</span>
                <span className="text-gray-500">|</span>
                <span className="text-rpt-teal font-semibold">{upcomingEvents[0].city}, {upcomingEvents[0].state}</span>
                <span className="text-gray-500">|</span>
                <span className="text-gray-300">
                  {new Date(upcomingEvents[0].date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-gray-500">|</span>
                <Ticket className="w-4 h-4 text-rpt-teal" />
              </div>
            </div>
          </Link>
        )}

        {/* Signup Promotion Banner */}
        <button
          onClick={() => {
            document.getElementById('email-signup')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          className="block w-full bg-gradient-to-r from-rpt-purple/20 to-rpt-teal/20 border-b border-rpt-purple/30 hover:from-rpt-purple/30 hover:to-rpt-teal/30 transition-all"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm text-center">
              <span className="text-gray-300">Get updates, exclusive content, and early access to tickets</span>
              <span className="text-rpt-teal font-semibold whitespace-nowrap">→ Sign Up</span>
            </div>
          </div>
        </button>

        {/* Hero Section */}
        <section className="relative min-h-0 md:min-h-[85vh] flex items-start md:items-center justify-center bg-gradient-to-b from-rpt-black via-rpt-gray-900 to-rpt-black py-16 md:py-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,166,166,0.15),transparent_50%)]" />

          {/* Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] overflow-hidden">
            {/* Mobile Video - background (flipped vertically) */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[80%] h-auto object-contain md:hidden scale-y-[-1]"
            >
              <source src="/videos/background.mp4" type="video/mp4" />
            </video>
            {/* Desktop Video - background3 */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="hidden md:block w-full h-full object-cover"
            >
              <source src="/videos/background3.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            {/* Logo above headline */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/logos/rpt-logo-square.png"
                alt="Rocket Pool Tour"
                width={300}
                height={300}
                className="object-contain w-52 md:w-64 lg:w-80"
                style={{ filter: 'drop-shadow(-2px 0px 8px rgba(255, 255, 255, 0.3))' }}
                priority
              />
            </div>

            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-4 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
              ROCKET POOL TOUR
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
              The future of competitive pool. Fast-paced. Data-driven. Revolutionary.
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              40 elite players. 15 weeks. $1.5M+ in prizes. One groundbreaking new format.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/format"
                className="px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
              >
                Learn About Rocket Run-Out©
              </Link>
              <Link
                href="/schedule"
                className="px-8 py-4 bg-rpt-blue-dark hover:bg-rpt-blue text-white font-heading font-bold rounded-lg transition-all"
              >
                View Schedule
              </Link>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-rpt-teal" />
          </div>
        </section>

        {/* What is RPT Section */}
        <section className="py-24 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                What is the Rocket Pool Tour?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                A next-generation professional billiards league founded by World Champion "Rocket" Rodney Morris.
                The RPT introduces a revolutionary, fast-paced, offense-driven game format—<span className="text-rpt-teal font-semibold">Rocket Run-Out©</span>—and
                brings a modern, data-rich approach to a classic sport.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-rpt-gray-800 rounded-lg border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <Trophy className="w-12 h-12 text-rpt-teal mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-2">Elite Competition</h3>
                  <p className="text-gray-400 text-sm">
                    40 of the world's best players competing at the highest level
                  </p>
                </div>

                <div className="p-6 bg-rpt-gray-800 rounded-lg border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <Zap className="w-12 h-12 text-rpt-purple mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-2">Revolutionary Format</h3>
                  <p className="text-gray-400 text-sm">
                    Fast-paced, offense-driven Rocket Run-Out© gameplay
                  </p>
                </div>

                <div className="p-6 bg-rpt-gray-800 rounded-lg border border-rpt-gray-700 hover:border-rpt-aqua transition-all">
                  <BarChart3 className="w-12 h-12 text-rpt-aqua mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-2">Real-Time Stats</h3>
                  <p className="text-gray-400 text-sm">
                    First-ever accurate statistical tracking in professional pool
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Rocket Run-Out Preview */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                  Rocket Run-Out©
                </h2>
                <p className="text-lg text-gray-300">
                  A hybrid of 8-ball and 9-ball, designed for maximum excitement and statistical precision
                </p>
              </div>

              <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4 text-rpt-teal">How It Works</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-rpt-teal mr-2">•</span>
                        <span>5 solids, 5 stripes, and the 8-ball</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-teal mr-2">•</span>
                        <span>Select stripes or solids after break</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-teal mr-2">•</span>
                        <span>Run your suit, make the 8-ball last</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-teal mr-2">•</span>
                        <span>Offense-driven, comeback-friendly</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl mb-4 text-rpt-aqua">Scoring</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-rpt-aqua mr-2">200</span>
                        <span>Break and run</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-aqua mr-2">150</span>
                        <span>Dry break and run</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-aqua mr-2">100</span>
                        <span>Ball-in-hand run</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-rpt-aqua mr-2">10</span>
                        <span>Points per ball (incomplete run)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/format"
                    className="inline-block px-6 py-3 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                  >
                    Learn Full Rules
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Season Preview */}
        <section className="py-24 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Season One
              </h2>
              <p className="text-lg text-gray-300 mb-4">
                15 consecutive weeks • 15 tour stops • $1.5M+ total prizes
              </p>
              <p className="text-rpt-teal font-semibold">
                Launch: Q2 2026
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-rpt-teal">WEEK {event.week}</span>
                    <Calendar size={20} className="text-gray-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">{event.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">{event.location}</p>
                  <p className="text-sm text-gray-400 mb-3">{event.city}, {event.state}</p>
                  <p className="text-xs text-gray-500">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/schedule"
                className="inline-block px-6 py-3 bg-rpt-blue-dark hover:bg-rpt-blue text-white font-heading font-bold rounded-lg transition-all"
              >
                View Full Schedule
              </Link>
            </div>
          </div>
        </section>

        {/* Top Players Preview */}
        <section className="py-24 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Elite Players
              </h2>
              <p className="text-lg text-gray-300">
                40 of the world's best competing for Tour Cards worth $100,000 each
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
                {topPlayers.map((player) => (
                  <button
                    key={player.id}
                    onClick={() => setSelectedPlayer(player)}
                    className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-purple transition-all text-center group cursor-pointer w-full"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple mb-4 mx-auto flex items-center justify-center group-hover:glow-purple transition-all">
                      <Users size={32} className="text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-sm mb-1">{player.name}</h3>
                    <p className="text-xs text-rpt-teal mb-2">
                      {player.nickname ? `"${player.nickname}"` : '\u00A0'}
                    </p>
                    <p className="text-xs text-gray-400">Rank #{player.ranking}</p>
                    <div className="mt-3 text-xs text-rpt-teal group-hover:text-rpt-teal-light transition-colors">
                      View Stats →
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/players"
                className="inline-block px-6 py-3 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
              >
                View All Players
              </Link>
            </div>
          </div>
        </section>

        {/* Exhibitors Section */}
        <section className="py-24 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rpt-yellow/20 to-rpt-teal/20 px-4 py-2 rounded-full border border-rpt-yellow/30 mb-4">
                <Building2 className="w-4 h-4 text-rpt-yellow" />
                <span className="text-rpt-yellow font-bold text-sm">30 EXHIBITOR SPACES • 10' × 10'</span>
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Exhibitor Opportunities
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-2">
                Partner with the future of professional billiards
              </p>
              <p className="text-sm text-rpt-teal font-semibold">
                Early Bird Pricing: 20% discount for the first 10 spaces booked
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-5xl mx-auto">
              <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                <Building2 className="w-10 h-10 text-rpt-teal mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Prime Exposure</h3>
                <p className="text-gray-300">
                  Position your brand in front of professional players, enthusiasts, and industry leaders
                </p>
              </div>

              <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                <Users className="w-10 h-10 text-rpt-aqua mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Direct Access</h3>
                <p className="text-gray-300">
                  Connect directly with a passionate community of pool players and fans
                </p>
              </div>

              <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                <TrendingUp className="w-10 h-10 text-rpt-purple mb-4" />
                <h3 className="font-heading font-bold text-xl mb-3">Growing Market</h3>
                <p className="text-gray-300">
                  Be part of the fastest-growing professional pool tour in the region
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/exhibitors"
                className="inline-block px-8 py-4 bg-rpt-teal hover:bg-rpt-teal-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-teal"
              >
                Learn More About Exhibiting
              </Link>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section id="email-signup" className="py-24 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <EmailSignup />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Be Part of History
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              The Rocket Pool Tour is redefining professional billiards. Stay updated on Season One launch, player announcements, and partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/exhibitors"
                className="inline-block px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
              >
                Become an Exhibitor
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-rpt-blue-dark hover:bg-rpt-blue text-white font-heading font-bold rounded-lg transition-all"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Player Modal */}
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          isOpen={!!selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </>
  );
}
