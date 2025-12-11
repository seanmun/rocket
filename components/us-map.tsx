'use client';

export function USMap() {
  return (
    <svg
      viewBox="0 0 960 600"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient for the map */}
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(0, 166, 166, 0.5)" />
          <stop offset="50%" stopColor="rgba(138, 43, 226, 0.5)" />
          <stop offset="100%" stopColor="rgba(0, 191, 255, 0.5)" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="mapGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Simplified Continental US - single path */}
      <g filter="url(#mapGlow)">
        {/* Main US outline */}
        <path
          d="M 100 120
             L 120 100 L 180 95 L 240 110 L 280 100 L 320 115 L 380 105 L 440 120
             L 500 110 L 560 115 L 620 105 L 680 110 L 740 100 L 800 120
             L 820 160 L 830 200 L 840 240
             L 835 280 L 825 310 L 815 340 L 800 370
             L 780 400 L 750 420 L 720 435 L 680 445
             L 640 455 L 600 460 L 560 465 L 520 468 L 480 470
             L 440 468 L 400 465 L 360 460 L 320 458 L 280 460
             L 240 468 L 200 475 L 160 478 L 120 475
             L 90 465 L 70 440 L 55 410 L 45 375
             L 40 340 L 38 305 L 40 270 L 45 235
             L 55 200 L 70 165 L 85 135
             Z"
          fill="url(#mapGradient)"
          stroke="rgba(0, 166, 166, 0.6)"
          strokeWidth="2"
          opacity="0.9"
        />

        {/* Additional glow outline */}
        <path
          d="M 100 120
             L 120 100 L 180 95 L 240 110 L 280 100 L 320 115 L 380 105 L 440 120
             L 500 110 L 560 115 L 620 105 L 680 110 L 740 100 L 800 120
             L 820 160 L 830 200 L 840 240
             L 835 280 L 825 310 L 815 340 L 800 370
             L 780 400 L 750 420 L 720 435 L 680 445
             L 640 455 L 600 460 L 560 465 L 520 468 L 480 470
             L 440 468 L 400 465 L 360 460 L 320 458 L 280 460
             L 240 468 L 200 475 L 160 478 L 120 475
             L 90 465 L 70 440 L 55 410 L 45 375
             L 40 340 L 38 305 L 40 270 L 45 235
             L 55 200 L 70 165 L 85 135
             Z"
          fill="none"
          stroke="rgba(138, 43, 226, 0.4)"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
}
