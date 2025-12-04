import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { team } from '@/data/team';
import { Mail, Phone, MapPin, Send, Users } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Rocket Pool Tour',
  description: 'Get in touch with the Rocket Pool Tour team. Contact our founders for partnership opportunities, media inquiries, and more.',
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-heading font-bold text-5xl md:text-6xl mb-6 bg-gradient-to-r from-rpt-teal to-rpt-purple bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300">
                We'd love to hear from you about partnerships, media inquiries, or any questions about the Rocket Pool Tour.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 text-center">
                  <MapPin className="w-10 h-10 text-rpt-teal mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-300">Los Angeles, CA</p>
                  <p className="text-gray-400 text-sm">USA</p>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 text-center">
                  <Phone className="w-10 h-10 text-rpt-purple mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+16267040713" className="text-gray-300 hover:text-rpt-purple transition-colors">
                    +1 (626) 704-0713
                  </a>
                </div>

                <div className="bg-rpt-gray-800 rounded-lg p-6 border border-rpt-gray-700 text-center">
                  <Mail className="w-10 h-10 text-rpt-aqua mb-4 mx-auto" />
                  <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:info@rocketpooltour.com" className="text-gray-300 hover:text-rpt-aqua transition-colors">
                    info@rocketpooltour.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <Users className="w-12 h-12 text-rpt-teal mb-4 mx-auto" />
                <h2 className="font-heading font-bold text-4xl mb-4">
                  Meet the Founders
                </h2>
                <p className="text-lg text-gray-300">
                  The visionaries behind the Rocket Pool Tour
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700 hover:border-rpt-teal transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-heading font-bold text-xl">
                          {member.name.split(' ')[0][0]}{member.name.split(' ')[member.name.split(' ').length - 1][0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-2xl mb-1">{member.name}</h3>
                        <p className="text-rpt-teal text-sm">{member.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading font-bold text-4xl mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-300">
                  Interested in partnerships, media coverage, or have questions? Fill out the form below.
                </p>
              </div>

              <form className="bg-rpt-gray-800 rounded-lg p-8 border border-rpt-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white focus:outline-none focus:border-rpt-teal transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="exhibitor">Exhibitor Space</option>
                    <option value="media">Media & Press</option>
                    <option value="player">Player Information</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-rpt-gray-900 border border-rpt-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-rpt-teal transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                  <p className="text-sm text-gray-400 mt-4">
                    We'll get back to you within 24-48 hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rpt-teal/10 to-rpt-purple/10 rounded-lg p-8 border border-rpt-teal/30">
                <h3 className="font-heading font-bold text-2xl mb-4 text-center">
                  Business Inquiries
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  For partnership opportunities, sponsorships, or exhibitor space inquiries, please reach out directly:
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                  <a
                    href="mailto:info@rocketpooltour.com"
                    className="text-rpt-teal hover:text-rpt-teal-light transition-colors font-semibold"
                  >
                    info@rocketpooltour.com
                  </a>
                  <span className="hidden sm:block text-gray-600">•</span>
                  <a
                    href="tel:+16267040713"
                    className="text-rpt-purple hover:text-rpt-purple-light transition-colors font-semibold"
                  >
                    +1 (626) 704-0713
                  </a>
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
