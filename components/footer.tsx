import Link from 'next/link';
import { Instagram, Youtube, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-rpt-gray-900 border-t border-rpt-gray-700 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rpt-teal to-rpt-purple flex items-center justify-center">
                <span className="text-white font-heading font-bold text-xl">R</span>
              </div>
              <span className="font-heading font-bold text-sm">
                ROCKET POOL<br />TOUR
              </span>
            </div>
            <p className="text-sm text-gray-400">
              The future of competitive pool.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">Tour</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/format" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Rocket Run-Out
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/players" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Players
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">More</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/stats" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Stats Hub
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/exhibitors" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Exhibitors
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-sm text-gray-400 hover:text-rpt-teal transition-colors">
                  Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading font-bold text-sm mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rpt-teal transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rpt-teal transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rpt-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rpt-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-rpt-gray-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Rocket Pool Tour, LLC. All rights reserved.</p>
          <p className="mt-2">Rocket Run-Out© is a registered trademark of Rocket Pool Tour, LLC.</p>
        </div>
      </div>
    </footer>
  );
}
