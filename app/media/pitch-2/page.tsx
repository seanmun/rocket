'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Handshake } from 'lucide-react';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import { BroadcastSlide } from '@/components/broadcast-slide';
import { USMap } from '@/components/us-map';
import { AdvantagesSlide } from '@/components/advantages-slide';

const slides = [
  {
    id: 1,
    title: 'MISSION',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          Mission
        </h2>

        {/* Mission Statement Card */}
        <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-8 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <p className="text-xl text-white leading-relaxed font-medium text-center">
              The Rocket Pool Tour (RPT) exists to <span className="font-bold text-rpt-teal">engage, inspire, and positively impact</span> fans, partners, and communities worldwide by showcasing the greatest talents in professional pool. The Tour promotes the sport by sanctioning tournaments and supporting its members' <span className="font-bold text-rpt-purple">professional growth and interests</span>.
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center">
          <div className="w-80 h-80 flex items-center justify-center">
            <Image
              src="/logos/rpt-logo-square.png"
              alt="Rocket Pool Tour"
              width={320}
              height={320}
              className="object-contain drop-shadow-[0_0_40px_rgba(0,166,166,0.4)]"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'FOUNDERS',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          Founders
        </h2>

        {/* Founder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Rodney Morris */}
          <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-teal/20 to-rpt-teal/10 rounded-xl p-6 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center overflow-hidden mb-4 mx-auto ring-4 ring-rpt-teal/50 shadow-[0_0_20px_rgba(0,166,166,0.4)]">
                <Image
                  src="/images/Rodney-sq.png"
                  alt="Rodney Morris"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-heading font-bold text-2xl text-rpt-teal drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">Rodney Morris</p>
              <p className="text-lg text-white font-semibold mb-2">"Rocket"</p>
              <p className="text-sm text-gray-200">World Champion • Hall of Fame Player</p>
            </div>
          </div>

          {/* Ed Glode */}
          <div className="bg-gradient-to-br from-rpt-purple/30 via-rpt-purple/20 to-rpt-purple/10 rounded-xl p-6 border-2 border-rpt-purple/40 shadow-[0_0_30px_rgba(138,43,226,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-rpt-purple to-rpt-teal flex items-center justify-center overflow-hidden mb-4 mx-auto ring-4 ring-rpt-purple/50 shadow-[0_0_20px_rgba(138,43,226,0.4)]">
                <Image
                  src="/images/Ed-sq.png"
                  alt="Ed Glode"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-heading font-bold text-2xl text-rpt-purple drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">Ed Glode</p>
              <p className="text-lg text-white font-semibold mb-2">"EJ"</p>
              <p className="text-sm text-gray-200">Business Expertise • Visionary</p>
            </div>
          </div>
        </div>

        {/* Story Sections */}
        <div className="space-y-4">
          {/* First Meeting */}
          <div className="bg-gradient-to-br from-rpt-aqua/20 via-rpt-aqua/10 to-transparent rounded-xl p-6 border border-rpt-aqua/30 shadow-[0_0_20px_rgba(0,191,255,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl mb-3 text-rpt-aqua">The Beginning - 2008</h3>
              <p className="text-white leading-relaxed">
                At the first Wyoming Open Pool Tournament, World Champion <span className="font-bold text-rpt-teal">"Rocket" Rodney Morris</span> met <span className="font-bold text-rpt-purple">Ed "EJ" Glode</span>, who personally invited Rodney to compete. The two became fast friends, bonded by their passion for pool and their shared belief that the game needed to evolve.
              </p>
            </div>
          </div>

          {/* Combined Experience */}
          <div className="bg-gradient-to-br from-rpt-yellow/20 via-rpt-yellow/10 to-transparent rounded-xl p-6 border border-rpt-yellow/30 shadow-[0_0_20px_rgba(255,215,0,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl mb-3 text-rpt-yellow">70+ Years Combined Experience</h3>
              <p className="text-white leading-relaxed">
                Together, they created the innovative all-offense <span className="font-bold text-rpt-purple">Rocket Run-Out©</span> game format. Ed's business expertise and numerical intuition, combined with Rodney's Hall of Fame playing career, formed the perfect foundation for this vision.
              </p>
            </div>
          </div>

          {/* The Vision */}
          <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-6 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10 text-center">
              <p className="text-xl text-white leading-relaxed font-semibold">
                After years of testing and refinement, they are now ready to elevate the sport of billiards through the official <span className="font-bold text-rpt-teal">Rocket Pool Tour©</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'THIS IS THE RPT',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          This Is the RPT
        </h2>

        {/* Introduction Card */}
        <div className="bg-gradient-to-br from-rpt-purple/30 via-rpt-teal/20 to-rpt-aqua/10 rounded-xl p-8 border-2 border-rpt-purple/40 shadow-[0_0_30px_rgba(138,43,226,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10 text-center">
            <p className="text-2xl text-white leading-relaxed font-semibold">
              The <span className="font-bold text-rpt-teal drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">Rocket Pool Tour (RPT)</span> is a new and dynamic professional billiards tour built around the fast-paced, all-offense <span className="font-bold text-rpt-purple drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">Rocket Run-Out©</span> format.
            </p>
          </div>
        </div>

        {/* Season One Overview Title */}
        <div className="text-center">
          <h3 className="font-heading font-bold text-3xl text-rpt-teal drop-shadow-[0_0_10px_rgba(0,166,166,0.6)]">Season One Overview</h3>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 15 Tour Stops */}
          <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-teal/20 to-rpt-teal/10 rounded-xl p-6 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-5xl font-heading font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(0,166,166,0.8)]">
                15
              </div>
              <p className="text-xl font-bold text-rpt-teal mb-1">Tour Stops</p>
              <p className="text-gray-200">across the United States</p>
            </div>
          </div>

          {/* 15 Consecutive Weeks */}
          <div className="bg-gradient-to-br from-rpt-purple/30 via-rpt-purple/20 to-rpt-purple/10 rounded-xl p-6 border-2 border-rpt-purple/40 shadow-[0_0_30px_rgba(138,43,226,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-5xl font-heading font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">
                15
              </div>
              <p className="text-xl font-bold text-rpt-purple mb-1">Consecutive Weeks</p>
              <p className="text-gray-200">of competition</p>
            </div>
          </div>

          {/* $100K Prize Fund */}
          <div className="bg-gradient-to-br from-rpt-aqua/30 via-rpt-aqua/20 to-rpt-aqua/10 rounded-xl p-6 border-2 border-rpt-aqua/40 shadow-[0_0_30px_rgba(0,191,255,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-5xl font-heading font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(0,191,255,0.8)]">
                $100K
              </div>
              <p className="text-xl font-bold text-rpt-aqua mb-1">Minimum Prize Fund</p>
              <p className="text-gray-200">at every tour stop</p>
            </div>
          </div>

          {/* Championship */}
          <div className="bg-gradient-to-br from-rpt-yellow/30 via-rpt-yellow/20 to-rpt-yellow/10 rounded-xl p-6 border-2 border-rpt-yellow/40 shadow-[0_0_30px_rgba(255,215,0,0.2)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-4xl font-heading font-bold text-white mb-2 drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]">
                Champion
              </div>
              <p className="text-xl font-bold text-rpt-yellow mb-1">Season-Long Points Race</p>
              <p className="text-gray-200">Crowned at the final event</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'THE TOUR',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          The Tour
        </h2>

        {/* Single large card with all info */}
        <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-10 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-8">

            {/* Launch */}
            <div className="text-center pb-6 border-b border-white/20">
              <p className="text-sm text-gray-300 mb-2 uppercase tracking-wide">Projected Launch</p>
              <p className="text-3xl font-heading font-bold text-white">Q2 of <span className="text-rpt-yellow">2026</span></p>
            </div>

            {/* Key Facts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-white mb-2">40</p>
                <p className="text-gray-200">Professional Players</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-white mb-2">15</p>
                <p className="text-gray-200">Tour Stops / Weeks</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-heading font-bold text-white mb-2">$100K</p>
                <p className="text-gray-200">Player Salary</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 pt-6">
              <p className="text-lg text-white leading-relaxed">
                <span className="font-bold text-rpt-teal">40 professional players</span> compete across <span className="font-bold">15 consecutive weeks</span> at tour stops finalized based on <span className="font-bold">geographic data</span> identifying the strongest U.S. fan bases.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Points accumulated throughout the season determine the <span className="font-bold text-rpt-purple">Rocket Pool Tour Champion</span>, crowned at the final event.
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Coverage Visualization */}
        <div className="mt-8">
          <h3 className="text-center text-xl font-heading font-bold text-rpt-teal mb-6">Nationwide Tour Coverage</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-rpt-gray-800/50 rounded-lg border border-rpt-teal/20">
              <div className="w-3 h-3 bg-rpt-teal rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(0,166,166,0.8)]"></div>
              <p className="text-sm text-gray-300 font-semibold">West Coast</p>
            </div>
            <div className="text-center p-4 bg-rpt-gray-800/50 rounded-lg border border-rpt-purple/20">
              <div className="w-3 h-3 bg-rpt-purple rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(138,43,226,0.8)]"></div>
              <p className="text-sm text-gray-300 font-semibold">Southwest</p>
            </div>
            <div className="text-center p-4 bg-rpt-gray-800/50 rounded-lg border border-rpt-aqua/20">
              <div className="w-3 h-3 bg-rpt-aqua rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(0,191,255,0.8)]"></div>
              <p className="text-sm text-gray-300 font-semibold">Midwest</p>
            </div>
            <div className="text-center p-4 bg-rpt-gray-800/50 rounded-lg border border-rpt-teal/20">
              <div className="w-3 h-3 bg-rpt-teal rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(0,166,166,0.8)]"></div>
              <p className="text-sm text-gray-300 font-semibold">Southeast</p>
            </div>
            <div className="text-center p-4 bg-rpt-gray-800/50 rounded-lg border border-rpt-purple/20">
              <div className="w-3 h-3 bg-rpt-purple rounded-full mx-auto mb-2 shadow-[0_0_10px_rgba(138,43,226,0.8)]"></div>
              <p className="text-sm text-gray-300 font-semibold">Northeast</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'WHAT THE RPT OFFERS',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          What the RPT Offers
        </h2>

        <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-10 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-8">

            {/* A New Pool Experience */}
            <div className="pb-8 border-b border-white/20">
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">A New Pool Experience</h3>
              <p className="text-white leading-relaxed text-lg">
                A <span className="font-bold text-rpt-teal">fresh, fast-paced, offense‑driven</span> pool format powered by Rocket Run-Out©. Designed to be <span className="font-bold">family-friendly</span>, visually engaging, and <span className="font-bold">production-heavy</span>—bringing a presentation style similar to the PGA or NBA.
              </p>
            </div>

            {/* Casino & Hospitality Partnerships */}
            <div className="pb-8 border-b border-white/20">
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">Casino & Hospitality Partnerships</h3>
              <p className="text-white leading-relaxed text-lg">
                Robust partnership opportunities with <span className="font-bold text-rpt-purple">casinos, sports lounges, bars, and billiard halls</span>—natural environments for fans interested in sports betting, viewership, and on‑site activations.
              </p>
            </div>

            {/* Broadcast & Media Reach */}
            <div>
              <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-aqua">Broadcast & Media Reach</h3>
              <p className="text-white leading-relaxed text-lg mb-3">
                Access to <span className="font-bold text-rpt-aqua">125 million+ U.S. TV households</span>, with additional global broadcast distribution through partners such as beIN Sports, SKY, FOX, and CBS Sports. The Tour will also feature strong digital and social media extensions to engage fans worldwide.
              </p>
              <p className="text-sm text-gray-300 italic">Production budgets available upon request.</p>
            </div>
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
    content: <AdvantagesSlide />,
  },
  {
    id: 9,
    title: 'PARTNERSHIP OPPORTUNITY',
    content: (
      <div className="space-y-8">
        <h2 className="font-heading font-bold text-5xl mb-8 bg-gradient-to-r from-rpt-teal via-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
          Partnership Opportunity
        </h2>

        <div className="bg-gradient-to-br from-rpt-teal/30 via-rpt-purple/20 to-rpt-aqua/10 rounded-xl p-10 border-2 border-rpt-teal/40 shadow-[0_0_30px_rgba(0,166,166,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10 space-y-6">
            <p className="text-white leading-relaxed text-lg">
              Rocket Pool Tour, LLC would like to offer NVIDIA a Partnership opportunity as we launch the <span className="font-bold text-rpt-aqua">Rocket Pool Tour©</span> as a professional sports league. This initiative aims to create a competitive, sustainable ecosystem for Professional Players, featuring tournaments across the U.S. each year.
            </p>

            <p className="text-white leading-relaxed text-lg">
              The tour will showcase a <span className="font-bold text-rpt-aqua">dynamic, entertaining, and unique version of pool</span>, branded as the "Rocket Run Out©". The non-stop action of the "Rocket Run Out©" will become a popular choice for viewers and sports fans.
            </p>

            <p className="text-white leading-relaxed text-lg">
              This will also be the <span className="font-bold text-rpt-aqua">first time in professional pool that we are able to keep accurate statistics</span>, putting pool on par with every other major sport. In an all offense format, players will now compete to achieve the highest scores and personal bests, with opportunities for dramatic comebacks in each game's final moments.
            </p>

            <p className="text-white leading-relaxed text-lg">
              The Rocket Pool Tour© tournaments will broadcast on <span className="font-bold text-rpt-aqua">mainstream network television and live-streamed</span>, reaching audiences in the US and International markets. Social media will bolster the live tournament events, optimizing branding and advertising opportunities.
            </p>

            <p className="text-xl font-bold text-center text-rpt-yellow pt-4">
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
        <div ref={contentRef} className="max-w-6xl w-full h-full overflow-y-auto pb-24 pt-16 px-8">
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
