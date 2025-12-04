export interface RecentPerformance {
  eventName: string;
  location: string;
  score: number;
  placement: number;
  date: string;
}

export interface Player {
  id: string;
  name: string;
  nickname?: string;
  bio: string;
  hometown: string;
  tourCard: number; // 1-40
  stats: {
    breakAndRuns: number;
    ballInHandRuns: number;
    averageScore: number;
    highScore: number;
    wins: number;
    totalPoints: number;
    breakPercentage?: number;
    runoutPercentage?: number;
  };
  ranking: number;
  recentPerformances?: RecentPerformance[];
  image?: string; // Will be placeholder for now
}

export interface TourEvent {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  date: string;
  week: number; // 1-15
  prizePool: number;
  status: 'upcoming' | 'completed';
  winner?: string; // player id
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: 'league' | 'player' | 'event' | 'tech' | 'announcement';
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image?: string;
}
