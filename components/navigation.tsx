'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/format', label: 'Rocket Run-Out' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/players', label: 'Players' },
    { href: '/stats', label: 'Stats' },
    { href: '/news', label: 'News' },
    { href: '/exhibitors', label: 'Exhibitors' },
    { href: '/contact', label: 'Contact' },
  ];

  // Initial mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle navigation with animation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    e.preventDefault();

    // Don't navigate if already on the page
    if (pathname === href) return;

    // Update indicator position to target
    if (navRef.current) {
      const links = navRef.current.querySelectorAll('a');
      const targetLink = links[index] as HTMLElement;
      if (targetLink) {
        setIndicatorStyle({
          left: targetLink.offsetLeft,
          width: targetLink.offsetWidth,
        });
      }
    }

    // Navigate after animation starts
    setTimeout(() => {
      router.push(href);
    }, 100);
  };

  useEffect(() => {
    const updateIndicator = () => {
      const currentIndex = navLinks.findIndex(
        (link) => pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
      );

      if (currentIndex !== -1 && navRef.current) {
        // Small delay to ensure DOM is ready
        requestAnimationFrame(() => {
          setActiveIndex(currentIndex);

          // Update indicator position
          if (navRef.current) {
            const links = navRef.current.querySelectorAll('a');
            const activeLink = links[currentIndex] as HTMLElement;
            if (activeLink) {
              setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
              });
            }
          }
        });
      }
    };

    // Initial update
    updateIndicator();

    // Update on window resize to recalculate positions
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [pathname, mounted]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-rpt-gray-900/95 backdrop-blur-sm border-b border-rpt-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/rpt-logo-square.png"
              alt="Rocket Pool Tour"
              width={40}
              height={40}
              className="object-contain"
              style={{ filter: 'drop-shadow(-2px 0px 8px rgba(255, 255, 255, 0.3))' }}
            />
            <span className="font-heading font-bold text-sm sm:text-lg">
              ROCKET POOL TOUR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div ref={navRef} className="hidden lg:flex items-center space-x-3 relative">
            {/* Animated background indicator - Ouija board style */}
            {activeIndex !== -1 && (
              <div
                className="absolute bg-gradient-to-br from-rpt-teal/10 via-rpt-purple/5 to-rpt-teal/10 backdrop-blur-md border border-rpt-teal/20 shadow-[0_0_15px_rgba(0,166,166,0.15),inset_0_1px_0_rgba(255,255,255,0.05)] rounded-lg"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  height: '100%',
                  top: 0,
                  transition: 'left 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              />
            )}
            {navLinks.map((link, index) => {
              const isActive = index === activeIndex;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, index)}
                  className={`text-sm font-medium transition-all duration-500 px-3 py-1.5 rounded-lg relative z-10 ${
                    isActive
                      ? 'scale-110'
                      : 'text-gray-300 hover:text-rpt-teal hover:bg-white/5'
                  }`}
                  style={isActive ? {
                    textShadow: '0 0 10px rgba(0,166,166,0.8), 0 0 20px rgba(0,166,166,0.4), 0 0 30px rgba(0,166,166,0.2)',
                    transform: 'scale(1.1)',
                    letterSpacing: '0.02em'
                  } : {}}
                >
                  <span className={isActive ? 'bg-gradient-to-r from-rpt-teal-light via-white to-rpt-teal-light bg-clip-text text-transparent font-semibold' : ''}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-rpt-teal"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute right-0 top-16 w-3/4 bg-rpt-gray-900/95 backdrop-blur-sm border-b border-l border-rpt-gray-700 py-6">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium transition-all py-2 px-4 rounded-lg relative ${
                      isActive
                        ? 'bg-gradient-to-br from-rpt-teal/20 via-rpt-purple/10 to-rpt-teal/20 backdrop-blur-md border border-rpt-teal/40 shadow-[0_0_20px_rgba(0,166,166,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'text-gray-300 hover:text-rpt-teal hover:bg-white/5'
                    }`}
                    style={isActive ? {
                      textShadow: '0 0 10px rgba(0,166,166,0.8), 0 0 20px rgba(0,166,166,0.4), 0 0 30px rgba(0,166,166,0.2)'
                    } : {}}
                  >
                    <span className={isActive ? 'bg-gradient-to-r from-rpt-teal-light via-white to-rpt-teal-light bg-clip-text text-transparent font-semibold' : ''}>
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
