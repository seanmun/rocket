import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Zap, Trophy, BarChart3, Target, Eye, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Rocket Run-Out Format | Rocket Pool Tour',
  description: 'Learn about the revolutionary Rocket Run-Out© format - a fast-paced, offense-driven game designed for modern professional pool with precise statistical tracking.',
};

export default function FormatPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-rpt-gray-800 border border-rpt-purple/30 mb-6">
                <span className="text-rpt-purple text-sm font-medium">Proprietary Format</span>
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-purple to-rpt-aqua bg-clip-text text-transparent">
                Rocket Run-Out©
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                A revolutionary pool format created by Rodney "Rocket" Morris
              </p>
              <p className="text-lg text-gray-400">
                Fast-paced • Offense-driven • Statistically precise • Fan-friendly
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-purple/30">
                <h2 className="font-heading font-bold text-3xl mb-6">Overview</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Rocket Run-Out© is part of the <span className="text-rpt-purple font-semibold">Saratoga series</span>—a revolutionary pool format created by World Champion Rodney Morris designed to maximize offensive opportunities, create dramatic scoring moments, and enable accurate statistical tracking.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  This format has been tested and refined over years of development to create the perfect balance between skill, strategy, and entertainment value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">How It Works</h2>

              <div className="space-y-6">
                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rpt-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-rpt-teal font-heading font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">The Rack</h3>
                      <p className="text-gray-300 mb-2">
                        Rack <span className="text-rpt-teal font-semibold">5 solids, 5 stripes, and the black ball (8-ball)</span>.
                      </p>
                      <ul className="text-gray-400 text-sm space-y-1 ml-4">
                        <li>• The lowest stripe or lowest solid must be on the top and bottom (doesn't matter which)</li>
                        <li>• One solid and one stripe must be in the corners</li>
                        <li>• The black ball (8-ball) is racked in the middle</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rpt-purple/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-rpt-purple font-heading font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">The Break</h3>
                      <p className="text-gray-300 mb-2">
                        <span className="text-rpt-purple font-semibold">Break from anywhere behind the headstring</span>. The table is always open after the break, no matter what balls are made.
                      </p>
                      <p className="text-gray-400 text-sm">
                        Special rule: If the 8-ball is made on the break, you have the option to re-break or spot it and shoot from there. If it's the only ball made on the break and you elect to spot it, it counts as a pocketed ball (eligible for 200pts if you run out).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-aqua transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rpt-aqua/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-rpt-aqua font-heading font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Choose Your Suit & Run Out</h3>
                      <p className="text-gray-300 mb-2">
                        After the break, <span className="text-rpt-aqua font-semibold">choose either solids or stripes and run them out</span>, making the black ball (8-ball) last.
                      </p>
                      <p className="text-gray-400 text-sm">
                        You can shoot from where the balls lay for higher points, or take ball in hand at any time (but this affects your scoring).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-yellow transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rpt-yellow/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-rpt-yellow font-heading font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">If You Miss</h3>
                      <p className="text-gray-300 mb-2">
                        If you miss at any time, you <span className="text-rpt-yellow font-semibold">get 10 points per ball pocketed</span> in that game (whichever suit is highest).
                      </p>
                      <p className="text-gray-400 text-sm">
                        Incomplete runs score whatever balls were pocketed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-rpt-teal/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-rpt-teal font-heading font-bold text-xl">⚠</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-2">Scratch on the Break</h3>
                      <p className="text-gray-300 mb-2">
                        If you scratch on the break, <span className="text-rpt-teal font-semibold">it's not loss of turn</span>—you get ball in hand but are only eligible for a <span className="text-rpt-yellow font-semibold">Salvage (up to 60 points max)</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scoring System */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">Scoring System</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-rpt-teal/10 to-rpt-teal/5 rounded-lg p-8 border-2 border-rpt-teal">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-heading font-bold text-rpt-teal mb-2">200</div>
                    <h3 className="font-heading font-bold text-xl">Break and Run</h3>
                  </div>
                  <p className="text-gray-300 text-center">
                    Make a ball on the break, shoot from where the balls lay, and run out (choosing either solids or stripes, making the black last).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rpt-purple/10 to-rpt-purple/5 rounded-lg p-8 border-2 border-rpt-purple">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-heading font-bold text-rpt-purple mb-2">150</div>
                    <h3 className="font-heading font-bold text-xl">Dry Break and Run</h3>
                  </div>
                  <p className="text-gray-300 text-center">
                    Break dry (don't make a ball on the break) and run out from there.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rpt-aqua/10 to-rpt-aqua/5 rounded-lg p-8 border-2 border-rpt-aqua">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-heading font-bold text-rpt-aqua mb-2">100</div>
                    <h3 className="font-heading font-bold text-xl">Ball in Hand Run</h3>
                  </div>
                  <p className="text-gray-300 text-center">
                    Take ball in hand after the break (you always have this option) and run out.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-rpt-yellow/10 to-rpt-yellow/5 rounded-lg p-8 border-2 border-rpt-yellow">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-heading font-bold text-rpt-yellow mb-2">60</div>
                    <h3 className="font-heading font-bold text-xl">Salvage</h3>
                  </div>
                  <p className="text-gray-300 text-center">
                    Maximum points after scratching on the break (you get ball in hand but can only score up to 60pts).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gray-500/10 to-gray-500/5 rounded-lg p-8 border-2 border-gray-500 md:col-span-2">
                  <div className="text-center mb-4">
                    <div className="text-6xl font-heading font-bold text-gray-300 mb-2">0-50</div>
                    <h3 className="font-heading font-bold text-xl">Incomplete Run</h3>
                  </div>
                  <p className="text-gray-300 text-center">
                    If you miss before completing your run, score 10 points per ball pocketed (whichever suit is highest).
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                <p className="text-center text-gray-300">
                  <strong className="text-rpt-teal">Every shot matters.</strong> The scoring system rewards aggressive play while creating dramatic tension and exciting comebacks throughout each match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It's Different */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">Why It's Different</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Zap className="w-12 h-12 text-rpt-teal mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-3">Fast-Paced Action</h3>
                  <p className="text-gray-400 text-sm">
                    Continuous offense, minimal defensive play, and constant scoring opportunities keep fans engaged.
                  </p>
                </div>

                <div className="text-center">
                  <Eye className="w-12 h-12 text-rpt-purple mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-3">Fan-Friendly</h3>
                  <p className="text-gray-400 text-sm">
                    Easy to understand, exciting to watch, and perfect for both pool enthusiasts and new fans.
                  </p>
                </div>

                <div className="text-center">
                  <BarChart3 className="w-12 h-12 text-rpt-aqua mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-xl mb-3">True Statistics</h3>
                  <p className="text-gray-400 text-sm">
                    For the first time in pool history, enables precise, meaningful statistical tracking and analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Betting Compatibility */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-rpt-purple/10 to-rpt-teal/10 rounded-lg p-8 border border-rpt-purple/30">
                <div className="flex items-center mb-6">
                  <TrendingUp className="w-8 h-8 text-rpt-purple mr-3" />
                  <h2 className="font-heading font-bold text-3xl">Perfect for Sports Betting</h2>
                </div>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  The Rocket Run-Out© format creates <span className="text-rpt-purple font-semibold">unprecedented betting possibilities</span> through its precise scoring system and statistical tracking capabilities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  From break-and-run props to player scoring averages, comeback scenarios to high-score predictions—the format opens new opportunities for fan engagement and sports betting integration with partners like Railbirds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Trophy className="w-16 h-16 text-rpt-teal mb-6 mx-auto" />
              <h2 className="font-heading font-bold text-4xl mb-6">
                Experience the Future of Pool
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                The Rocket Run-Out© format is the foundation of the Rocket Pool Tour and represents a new era in professional billiards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/schedule"
                  className="px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                >
                  View Season Schedule
                </a>
                <a
                  href="/players"
                  className="px-8 py-4 bg-rpt-blue-dark hover:bg-rpt-blue text-white font-heading font-bold rounded-lg transition-all"
                >
                  Meet the Players
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
