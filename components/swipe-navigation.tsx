'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';

export function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  // Don't enable swipe-back on home page
  const isHomePage = pathname === '/';

  useSwipeGesture({
    onSwipeRight: () => {
      if (!isHomePage) {
        router.back();
      }
    },
  });

  return <>{children}</>;
}
