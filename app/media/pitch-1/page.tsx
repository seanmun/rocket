'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Handshake } from 'lucide-react';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

const slides = [
  {
    id: 1,
    title: 'MISSION',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Mission</h2>
        <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-purple/30">
          <p className="text-xl text-gray-300 leading-relaxed">
            The Rocket Pool Tour (RPT) exists to engage, inspire, and positively impact fans, partners, and communities worldwide by showcasing the greatest talents in professional pool. The Tour promotes the sport by sanctioning tournaments and supporting its members' professional growth and interests.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'FOUNDERS',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Founders</h2>

        {/* Founder Photos */}
        <div className="flex justify-start gap-8 mb-8">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center overflow-hidden mb-3">
              <Image
                src="/images/Rodney-sq.png"
                alt="Rodney Morris"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-heading font-bold text-rpt-teal">Rodney Morris</p>
            <p className="text-sm text-gray-400">"Rocket"</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-rpt-purple to-rpt-teal flex items-center justify-center overflow-hidden mb-3">
              <Image
                src="/images/Ed-sq.png"
                alt="Ed Glode"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-heading font-bold text-rpt-purple">Ed Glode</p>
            <p className="text-sm text-gray-400">"EJ"</p>
          </div>
        </div>

        <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In 2008, World Champion <span className="text-rpt-teal font-bold">"Rocket" Rodney Morris</span> met <span className="text-rpt-purple font-bold">Ed "EJ" Glode</span> at the first Wyoming Open Pool Tournament, where Ed personally invited Rodney to compete. The two became fast friends, bonded by their passion for pool and their shared belief that the game—and the way it's traditionally played—needed to evolve.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Together, with more than <span className="text-rpt-yellow font-bold">70 years of combined experience</span>, they created the innovative all‑offense <span className="text-rpt-purple font-bold">Rocket Run-Out©</span> game format. Ed's business expertise and numerical intuition, combined with Rodney's Hall of Fame playing career, formed the perfect foundation for this vision.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            After years of testing and refinement, they are now ready to elevate the sport of billiards through the official <span className="text-rpt-teal font-bold">Rocket Pool Tour©</span>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'THIS IS THE RPT',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">This Is the RPT</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-8 border border-rpt-purple/30 mb-6">
          <p className="text-2xl text-gray-300 mb-4">
            The <span className="text-rpt-teal font-bold">Rocket Pool Tour (RPT)</span> is a new and dynamic professional billiards tour built around the fast‑paced, all‑offense <span className="text-rpt-purple font-bold">Rocket Run-Out©</span> format.
          </p>
        </div>
        <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700">
          <h3 className="font-heading font-bold text-2xl mb-6 text-rpt-teal">Season One Overview</h3>
          <ul className="space-y-4 text-lg text-gray-300">
            <li className="flex items-start">
              <span className="text-rpt-teal mr-3">•</span>
              <span><span className="font-bold">15 tour stops</span> across the United States</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-purple mr-3">•</span>
              <span><span className="font-bold">15 consecutive weeks</span> of competition</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-aqua mr-3">•</span>
              <span><span className="font-bold">Minimum $100,000 prize fund</span> at every stop</span>
            </li>
            <li className="flex items-start">
              <span className="text-rpt-yellow mr-3">•</span>
              <span>A season-long points race culminating in the crowning of the <span className="font-bold text-rpt-yellow">Rocket Pool Tour Champion</span> at the final event of the year</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'THE TOUR',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">The Tour</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-teal">Projected Launch</h3>
            <p className="text-gray-300">Season One is targeted to begin in <span className="font-bold">Q2 of 2026</span>.</p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-purple">Tour Structure</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <span className="font-bold">40 professional players</span> will compete across 15 tour stops over 15 consecutive weeks</li>
              <li>• Each week, the <span className="font-bold">highest-scoring player</span> at that tour stop will be declared the event winner</li>
              <li>• Tour stop locations will be finalized based on <span className="font-bold">geographic data</span> identifying the strongest U.S. fan bases</li>
            </ul>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-aqua">Points & Championship</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Points accumulated each week are <span className="font-bold">carried throughout the season</span></li>
              <li>• The player with the <span className="font-bold">highest total points after all 15 events</span> will be crowned the Rocket Pool Tour Champion</li>
            </ul>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-yellow/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-yellow">Player Compensation</h3>
            <p className="text-gray-300">Each touring professional will receive a <span className="font-bold">$100,000 salary</span> for holding an official RPT Tour Card for the season.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'WHAT THE RPT OFFERS',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">What the Rocket Pool Tour Offers</h2>
        <div className="space-y-4">
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-teal">A New Pool Experience</h3>
            <p className="text-gray-300">
              A <span className="font-bold">fresh, fast-paced, offense‑driven</span> pool format powered by Rocket Run-Out©. Designed to be <span className="font-bold">family-friendly</span>, visually engaging, and <span className="font-bold">production-heavy</span>—bringing a presentation style similar to the PGA or NBA.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-purple">Casino & Hospitality Partnerships</h3>
            <p className="text-gray-300">
              Robust partnership opportunities with <span className="font-bold">casinos, sports lounges, bars, and billiard halls</span>—natural environments for fans interested in sports betting, viewership, and on‑site activations.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-aqua">Broadcast & Media Reach</h3>
            <p className="text-gray-300">
              Access to <span className="font-bold">125 million+ U.S. TV households</span>, with additional global broadcast distribution through partners such as beIN Sports, SKY, FOX, and CBS Sports. The Tour will also feature strong digital and social media extensions to engage fans worldwide.
            </p>
            <p className="text-sm text-gray-400 mt-3 italic">Production budgets available upon request.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'BROADCAST & DIGITAL REACH',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Digital & Global Audience / Broadcast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-rpt-teal/20 to-rpt-teal/10 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-teal">U.S. Television Reach</h3>
            <div className="text-4xl font-heading font-bold text-rpt-teal mb-2">125M</div>
            <p className="text-gray-300">U.S. TV households (Nielsen Media)</p>
          </div>
          <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-purple/10 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-purple">International Distribution</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <span className="font-bold">beIN Sports – ENA:</span> 50M households</li>
              <li>• <span className="font-bold">SKY (UK & Ireland):</span> 23M subscribers</li>
            </ul>
          </div>
        </div>
        <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
          <h3 className="font-heading font-bold text-xl mb-4 text-rpt-aqua">Digital & Social Presence</h3>
          <p className="text-gray-300 mb-3">Active platforms: <span className="font-bold">Instagram, YouTube, TikTok, Facebook</span></p>
          <p className="text-gray-300 mb-4">A <span className="font-bold">Progressive Web App (PWA)</span> will support sponsor activations, contests, sweepstakes, and real-time engagement.</p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-rpt-gray-900 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">Mosconi Cup 2022</p>
              <p className="text-lg font-bold text-rpt-teal">1M livestream views</p>
            </div>
            <div className="bg-rpt-gray-900 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-1">World Pool Championship 2022</p>
              <p className="text-lg font-bold text-rpt-purple">1M livestream views</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: 'ELEVATING THE DRAFTKINGS BRAND',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Elevating the DraftKings Brand</h2>

        {/* Partnership Visual */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="w-32 h-32 flex items-center justify-center">
            <Image
              src="/logos/DraftKings_logo.png"
              alt="DraftKings"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
          <div className="text-rpt-teal">
            <Handshake size={64} strokeWidth={1.5} />
          </div>
          <div className="w-32 h-32 flex items-center justify-center">
            <Image
              src="/logos/8ball-rocket.png"
              alt="Rocket Pool Tour"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-teal">Premium Sports Positioning</h3>
            <p className="text-gray-300">
              Aligning DraftKings with iconic sponsorship models such as <span className="font-bold">Budweiser (NASCAR), Rolex (America's Cup), and FedEx (PGA)</span>—solidifying DraftKings as the premier betting partner for a modernized, global pool tour.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-purple">Official Partnership Status</h3>
            <p className="text-gray-300 text-2xl font-bold">
              "DraftKings — Official Betting Partner of the Rocket Pool Tour."
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-aqua">Content & Influencer Expansion</h3>
            <p className="text-gray-300">
              Development of long-term content series, behind-the-scenes features, and influencer-driven integrations designed to engage fans across all platforms.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-yellow/30">
            <h3 className="font-heading font-bold text-xl mb-3 text-rpt-yellow">Brand Visibility Opportunities</h3>
            <p className="text-gray-300 mb-3">High-impact branding placements including:</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Logos on-screen and in marketing materials</li>
              <li>• <span className="font-bold">Player jerseys</span></li>
              <li>• <span className="font-bold">Venue signage</span></li>
              <li>• Integrated digital overlays and analytics tie-ins</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'ADVANTAGES',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Advantages</h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-8 border border-rpt-purple/30 mb-6">
            <p className="text-3xl font-heading font-bold text-center mb-2">52,800</p>
            <p className="text-xl text-gray-300 text-center">Unique betting possibilities per full season</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-teal/30">
              <h4 className="font-bold text-rpt-teal mb-2">New Sports Audience</h4>
              <p className="text-sm text-gray-300">Access to a passionate, underserved market</p>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-purple/30">
              <h4 className="font-bold text-rpt-purple mb-2">Exclusive Game Format</h4>
              <p className="text-sm text-gray-300">Only tour featuring Rocket Run-Out©</p>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-aqua/30">
              <h4 className="font-bold text-rpt-aqua mb-2">Official Partnership</h4>
              <p className="text-sm text-gray-300">Category exclusivity in professional pool</p>
            </div>
            <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-yellow/30">
              <h4 className="font-bold text-rpt-yellow mb-2">Multi-Platform Visibility</h4>
              <p className="text-sm text-gray-300">Digital, broadcast, live events, mobile apps</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: 'PARTNERSHIP OPPORTUNITY',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8">Partnership Opportunity</h2>
        <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-purple/30">
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-teal">A New Professional Sports League</h3>
              <p className="leading-relaxed">
                Rocket Pool Tour, LLC invites DraftKings to join as an <span className="font-bold">exclusive strategic partner</span> as we launch the Rocket Pool Tour©, a professional sports league designed to create a competitive, scalable, and sustainable ecosystem for elite players.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-purple">A First in Professional Pool: True Statistics</h3>
              <p className="leading-relaxed">
                For the first time in the sport's history, the Rocket Pool Tour introduces a system that allows for <span className="font-bold">precise, real-time statistics</span>. This unlocks meaningful player analytics, fan engagement comparable to major sports, and <span className="font-bold text-rpt-yellow">massive betting opportunities</span> for DraftKings.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-aqua">Broadcast & Global Visibility</h3>
              <p className="leading-relaxed">
                Rocket Pool Tour© events will be televised on mainstream U.S. networks and streamed live to international audiences. Social media activations will amplify each tournament, maximizing branding and advertising impact.
              </p>
            </div>
            <p className="text-xl font-bold text-center text-rpt-teal pt-4">
              The Rocket Pool Tour© is poised to captivate audiences from its very first event.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 10,
    title: 'OFFER DETAILS',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Offer Details</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-12 border border-rpt-purple/30">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">Partnership Investment</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                DraftKings is invited to become the <span className="font-bold">Exclusive Official Sports Betting Partner</span> of the Rocket Pool Tour© for a sponsorship investment of:
              </p>
              <div className="text-center mt-6">
                <div className="text-5xl font-heading font-bold text-rpt-yellow mb-2">$5 Million</div>
                <p className="text-xl text-gray-300">per full tour season of scheduled professional events</p>
              </div>
            </div>
            <div className="pt-6 border-t border-rpt-gray-700">
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">Multi-Year Option</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A multi-year agreement is available, providing long-term category exclusivity and allowing DraftKings to fully integrate into the growth and evolution of the Rocket Pool Tour ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 11,
    title: 'CONCLUSION',
    content: (
      <div className="text-center space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8">Let's Build the Future Together</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-12 border border-rpt-purple/30 max-w-4xl mx-auto">
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            The Rocket Pool Tour© aligns naturally with DraftKings by engaging a shared core demographic of <span className="font-bold text-rpt-teal">sports enthusiasts ages 21–40</span>—an audience with disposable income, a passion for competition, and strong interest in immersive, social forms of entertainment.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            By partnering with the RPT, DraftKings can seamlessly extend its existing strategy into a <span className="font-bold text-rpt-purple">beloved American pastime</span>, reimagined through an exciting new format and supported by the first-ever accurate statistical system in professional pool.
          </p>
          <p className="text-2xl font-bold text-rpt-yellow mb-8">
            We would be honored to position DraftKings as the Exclusive Sports Betting Partner of this groundbreaking new professional tour.
          </p>
          <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 mt-8">
            <p className="text-lg font-bold text-rpt-teal mb-2">Contact</p>
            <p className="text-gray-300">partnerships@rocketpooltour.com</p>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Pitch1Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
      contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    contentRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add swipe gesture support
  useSwipeGesture({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
    minSwipeDistance: 100,
  });

  return (
    <div className="fixed inset-0 bg-rpt-black text-white overflow-hidden">
      {/* Slide Container */}
      <div className="relative h-full flex items-center justify-center p-4 md:p-8">
        <div ref={contentRef} className="max-w-6xl w-full h-full overflow-y-auto pb-24 pt-16">
          {slides[currentSlide].content}
        </div>

        {/* Navigation Controls - Hidden on mobile */}
        <div className="absolute bottom-8 left-0 right-0 hidden md:flex items-center justify-between px-8">
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
                onClick={() => goToSlide(index)}
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

        {/* Mobile Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex md:hidden items-center justify-center gap-2 px-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-rpt-teal w-8'
                  : 'bg-rpt-gray-700'
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 text-sm text-gray-400">
          {currentSlide + 1} / {slides.length}
        </div>

        {/* Exit Button */}
        <a
          href="/media"
          className="absolute top-4 left-4 md:top-8 md:left-8 p-2 md:p-3 rounded-lg bg-rpt-gray-800/90 backdrop-blur-sm border border-rpt-gray-700 hover:border-rpt-teal transition-all z-50"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </a>
      </div>
    </div>
  );
}
