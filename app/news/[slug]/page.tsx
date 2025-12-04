import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { getArticleBySlug, news } from '@/data/news';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return news.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Rocket Pool Tour',
    };
  }

  return {
    title: `${article.title} | Rocket Pool Tour`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

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
        {/* Article Header */}
        <section className="py-16 bg-gradient-to-b from-rpt-black to-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Back Link */}
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-rpt-teal transition-colors mb-8"
              >
                <ArrowLeft size={16} />
                Back to News
              </Link>

              {/* Category */}
              <div className="mb-6">
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full border text-xs font-bold uppercase ${getCategoryColor(article.category)}`}>
                  <Tag size={12} />
                  {article.category}
                </div>
              </div>

              {/* Title */}
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                {article.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-300 mb-8">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-6 text-sm text-gray-400 pb-8 border-b border-rpt-gray-700">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-rpt-teal" />
                  <span>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} className="text-rpt-teal" />
                  <span>{article.author}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16 bg-rpt-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-invert prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => {
                  // Check if paragraph is a list
                  if (paragraph.startsWith('-')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ul key={index} className="space-y-2 mb-6">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-300">
                            {item.replace(/^-\s*/, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Check if paragraph is a heading (contains ** bold markers)
                  if (paragraph.includes('**')) {
                    // Replace **text** with <strong>text</strong>
                    const parts = paragraph.split('**');
                    return (
                      <p key={index} className="text-gray-300 leading-relaxed mb-6">
                        {parts.map((part, i) =>
                          i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
                        )}
                      </p>
                    );
                  }

                  // Regular paragraph
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles / Back to News */}
        <section className="py-16 bg-rpt-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl mb-8">
                More News
              </h2>
              <Link
                href="/news"
                className="inline-block px-8 py-4 bg-rpt-purple hover:bg-rpt-purple-dark text-white font-heading font-bold rounded-lg transition-all hover:glow-purple"
              >
                View All News
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
