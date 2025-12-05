import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { team } from '@/data/team';
import { Users, Target, Lightbulb, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About | Rocket Pool Tour',
  description: 'Learn about the Rocket Pool Tour, our mission, and the team behind the revolution in professional billiards.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                About the Rocket Pool Tour
              </h1>
              <p className="text-xl text-gray-300">
                A next-generation professional billiards league built on innovation, excellence, and a passion for the game.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal/30">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-rpt-teal mr-3" />
                  <h2 className="font-heading font-bold text-3xl">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  The Rocket Pool Tour exists to engage, inspire, and positively impact fans, partners, and communities worldwide by showcasing the greatest talents in professional pool. The Tour promotes the sport by sanctioning tournaments and supporting its members' professional growth and interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Story */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-8 text-center">The Story</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  In 2008, World Champion "Rocket" Rodney Morris met Ed "EJ" Glode at the first Wyoming Open Pool Tournament, where Ed personally invited Rodney to compete. The two became fast friends, bonded by their passion for pool and their shared belief that the game—and the way it's traditionally played—needed to evolve.
                </p>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Together, with more than 70 years of combined experience, they created the innovative all-offense Rocket Run-Out© game format. Ed's business expertise and numerical intuition, combined with Rodney's Hall of Fame playing career, formed the perfect foundation for this vision.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  After years of testing and refinement, they are now ready to elevate the sport of billiards through the official Rocket Pool Tour©—a professional league that brings together elite competition, cutting-edge statistics, and modern sports presentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes RPT Different */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">What Makes RPT Different</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <Lightbulb className="w-10 h-10 text-rpt-teal mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Revolutionary Format</h3>
                  <p className="text-gray-300">
                    The Rocket Run-Out© format is a proprietary, IP-owned game that combines the best of 8-ball and 9-ball into a fast-paced, offense-driven experience that keeps fans engaged from start to finish.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <TrendingUp className="w-10 h-10 text-rpt-purple mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">True Statistics</h3>
                  <p className="text-gray-300">
                    For the first time in professional pool history, the RPT enables precise, real-time statistical tracking. This unlocks meaningful analytics, fan engagement comparable to major sports, and unprecedented betting opportunities.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <Users className="w-10 h-10 text-rpt-aqua mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">World-Class Players</h3>
                  <p className="text-gray-300">
                    40 elite professionals competing for Tour Cards worth $100,000 each, with minimum $100,000 prize pools at every tour stop. This is professional pool at its highest level.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700">
                  <Target className="w-10 h-10 text-rpt-yellow mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Modern Presentation</h3>
                  <p className="text-gray-300">
                    Professional broadcast production, digital-first fan engagement, and a premium sports league identity inspired by the PGA, UFC, and Formula 1.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">The Team</h2>

              <div className="space-y-8">
                {team.map((member) => {
                  const imagePath = member.id === 'rodney-morris'
                    ? '/images/Rodney-sq.png'
                    : '/images/Ed-sq.png';

                  return (
                    <div
                      key={member.id}
                      className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <Image
                            src={imagePath}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading font-bold text-2xl mb-1">{member.name}</h3>
                          <p className="text-rpt-teal font-semibold mb-4">{member.title}</p>
                          <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-4xl mb-6">Vision for the Future</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                The Rocket Pool Tour is more than a league—it's a movement to modernize and elevate professional billiards. We're building a sustainable ecosystem that supports players, engages fans, attracts partners, and brings pool into the modern sports era.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This is just the beginning. Welcome to the future of competitive pool.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
