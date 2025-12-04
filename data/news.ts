import { NewsArticle } from './types';

export const news: NewsArticle[] = [
  {
    id: 'rpt-launches-website',
    title: 'Rocket Pool Tour Unveils Groundbreaking Digital Platform',
    slug: 'rpt-launches-website',
    excerpt: 'The Rocket Pool Tour takes a major step forward with the launch of its new website and digital infrastructure, positioning the league as a modern professional sports organization.',
    content: `The Rocket Pool Tour is proud to announce the launch of its official digital platform, marking a significant milestone in the evolution of professional billiards.

This state-of-the-art website represents more than just an online presence—it's the foundation of a complete league operating system. Built with modern technology and designed with fans, partners, and players in mind, the platform showcases what makes the RPT different: innovation, professionalism, and a commitment to bringing pool into the modern sports era.

The new platform features comprehensive player profiles, live statistics, tour schedules, and exclusive partner portals. It's designed to scale from a marketing site into a full stats engine and fan engagement platform as the Tour grows.

"This is about showing the world that professional pool deserves the same level of digital infrastructure as any major sport," said Rodney "Rocket" Morris, Co-Founder and Tour Commissioner. "We're building something that will change how fans experience our sport."

The platform launch comes ahead of the Tour's inaugural season, set to begin in Q2 2026.`,
    publishedAt: '2025-12-03',
    author: 'RPT Media Team',
    category: 'tech',
  },
  {
    id: 'announcing-season-one',
    title: 'Rocket Pool Tour Announces Inaugural Season for Q2 2026',
    slug: 'announcing-season-one',
    excerpt: 'The groundbreaking professional billiards league announces its first season featuring 40 elite players competing across 15 weeks for over $1.5 million in prizes.',
    content: `The Rocket Pool Tour is set to revolutionize professional pool with the announcement of its inaugural season, launching in Q2 2026.

Season One will feature 40 of the world's best players competing across 15 consecutive weeks at premier venues throughout the United States. Each tour stop will offer a minimum prize pool of $100,000, with the Championship Finale in Las Vegas featuring a $250,000 purse.

The Tour introduces the revolutionary Rocket Run-Out© format—a fast-paced, offense-driven game that combines the best elements of 8-ball and 9-ball. This innovative format creates unprecedented statistical tracking opportunities and delivers non-stop action for fans and exciting betting possibilities for partners.

"We've spent years perfecting this format," said Ed "EJ" Glode, Co-Founder. "It's time to show the world what modern professional pool can be."

Players will compete for Tour Cards worth $100,000 each, with weekly event winners and season-long points determining the first-ever Rocket Pool Tour Champion.

Full schedule and player announcements coming soon.`,
    publishedAt: '2025-11-15',
    author: 'RPT Media Team',
    category: 'announcement',
  },
  {
    id: 'rocket-runout-explained',
    title: 'Inside the Rocket Run-Out©: The Future of Competitive Pool',
    slug: 'rocket-runout-explained',
    excerpt: 'Learn about the innovative game format that\'s changing professional billiards forever.',
    content: `The Rocket Run-Out© format represents a paradigm shift in professional pool, designed from the ground up to maximize excitement, statistical precision, and fan engagement.

Created by World Champion Rodney Morris and business strategist Ed Glode, the format is part of the Saratoga series—a hybrid of 8-ball and 9-ball that creates continuous offensive opportunities and dramatic scoring possibilities.

How It Works:
- 9 balls racked in a diamond formation (1-4, 8, 9-12)
- Players select stripes or solids after the break
- Balls must be pocketed in rotation within the chosen group
- Scoring: Break and run (10 points), Ball-in-hand run (7 points), Second-suit run (5 points), or 1-4 points for balls pocketed

This creates a dynamic game where every shot matters, comebacks are always possible, and statistics tell a complete story of player performance.

"For the first time in pool history, we have a format that enables true, accurate statistics," Morris explained. "That opens doors to modern sports analytics, fan engagement, and betting opportunities that have never existed in our sport."

The format has been extensively tested and refined over multiple years, and is now ready for its professional debut in the Rocket Pool Tour.`,
    publishedAt: '2025-10-28',
    author: 'Rodney Morris',
    category: 'league',
  },
  {
    id: 'partnership-opportunities',
    title: 'RPT Opens Partnership Discussions with Major Sports Brands',
    slug: 'partnership-opportunities',
    excerpt: 'The Rocket Pool Tour is in active discussions with leading sports betting and entertainment companies for exclusive partnerships.',
    content: `The Rocket Pool Tour has begun partnership discussions with major sports betting platforms, broadcast networks, and entertainment brands as it builds toward its Q2 2026 launch.

The Tour offers unique opportunities for partners:
- Category exclusivity in a groundbreaking new professional sport
- Access to 52,800+ unique betting possibilities per season
- Broadcast exposure across 125 million+ U.S. TV households
- International distribution through beIN Sports, SKY, and other networks
- Digital and social media integration with a passionate, engaged fanbase

"We're not just looking for sponsors—we're looking for strategic partners who want to help build something revolutionary," said Ed Glode. "The Rocket Pool Tour creates opportunities that don't exist anywhere else in sports."

The Tour's proprietary Rocket Run-Out© format enables the first truly accurate statistical system in professional pool, opening unprecedented possibilities for analytics, fan engagement, and sports betting integration.

Partnership proposals and media inquiries: contact@rocketpooltour.com`,
    publishedAt: '2025-09-12',
    author: 'RPT Media Team',
    category: 'announcement',
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return news.find(a => a.slug === slug);
}

export function getArticlesByCategory(category: string): NewsArticle[] {
  return news.filter(a => a.category === category);
}

export function getRecentArticles(limit: number = 3): NewsArticle[] {
  return [...news]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}
