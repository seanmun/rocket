import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { news } from '@/data/news';
import { Calendar, User, Tag } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'News & Media | Rocket Pool Tour',
  description: 'Latest news, announcements, and updates from the Rocket Pool Tour. Stay informed about league developments, player news, and upcoming events.',
};

export default function NewsPage() {
  // Sort news by date (most recent first)
  const sortedNews = [...news].sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'announcement':
        return 'text-rpt-purple bg-rpt-purple/20 border-rpt-purple/30';
      case 'tech':
        return 'text-rpt-teal bg-rpt-teal/20 border-rpt-teal/30';
      case 'league':
        return 'text-rpt-aqua bg-rpt-aqua/20 border-rpt-aqua/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
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
                News & Media
              </h1>
              <p className="text-xl text-gray-300">
                The latest updates from the Rocket Pool Tour
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedNews.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.slug}`}
                    className="bg-rpt-gray-800 rounded-lg border border-rpt-gray-700 hover:border-rpt-teal transition-all group overflow-hidden"
                  >
                    {/* Category Badge */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-bold uppercase ${getCategoryColor(article.category)}`}>
                          <Tag size={12} />
                          {article.category}
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-xl mb-3 group-hover:text-rpt-teal transition-colors line-clamp-2">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 pt-4 border-t border-rpt-gray-700">
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          <span>
                            {new Date(article.publishedAt).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Inquiries CTA */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-rpt-purple/10 to-rpt-teal/10 rounded-lg p-12 border border-rpt-purple/30 text-center">
                <h2 className="font-heading font-bold text-4xl mb-6">
                  Media Inquiries
                </h2>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                  For press releases, media kits, interview requests, or other media inquiries, please contact our media team.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
                >
                  Contact Media Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
