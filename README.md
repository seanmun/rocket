# Rocket Pool Tour

The official website for the Rocket Pool Tour - a revolutionary professional 9-ball pool tour featuring the innovative Rocket Run-Out© format.

## About

The Rocket Pool Tour (RPT) is bringing professional pool into the modern era with a fast-paced, offense-driven format designed for both players and spectators. Launching in Q2 2026, the tour will feature elite professional players competing across Southern California in a production-heavy, family-friendly sports entertainment experience.

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Features

### Public-Facing Pages
- **Homepage** - Hero section with tournament highlights, player rankings, upcoming events
- **About** - Tour mission, values, and background
- **Rocket Run-Out Format** - Detailed explanation of the proprietary game format
- **Schedule** - Tournament calendar and event listings
- **Players** - Interactive player directory with stats and bios
- **Stats Hub** - Advanced statistics and analytics
- **News** - Latest tour updates and articles
- **Exhibitors** - Partnership opportunities for brands
- **Contact** - Team information and contact forms
- **Media** - Partner pitch decks (DraftKings, NVIDIA)

### Key Components
- Responsive navigation with mobile menu
- Player profile modals with detailed statistics
- Email signup integration
- Video background hero sections
- Interactive stats displays
- Partnership presentation decks

## Design System

### Color Palette
- **Primary Teal:** `#00A6A6` - Main brand color
- **Royal Blue:** `#1E40AF` - Secondary brand color
- **Navy Blue:** `#004F9F` - Supporting color
- **Aqua:** `#4DF8FF` - Accent highlights
- **Yellow:** `#FFDA3A` - High-impact CTAs (used sparingly)

### Typography
- **Heading Font:** Bebas Neue (bold, uppercase)
- **Body Font:** Inter (clean, modern)

### Key Design Principles
- Mobile-first responsive design
- High contrast for readability
- Glow effects for brand elements
- Production-heavy aesthetic inspired by PGA/NBA
- Clean, professional presentation

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/seanmun/rocket.git

# Navigate to project directory
cd rocket

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Project Structure

```
rocket/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── exhibitors/        # Exhibitors page
│   ├── format/            # Rocket Run-Out format page
│   ├── media/             # Media and pitch decks
│   │   ├── pitch-1/       # DraftKings pitch
│   │   └── pitch-2/       # NVIDIA pitch
│   ├── news/              # News articles
│   ├── players/           # Player directory
│   ├── schedule/          # Tournament schedule
│   ├── stats/             # Stats hub
│   ├── globals.css        # Global styles and theme
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── broadcast-slide.tsx
│   ├── email-signup.tsx
│   ├── footer.tsx
│   ├── navigation.tsx
│   └── player-modal.tsx
├── data/                  # Static data
│   ├── events.ts
│   ├── news.ts
│   ├── players.ts
│   ├── team.ts
│   └── types.ts
├── public/                # Static assets
│   ├── images/
│   ├── logos/
│   └── videos/
└── README.md
```

## Key Pages

### Homepage (`/`)
- Hero section with video background
- Featured players carousel
- Upcoming events
- Latest news
- Exhibitor opportunities
- Email signup CTA

### Players (`/players`)
- Full roster of tour card holders
- Player rankings and stats
- Interactive player cards
- Detailed modal views with performance history

### Format (`/format`)
- Rocket Run-Out© rules and gameplay
- Scoring system explanation
- Strategic elements
- Comparison to traditional formats

### Media Pitch Decks
- **DraftKings Partnership** (`/media/pitch-1`)
- **NVIDIA Partnership** (`/media/pitch-2`)
- Full-screen slideshow presentations
- Keyboard navigation support

## Development Notes

### Responsive Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

### Custom Tailwind Classes
- `glow-teal` - Teal glow effect
- `glow-purple` - Purple glow effect
- `font-heading` - Bebas Neue font

### Environment Setup
No environment variables required for basic development. Email signup may require backend integration for production.

## Contributing

This is a proprietary project for Rocket Pool Tour, LLC. For inquiries about contributing or partnership opportunities, please contact the team through the website.

## Brand Assets

- Logo variations in `/public/logos/`
- Founder photos in `/public/images/`
- Tournament photos and videos in `/public/`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Performance

- Optimized images with Next.js Image component
- Lazy loading for videos
- Code splitting via Next.js App Router
- Tailwind CSS purging for minimal bundle size

## License

© 2025 Rocket Pool Tour, LLC. All rights reserved.
Rocket Run-Out© is a registered trademark of Rocket Pool Tour, LLC.

## Contact

For technical inquiries or partnership opportunities:
- Website: [rocketpooltour.com](https://rocketpooltour.com)
- Contact page: [/contact](https://rocketpooltour.com/contact)

---

Built with ❤️ for the future of professional pool
