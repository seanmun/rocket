'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Download, Mail, Phone, FileText, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

export default function MediaPage() {
  const router = useRouter();
  const [selectedPitch, setSelectedPitch] = useState<string | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Swipe to go back to home
  useSwipeGesture({
    onSwipeRight: () => {
      if (selectedPitch) {
        // Close modal if open
        setSelectedPitch(null);
        setPassword('');
        setError('');
      } else {
        // Go back in browser history
        router.back();
      }
    },
  });

  const handlePitchAccess = (pitchId: string) => {
    setSelectedPitch(pitchId);
    setPassword('');
    setError('');
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Server-side password validation via API route
      const response = await fetch('/api/verify-pitch-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pitchId: selectedPitch,
          password: password,
        }),
      });

      const data = await response.json();

      if (data.valid) {
        router.push(`/media/${selectedPitch}`);
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                Media Relations
              </h1>
              <p className="text-xl text-gray-300">
                Press kits, assets, and partnership materials for the Rocket Pool Tour
              </p>
            </div>
          </div>
        </section>

        {/* Download Assets Section */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-8 text-center">Download Assets</h2>

              <div className="bg-rpt-gray-800 rounded-lg p-12 border border-rpt-gray-700 text-center">
                <Download className="w-16 h-16 text-rpt-teal mb-4 mx-auto opacity-50" />
                <h3 className="font-heading font-bold text-2xl mb-4">Coming Soon</h3>
                <p className="text-gray-300 mb-6">
                  Press kits, logos, and media assets will be available for download here.
                </p>
                <p className="text-sm text-gray-400">
                  Available Q1 2026
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pitch Decks Section */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-8 text-center">Partnership Pitch Decks</h2>
              <p className="text-center text-gray-300 mb-12">
                Confidential partnership materials (password protected)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => handlePitchAccess('pitch-1')}
                  className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all text-left group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-12 h-12 text-rpt-teal" />
                    <Lock className="w-6 h-6 text-gray-500 group-hover:text-rpt-teal transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">Pitch Deck 1</h3>
                  <p className="text-gray-400 text-sm">
                    Primary partnership presentation
                  </p>
                </button>

                <button
                  onClick={() => handlePitchAccess('pitch-2')}
                  className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-purple transition-all text-left group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="w-12 h-12 text-rpt-purple" />
                    <Lock className="w-6 h-6 text-gray-500 group-hover:text-rpt-purple transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-2">Pitch Deck 2</h3>
                  <p className="text-gray-400 text-sm">
                    Secondary partnership presentation
                  </p>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Password Modal */}
        {selectedPitch && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
            <div className="bg-rpt-gray-900 rounded-xl border-2 border-rpt-purple/40 p-8 max-w-md w-full">
              <h3 className="font-heading font-bold text-2xl mb-4">Enter Password</h3>
              <p className="text-gray-300 mb-6">
                This content is password protected. Please enter the password to continue.
              </p>

              <form onSubmit={handlePasswordSubmit}>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-rpt-gray-800 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal mb-4"
                  autoFocus
                />

                {error && (
                  <p className="text-red-400 text-sm mb-4">{error}</p>
                )}

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPitch(null);
                      setPassword('');
                      setError('');
                    }}
                    className="flex-1 px-6 py-3 bg-rpt-gray-700 hover:bg-rpt-gray-600 text-white font-heading font-bold rounded-lg transition-all"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all"
                  >
                    Access
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-8 text-center">Media Inquiries</h2>

              <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Organization *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal"
                        placeholder="Your organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <Mail className="w-8 h-8 text-rpt-teal mb-3" />
                  <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:media@rocketpooltour.com" className="text-gray-300 hover:text-rpt-teal transition-colors">
                    media@rocketpooltour.com
                  </a>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <Phone className="w-8 h-8 text-rpt-purple mb-3" />
                  <h3 className="font-heading font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-300">
                    Available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
