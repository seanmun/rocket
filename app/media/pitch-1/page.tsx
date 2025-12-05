'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'ROCKET POOL TOUR',
    subtitle: 'Partnership Opportunity',
    content: (
      <div className="text-center">
        <div className="mb-8">
          <Image
            src="/logos/8ball-rocket.png"
            alt="Rocket Pool Tour"
            width={200}
            height={200}
            className="mx-auto opacity-20"
          />
        </div>
        <h1 className="font-heading font-bold text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
          ROCKET POOL TOUR
        </h1>
        <p className="text-3xl text-gray-300 mb-8">
          The Future of Competitive Pool
        </p>
        <p className="text-xl text-gray-400">
          Partnership Presentation for DraftKings
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: 'THE OPPORTUNITY',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">The Opportunity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">40 Elite Players</h3>
            <p className="text-gray-300">
              World-class professionals competing at the highest level across 15 consecutive weeks
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">$1.5M+ Prizes</h3>
            <p className="text-gray-300">
              Minimum $100K prize pool per event, $250K Championship Finale in Las Vegas
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30">
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-aqua">Revolutionary Format</h3>
            <p className="text-gray-300">
              Proprietary Rocket Run-Out© format designed for maximum engagement and betting opportunities
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-yellow/30">
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-yellow">Real-Time Stats</h3>
            <p className="text-gray-300">
              First-ever comprehensive statistical tracking system in professional pool
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'BETTING POSSIBILITIES',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Unprecedented Betting Opportunities</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-8 border border-rpt-purple/30 mb-8">
          <p className="text-3xl font-heading font-bold text-center mb-4">
            52,800+ Unique Betting Possibilities
          </p>
          <p className="text-xl text-gray-300 text-center">
            Per season across all formats and players
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-rpt-teal mb-2">200+</div>
            <p className="text-sm text-gray-400">Props per match</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-rpt-purple mb-2">15</div>
            <p className="text-sm text-gray-400">Weekly events</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-rpt-aqua mb-2">40</div>
            <p className="text-sm text-gray-400">Player matchups</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-heading font-bold text-rpt-yellow mb-2">Live</div>
            <p className="text-sm text-gray-400">In-play betting</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'ROCKET RUN-OUT FORMAT',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Rocket Run-Out© Format</h2>
        <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30 mb-6">
          <p className="text-xl text-gray-300 mb-4">
            Part of the <span className="text-rpt-purple font-bold">Saratoga series</span> – a proprietary, all-offense game featuring 5 solids, 5 stripes, and the 8-ball.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">Scoring System</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex justify-between">
                <span>Break and Run</span>
                <span className="text-rpt-teal font-bold">200 points</span>
              </li>
              <li className="flex justify-between">
                <span>Dry Break Run</span>
                <span className="text-rpt-purple font-bold">150 points</span>
              </li>
              <li className="flex justify-between">
                <span>Ball in Hand Run</span>
                <span className="text-rpt-aqua font-bold">100 points</span>
              </li>
              <li className="flex justify-between">
                <span>Salvage (post-scratch)</span>
                <span className="text-rpt-yellow font-bold">60 points max</span>
              </li>
              <li className="flex justify-between">
                <span>Incomplete Run</span>
                <span className="text-gray-400 font-bold">10 pts/ball</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">Betting Props</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Break and Run frequency</li>
              <li>• Individual rack outcomes</li>
              <li>• Player scoring averages</li>
              <li>• Ball-in-hand conversion rates</li>
              <li>• Match point totals (over/under)</li>
              <li>• Head-to-head matchups</li>
              <li>• First to X points</li>
              <li>• Comeback scenarios</li>
              <li>• High score predictions</li>
              <li>• And many more...</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'STATISTICS ENGINE',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Revolutionary Stats Engine</h2>
        <div className="bg-gradient-to-br from-rpt-teal/20 to-rpt-purple/20 rounded-lg p-8 border border-rpt-teal/30 mb-8">
          <p className="text-2xl text-gray-300 text-center">
            <span className="text-rpt-teal font-bold">First-ever</span> comprehensive, accurate statistics system in professional pool history
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Break Percentage</p>
            <p className="text-lg font-bold text-rpt-teal">Real-time tracking</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Run-out Rates</p>
            <p className="text-lg font-bold text-rpt-purple">By position</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Conversion Rates</p>
            <p className="text-lg font-bold text-rpt-aqua">Ball-in-hand</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Pressure Metrics</p>
            <p className="text-lg font-bold text-rpt-yellow">Clutch performance</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Head-to-Head</p>
            <p className="text-lg font-bold text-rpt-teal">Historical data</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
            <p className="text-sm text-gray-400 mb-1">Live Updates</p>
            <p className="text-lg font-bold text-rpt-purple">During matches</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'PARTNERSHIP BENEFITS',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">DraftKings Partnership Benefits</h2>
        <div className="space-y-4">
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-teal">Category Exclusivity</h3>
            <p className="text-gray-300">
              Exclusive sports betting partner for the Rocket Pool Tour across all platforms and broadcasts
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-purple">Brand Integration</h3>
            <p className="text-gray-300">
              Logo placement on broadcasts, venue signage, digital platforms, and player merchandise
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-aqua">Data Access</h3>
            <p className="text-gray-300">
              Real-time statistical feeds and API access for odds generation and live betting integration
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-yellow/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-yellow">Content Rights</h3>
            <p className="text-gray-300">
              Promotional content, player interviews, and behind-the-scenes access for DraftKings platforms
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'BROADCAST & REACH',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Broadcast & Audience Reach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-rpt-teal/20 to-rpt-teal/10 rounded-lg p-6 border border-rpt-teal/30 text-center">
            <div className="text-5xl font-heading font-bold text-rpt-teal mb-2">125M+</div>
            <p className="text-gray-300">U.S. TV Households</p>
          </div>
          <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-purple/10 rounded-lg p-6 border border-rpt-purple/30 text-center">
            <div className="text-5xl font-heading font-bold text-rpt-purple mb-2">Global</div>
            <p className="text-gray-300">International Distribution</p>
          </div>
          <div className="bg-gradient-to-br from-rpt-aqua/20 to-rpt-aqua/10 rounded-lg p-6 border border-rpt-aqua/30 text-center">
            <div className="text-5xl font-heading font-bold text-rpt-aqua mb-2">15</div>
            <p className="text-gray-300">Weekly Live Events</p>
          </div>
        </div>
        <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
          <h3 className="font-heading font-bold text-2xl mb-4">Distribution Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
            <div>• Major broadcast networks</div>
            <div>• beIN Sports</div>
            <div>• SKY Sports</div>
            <div>• Digital streaming</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'SEASON ONE TIMELINE',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Season One Timeline</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-32 flex-shrink-0">
              <div className="bg-rpt-teal/20 border border-rpt-teal/30 rounded-lg px-4 py-2 text-center">
                <p className="text-rpt-teal font-bold">Q1 2026</p>
              </div>
            </div>
            <div className="flex-1 bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <p className="text-gray-300">Partnership finalization and integration planning</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-32 flex-shrink-0">
              <div className="bg-rpt-purple/20 border border-rpt-purple/30 rounded-lg px-4 py-2 text-center">
                <p className="text-rpt-purple font-bold">Q2 2026</p>
              </div>
            </div>
            <div className="flex-1 bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <p className="text-gray-300">Season One launch - 15 weeks of competition</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-32 flex-shrink-0">
              <div className="bg-rpt-aqua/20 border border-rpt-aqua/30 rounded-lg px-4 py-2 text-center">
                <p className="text-rpt-aqua font-bold">Week 15</p>
              </div>
            </div>
            <div className="flex-1 bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <p className="text-gray-300">Championship Finale - Las Vegas ($250K prize pool)</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'NEXT STEPS',
    content: (
      <div className="text-center space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Let's Build the Future Together</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-12 border border-rpt-purple/30 max-w-3xl mx-auto">
          <p className="text-2xl text-gray-300 mb-8">
            The Rocket Pool Tour represents a unique opportunity to be part of a revolutionary new chapter in professional sports betting.
          </p>
          <div className="space-y-4">
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-gray-700">
              <p className="text-lg font-bold text-rpt-teal mb-2">Contact</p>
              <p className="text-gray-300">partnerships@rocketpooltour.com</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Pitch1Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-rpt-black text-white">
      {/* Slide Container */}
      <div className="relative h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl w-full">
          {slides[currentSlide].content}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex items-center justify-between px-8">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-lg bg-rpt-gray-800 border border-rpt-gray-700 hover:border-rpt-teal transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-rpt-teal w-8'
                    : 'bg-rpt-gray-700 hover:bg-rpt-gray-600'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-lg bg-rpt-gray-800 border border-rpt-gray-700 hover:border-rpt-teal transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Exit Button */}
        <a
          href="/media"
          className="absolute top-8 left-8 p-2 rounded-lg bg-rpt-gray-800 border border-rpt-gray-700 hover:border-rpt-teal transition-all"
        >
          <X size={20} />
        </a>
      </div>
    </div>
  );
}
