import { useEffect, useRef, useState } from 'react';

interface SwipeGestureOptions {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  minSwipeDistance?: number;
  enableHaptic?: boolean;
  enableVisualFeedback?: boolean;
}

export function useSwipeGesture({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 100,
  enableHaptic = true,
  enableVisualFeedback = true,
}: SwipeGestureOptions) {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
  const edgeThreshold = 50; // Must start within 50px of left edge

  const triggerHaptic = () => {
    if (enableHaptic && 'vibrate' in navigator) {
      // Short, subtle vibration (light tap)
      navigator.vibrate(10);
    }
  };

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const startX = e.touches[0].clientX;
      const startY = e.touches[0].clientY;

      // Only enable swipe-right if starting from left edge
      if (onSwipeRight && startX > edgeThreshold) {
        // Not from edge, ignore this touch for swipe-right
        touchStartX.current = null;
        touchStartY.current = null;
        return;
      }

      touchStartX.current = startX;
      touchStartY.current = startY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) {
        return;
      }

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchStartX.current;
      const deltaY = currentY - touchStartY.current;

      // Only show visual feedback for horizontal swipes
      if (Math.abs(deltaX) > Math.abs(deltaY) && enableVisualFeedback) {
        const progress = Math.min(Math.abs(deltaX) / minSwipeDistance, 1);
        setSwipeProgress(progress);
        setSwipeDirection(deltaX > 0 ? 'right' : 'left');
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) {
        return;
      }

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;

      const deltaX = touchEndX - touchStartX.current;
      const deltaY = touchEndY - touchStartY.current;

      // Reset visual feedback
      setSwipeProgress(0);
      setSwipeDirection(null);

      // Only trigger if horizontal swipe is SIGNIFICANTLY greater than vertical swipe
      // This prevents accidental swipes while scrolling
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 2;

      if (isHorizontalSwipe) {
        if (Math.abs(deltaX) > minSwipeDistance) {
          triggerHaptic();
          if (deltaX > 0 && onSwipeRight) {
            onSwipeRight();
          } else if (deltaX < 0 && onSwipeLeft) {
            onSwipeLeft();
          }
        }
      }

      touchStartX.current = null;
      touchStartY.current = null;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, minSwipeDistance, enableHaptic, enableVisualFeedback]);

  return { swipeProgress, swipeDirection };
}
