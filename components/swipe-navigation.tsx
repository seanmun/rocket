'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

export function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // Don't enable swipe-back on home page
  const isHomePage = pathname === '/';

  const { swipeProgress, swipeDirection } = useSwipeGesture({
    onSwipeRight: () => {
      if (!isHomePage) {
        router.back();
      }
    },
  });

  // Calculate transform based on swipe progress
  const translateX = swipeDirection === 'right' ? swipeProgress * 100 : 0;
  const opacity = swipeDirection === 'right' ? 1 - (swipeProgress * 0.3) : 1;

  return (
    <div
      style={{
        transform: `translateX(${translateX}%)`,
        opacity,
        transition: swipeProgress === 0 ? 'transform 0.3s ease-out, opacity 0.3s ease-out' : 'none',
      }}
    >
      {children}
      {/* Edge indicator - shows when starting swipe */}
      {swipeProgress > 0 && swipeDirection === 'right' && (
        <div
          className="fixed left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-rpt-teal to-transparent pointer-events-none"
          style={{
            opacity: swipeProgress,
          }}
        />
      )}
    </div>
  );
}
