import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Building2, Users, TrendingUp, Globe, Handshake, Mail, Phone, FileText } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Partners & Exhibitors | Rocket Pool Tour',
  description: 'Partner with the Rocket Pool Tour. Exhibitor opportunities, sponsorships, and brand partnerships for the future of professional billiards.',
};

export default function PartnersPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 rounded-full bg-rpt-gray-800 border border-rpt-purple/30 mb-6">
                <span className="text-rpt-purple text-sm font-medium">Partnership Opportunities</span>
              </div>
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                Become an Exhibitor
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                Partner with the future of professional billiards
              </p>
              <p className="text-lg text-gray-400">
                Join us in revolutionizing competitive pool with unprecedented exposure and engagement opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Exhibitor Highlight */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rpt-yellow/10 to-transparent rounded-xl p-8 md:p-12 border-2 border-rpt-yellow/30">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-rpt-yellow/20 border-4 border-rpt-yellow/40 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-heading font-bold text-rpt-yellow">30</div>
                        <div className="text-xs text-gray-300 mt-1">Spaces</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-block px-4 py-2 rounded-full bg-rpt-yellow/20 border border-rpt-yellow/30 mb-4">
                      <span className="text-rpt-yellow text-sm font-bold">LIMITED AVAILABILITY</span>
                    </div>
                    <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                      30 Exhibitor Spaces • 10' × 10'
                    </h2>
                    <p className="text-lg text-gray-300 mb-4">
                      Exhibition space for the Rocket Pool Tour trade shows is limited to just <span className="text-rpt-yellow font-semibold">thirty 10' × 10' spaces</span> for each show—so act now to secure your spot!
                    </p>
                    <p className="text-gray-400 mb-6">
                      Reservations will be accepted on a <strong>first-come, first-served basis</strong>. Don't miss this chance to showcase your brand and products at these premier events.
                    </p>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-rpt-yellow/20 rounded-lg border border-rpt-yellow/30">
                      <span className="text-2xl">🎯</span>
                      <div className="text-left">
                        <div className="text-sm text-gray-400">Early Bird Registration</div>
                        <div className="font-heading font-bold text-xl text-rpt-yellow">Save 20%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">Why Partner with RPT?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <Globe className="w-12 h-12 text-rpt-teal mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Massive Reach</h3>
                  <p className="text-gray-300">
                    125 million+ U.S. TV households, international broadcast distribution, and engaged digital audiences across all platforms.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <Users className="w-12 h-12 text-rpt-purple mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Engaged Audience</h3>
                  <p className="text-gray-300">
                    Sports enthusiasts ages 21-40 with high disposable income and strong interest in competition, entertainment, and gaming.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-aqua transition-all">
                  <TrendingUp className="w-12 h-12 text-rpt-aqua mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Growing Platform</h3>
                  <p className="text-gray-300">
                    Ground-floor opportunity with a revolutionary new league format designed for modern sports media and betting integration.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-yellow transition-all">
                  <Building2 className="w-12 h-12 text-rpt-yellow mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Premium Venues</h3>
                  <p className="text-gray-300">
                    15 tour stops at premier casinos and entertainment destinations across the United States.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all">
                  <Handshake className="w-12 h-12 text-rpt-teal mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Brand Integration</h3>
                  <p className="text-gray-300">
                    Comprehensive branding opportunities across broadcasts, digital platforms, live events, and promotional materials.
                  </p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-purple transition-all">
                  <FileText className="w-12 h-12 text-rpt-purple mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-3">Category Exclusivity</h3>
                  <p className="text-gray-300">
                    Limited partnerships available with category exclusivity for early partners in key industries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">Partnership Opportunities</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Title Partner */}
                <div className="bg-gradient-to-br from-rpt-purple/10 to-transparent rounded-lg p-8 border-2 border-rpt-purple relative overflow-hidden">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rpt-purple/20 border border-rpt-purple/30">
                    <span className="text-rpt-purple text-xs font-bold">PREMIUM</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-purple">Title Partner</h3>
                  <p className="text-gray-300 mb-6">
                    Become the official title sponsor with maximum brand exposure and category exclusivity.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-purple mt-1">✓</span>
                      <span>Title naming rights for the tour</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-purple mt-1">✓</span>
                      <span>Logo on all marketing materials</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-purple mt-1">✓</span>
                      <span>Exclusive broadcast integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-purple mt-1">✓</span>
                      <span>VIP hospitality at all events</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-purple mt-1">✓</span>
                      <span>Digital platform prominence</span>
                    </li>
                  </ul>
                </div>

                {/* Official Partner */}
                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-teal">
                  <h3 className="font-heading font-bold text-2xl mb-4 text-rpt-teal">Official Partner</h3>
                  <p className="text-gray-300 mb-6">
                    High-visibility partnership with category exclusivity and comprehensive brand integration.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-teal mt-1">✓</span>
                      <span>"Official [Category] of RPT"</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-teal mt-1">✓</span>
                      <span>Broadcast logo placement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-teal mt-1">✓</span>
                      <span>On-site branding at events</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-teal mt-1">✓</span>
                      <span>Digital content integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-rpt-teal mt-1">✓</span>
                      <span>Social media promotion</span>
                    </li>
                  </ul>
                </div>

                {/* Exhibitor */}
                <div className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 relative">
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-rpt-yellow/20 border border-rpt-yellow/30">
                    <span className="text-rpt-yellow text-xs font-bold">SAVE 20%</span>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-4">Exhibitor Space</h3>
                  <p className="text-gray-300 mb-6">
                    30 exclusive 10' x 10' spaces available per show. First-come, first-served.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>10' x 10' exhibition space</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>Product demonstrations</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>Direct fan engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>Event program listing</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gray-400 mt-1">✓</span>
                      <span>Website recognition</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-rpt-yellow font-semibold">
                      <span className="text-rpt-yellow mt-1">★</span>
                      <span>20% early bird discount</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* By the Numbers */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading font-bold text-4xl mb-12 text-center">By the Numbers</h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-rpt-purple mb-2">
                    125M+
                  </div>
                  <div className="text-sm text-gray-400">U.S. TV Households</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-rpt-teal mb-2">
                    15
                  </div>
                  <div className="text-sm text-gray-400">Weekly Events</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-rpt-aqua mb-2">
                    40
                  </div>
                  <div className="text-sm text-gray-400">Elite Players</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-rpt-yellow mb-2">
                    $1.5M+
                  </div>
                  <div className="text-sm text-gray-400">Total Prize Money</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rpt-purple/10 to-rpt-teal/10 rounded-lg p-12 border border-rpt-purple/30 text-center">
                <h2 className="font-heading font-bold text-4xl mb-6">
                  Ready to Partner?
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  Contact our partnership team to discuss exhibitor opportunities, sponsorships, and custom integration packages for the Rocket Pool Tour.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                  >
                    <Mail size={20} />
                    Contact Partnership Team
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-gray-400">
                  <div className="flex items-center justify-center gap-2">
                    <Mail size={16} className="text-rpt-teal" />
                    <span>partners@rocketpooltour.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone size={16} className="text-rpt-teal" />
                    <span>Available upon request</span>
                  </div>
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
