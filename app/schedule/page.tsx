import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { events } from '@/data/events';
import { Calendar, MapPin, DollarSign, Trophy } from 'lucide-react';

export const metadata = {
  title: 'Tour Schedule | Rocket Pool Tour',
  description: '15 weeks of elite competition across premier venues in the United States. View the complete Season One schedule for the Rocket Pool Tour.',
};

export default function SchedulePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-rpt-gray-800 border border-rpt-teal/30 mb-6">
                <span className="text-rpt-teal text-sm font-medium">Season One • 2026</span>
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                Tour Schedule
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                15 consecutive weeks of world-class competition
              </p>
              <p className="text-lg text-gray-400">
                15 tour stops • $1.5M+ total prizes • Premier venues across the USA
              </p>
            </div>
          </div>
        </section>

        {/* Season Overview */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-teal/30 text-center">
                  <Calendar className="w-10 h-10 text-rpt-teal mb-3 mx-auto" />
                  <div className="text-3xl font-heading font-bold text-rpt-teal mb-2">15</div>
                  <p className="text-gray-400">Weeks of Competition</p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-purple/30 text-center">
                  <DollarSign className="w-10 h-10 text-rpt-purple mb-3 mx-auto" />
                  <div className="text-3xl font-heading font-bold text-rpt-purple mb-2">$100K</div>
                  <p className="text-gray-400">Minimum Prize Pool</p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-aqua/30 text-center">
                  <Trophy className="w-10 h-10 text-rpt-aqua mb-3 mx-auto" />
                  <div className="text-3xl font-heading font-bold text-rpt-aqua mb-2">40</div>
                  <p className="text-gray-400">Elite Players</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">Season One Events</h2>

              <div className="space-y-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 hover:border-rpt-teal transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="px-3 py-1 rounded-full bg-rpt-teal/20 border border-rpt-teal/30">
                            <span className="text-rpt-teal text-sm font-bold">WEEK {event.week}</span>
                          </div>
                          {event.week === 15 && (
                            <div className="px-3 py-1 rounded-full bg-rpt-purple/20 border border-rpt-purple/30">
                              <span className="text-rpt-purple text-sm font-bold">CHAMPIONSHIP</span>
                            </div>
                          )}
                        </div>
                        <h3 className="font-heading font-bold text-2xl mb-2 group-hover:text-rpt-teal transition-colors">
                          {event.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-rpt-teal" />
                            <span className="text-sm">{event.location}</span>
                          </div>
                          <span className="hidden sm:block text-gray-600">•</span>
                          <span className="text-sm">{event.city}, {event.state}</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">Prize Pool</div>
                          <div className="font-heading font-bold text-xl text-rpt-purple">
                            ${event.prizePool.toLocaleString()}
                          </div>
                        </div>
                        <div className="text-right sm:min-w-[140px]">
                          <div className="text-sm text-gray-400 mb-1">Date</div>
                          <div className="font-semibold">
                            {new Date(event.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Championship Finale Highlight */}
        <section className="py-16 bg-gradient-to-b from-rpt-gray-900 to-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rpt-purple/10 to-rpt-teal/10 rounded-lg p-8 border border-rpt-purple/30">
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-rpt-purple mb-4 mx-auto" />
                  <h2 className="font-heading font-bold text-3xl mb-4">Championship Finale</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    The season culminates at the Wynn Las Vegas with a <span className="text-rpt-purple font-bold">$250,000 prize pool</span> as the top players compete for the inaugural Rocket Pool Tour Championship title.
                  </p>
                  <p className="text-gray-400">
                    Points accumulated throughout the season determine seeding and the ultimate Tour Champion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated CTA */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get notifications about ticket sales, broadcast schedules, and exclusive fan experiences.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-rpt-teal hover:bg-rpt-teal-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-teal"
            >
              Join Our Mailing List
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
