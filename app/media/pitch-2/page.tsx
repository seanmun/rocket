'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Handshake } from 'lucide-react';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { BroadcastSlide } from '@/components/broadcast-slide';

const slides = [
  {
    id: 1,
    title: 'MISSION',
    content: (
      <div className="space-y-6">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Mission</h2>
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Founders</h2>

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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">This Is the RPT</h2>
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">The Tour</h2>
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">What the Rocket Pool Tour Offers</h2>
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
    content: <BroadcastSlide includeReachSummary={false} />,
  },
  {
    id: 7,
    title: 'ELEVATING THE NVIDIA BRAND',
    content: (
      <div className="space-y-4">
        <h2 className="font-heading font-bold text-5xl mb-4 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">
          Elevating the NVIDIA Brand
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column - Image */}
          <div className="space-y-3">
            {/* Partnership Visual */}
            <div className="flex items-center justify-center gap-6 mb-3 bg-gradient-to-r from-rpt-teal/10 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-4 border border-rpt-teal/30">
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/logos/Nvidia_logo.png"
                  alt="NVIDIA"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <div className="text-rpt-teal drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">
                <Handshake size={48} strokeWidth={1.5} />
              </div>
              <div className="w-24 h-24 flex items-center justify-center">
                <Image
                  src="/logos/rpt-logo-square.png"
                  alt="Rocket Pool Tour"
                  width={96}
                  height={96}
                  className="object-contain"
                  style={{ filter: 'drop-shadow(-2px 0px 8px rgba(255, 255, 255, 0.3))' }}
                />
              </div>
            </div>

            {/* Sponsor Image */}
            <div className="relative rounded-xl overflow-hidden border-2 border-rpt-teal/40 shadow-[0_0_40px_rgba(0,166,166,0.3)]">
              <Image
                src="/images/nvidia-sponsors.png"
                alt="NVIDIA Sponsorship on RPT Uniforms"
                width={600}
                height={400}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rpt-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-rpt-black/80 to-transparent">
                <p className="text-sm font-heading font-bold text-white drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">NVIDIA Brand Integration on Uniforms</p>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="space-y-2">
            <div className="bg-gradient-to-br from-rpt-teal/20 via-rpt-teal/10 to-transparent rounded-lg p-4 border border-rpt-teal/40 shadow-[0_0_20px_rgba(0,166,166,0.15)]">
              <h3 className="font-heading font-bold text-lg mb-2 text-rpt-teal drop-shadow-[0_0_8px_rgba(0,166,166,0.6)]">Premium Sports Positioning</h3>
              <p className="text-gray-200 text-sm font-medium">
                New positioning akin to <span className="font-bold text-white">Budweiser (NASCAR), Rolex (America's Cup), FedEx (PGA)</span>—solidifying NVIDIA as the technology leader for a modernized, global pool tour.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rpt-purple/20 via-rpt-purple/10 to-transparent rounded-lg p-4 border border-rpt-purple/40 shadow-[0_0_20px_rgba(138,43,226,0.15)]">
              <h3 className="font-heading font-bold text-lg mb-2 text-rpt-purple drop-shadow-[0_0_8px_rgba(138,43,226,0.6)]">Official Partnership Status</h3>
              <p className="text-white text-xl font-heading font-bold drop-shadow-[0_0_6px_rgba(138,43,226,0.4)]">
                "NVIDIA, the Official Technology Partner of the RPT"
              </p>
            </div>
            <div className="bg-gradient-to-br from-rpt-aqua/20 via-rpt-aqua/10 to-transparent rounded-lg p-4 border border-rpt-aqua/40 shadow-[0_0_20px_rgba(0,191,255,0.15)]">
              <h3 className="font-heading font-bold text-lg mb-2 text-rpt-aqua drop-shadow-[0_0_8px_rgba(0,191,255,0.6)]">Content & Influencer Expansion</h3>
              <p className="text-gray-200 text-sm font-medium">
                Long-term content series and influencer integrations designed to engage fans across all platforms.
              </p>
            </div>
            <div className="bg-gradient-to-br from-rpt-yellow/20 via-rpt-yellow/10 to-transparent rounded-lg p-4 border border-rpt-yellow/40 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
              <h3 className="font-heading font-bold text-lg mb-2 text-rpt-yellow drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]">Expanding Reach & Demographics</h3>
              <p className="text-gray-200 text-sm font-medium">
                Expanding reach and new demographics with a wider global audience through a new entertainment and sport crossover. Offering NVIDIA new inventory across <span className="font-bold text-white">TV, digital, app, and social media platforms</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: 'ADVANTAGES',
    content: (
      <div className="space-y-4">
        <h2 className="font-heading font-bold text-5xl mb-6 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Advantages</h2>
        <div className="space-y-3">
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-teal/30">
            <h4 className="font-bold text-rpt-teal mb-2 text-lg">Broadcast App & RTX Studio Promotion</h4>
            <p className="text-gray-300 text-sm">
              NVIDIA can promote their <span className="font-bold">Broadcast App and RTX Studio tools</span> to content creators, streamers, and production staff associated with the RPT.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-purple/30">
            <h4 className="font-bold text-rpt-purple mb-2 text-lg">Exclusive Game Format & IP Ownership</h4>
            <p className="text-gray-300 text-sm">
              RPT will be the <span className="font-bold">only Professional Pool Tour</span> that has Rocket Run-Out being played, as RPT owns the intellectual property for the games and scoring system.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-aqua/30">
            <h4 className="font-bold text-rpt-aqua mb-2 text-lg">Official Tech Partner Status</h4>
            <p className="text-gray-300 text-sm">
              Position NVIDIA as the <span className="font-bold">Official Tech Partner of the Rocket Pool Tour©</span>.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-yellow/30">
            <h4 className="font-bold text-rpt-yellow mb-2 text-lg">Live Event Engagement</h4>
            <p className="text-gray-300 text-sm">
              Live tournaments, trade shows, and promotions create interactive fan engagement. NVIDIA can layer in <span className="font-bold">VIP meet and greets with on-site product showcasing and demos</span>.
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-teal/30">
            <h4 className="font-bold text-rpt-teal mb-2 text-lg">Generative AI & Content Creation</h4>
            <p className="text-gray-300 text-sm">
              Use <span className="font-bold">generative AI (running on NVIDIA hardware)</span> to automatically create high-quality social media clips tied to specific in-game moments. (<span className="italic">"NVIDIA Precision Shot of the DAY"</span>)
            </p>
          </div>
          <div className="bg-rpt-gray-800 rounded-lg p-4 border border-rpt-purple/30">
            <h4 className="font-bold text-rpt-purple mb-2 text-lg">Multi-Platform Showcase</h4>
            <p className="text-gray-300 text-sm">
              Showcase NVIDIA across new RPT formats: <span className="font-bold">digital, TV, live events, apps, and social media</span>, providing a fresh, and engaging experience for the audience, while growing revenue for NVIDIA through ad content.
            </p>
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Partnership Opportunity</h2>
        <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-purple/30">
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-teal">A New Professional Sports League</h3>
              <p className="leading-relaxed">
                Rocket Pool Tour, LLC would like to offer NVIDIA a Partnership opportunity as we launch the Rocket Pool Tour© as a professional sports league. This initiative aims to create a competitive, sustainable ecosystem for Professional Players, featuring tournaments across the U.S. each year.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-purple">A Dynamic, Modern Version of Pool</h3>
              <p className="leading-relaxed">
                The tour will showcase a <span className="font-bold">dynamic, entertaining, and unique version of pool</span>, branded as the "Rocket Run Out©". The non-stop action of the "Rocket Run Out©" will become a popular choice for viewers and sports fans.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-aqua">A First in Professional Pool: True Statistics</h3>
              <p className="leading-relaxed">
                This will also be the <span className="font-bold">first time in professional pool that we are able to keep accurate statistics</span>, putting pool on par with every other major sport. In an all offense format, players will now compete to achieve the highest scores and personal bests, with opportunities for dramatic comebacks in each game's final moments.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl mb-3 text-rpt-yellow">Broadcast & Global Visibility</h3>
              <p className="leading-relaxed">
                The Rocket Pool Tour© tournaments will broadcast on <span className="font-bold">mainstream network television and live-streamed</span>, reaching audiences in the US and International markets. Social media will bolster the live tournament events, optimizing branding and advertising opportunities.
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Offer Details</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-12 border border-rpt-purple/30">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">Partnership Investment</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                NVIDIA is invited to become the <span className="font-bold">Official Tech Partner</span> of the Rocket Pool Tour© for a sponsorship investment of:
              </p>
              <div className="text-center mt-6">
                <div className="text-5xl font-heading font-bold text-rpt-yellow mb-2">$10 Million</div>
                <p className="text-xl text-gray-300">annually</p>
              </div>
            </div>
            <div className="pt-6 border-t border-rpt-gray-700">
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">Multi-Year Option</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                A multi-year agreement is available, providing long-term category exclusivity and allowing NVIDIA to fully integrate into the growth and evolution of the Rocket Pool Tour ecosystem.
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
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,166,166,0.5)]">Let's Build the Future Together</h2>
        <div className="bg-gradient-to-br from-rpt-purple/20 to-rpt-teal/20 rounded-lg p-12 border border-rpt-purple/30 max-w-4xl mx-auto">
          <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
            NVIDIA can integrate its core technology into the Rocket Pool Tour's broadcast and fan experience, <span className="font-bold text-rpt-teal">transforming a traditional sport into a "SMART SPORT"</span>.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            NVIDIA can gain <span className="font-bold text-rpt-purple">brand visibility to a diverse, engaged audience in the USA</span>, similar to its esports and gaming sponsorships. It offers opportunities for on-site product showcasing (e.g. portable gaming, laptops, or AI demos), and digital content creation around the tour.
          </p>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Therefore <span className="font-bold text-rpt-aqua">connecting their technology with performance and precision</span>, qualities valued by both gamers and pro pool players.
          </p>
          <p className="text-2xl font-bold text-rpt-yellow mb-8">
            We would be honored to have NVIDIA as the official Tech Partner for this exciting new Pro Tour.
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
