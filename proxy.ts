import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Clone the response
  const response = NextResponse.next();

  // Content Security Policy
  // Allows resources from same origin, specific external domains for fonts/images
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'", // unsafe-inline needed for Next.js, unsafe-eval for development
    "style-src 'self' 'unsafe-inline'", // unsafe-inline needed for Tailwind and styled components
    "img-src 'self' data: blob: https:", // Allow images from HTTPS sources
    "font-src 'self' data:", // Allow fonts from same origin and data URIs
    "connect-src 'self'", // API calls to same origin only
    "media-src 'self' blob:", // Allow video/audio from same origin and blob
    "frame-ancestors 'none'", // Prevent embedding in iframes (same as X-Frame-Options DENY)
    "base-uri 'self'", // Restrict base tag URLs
    "form-action 'self'", // Restrict form submissions to same origin
    "upgrade-insecure-requests", // Automatically upgrade HTTP to HTTPS
  ].join('; ');

  response.headers.set('Content-Security-Policy', cspDirectives);

  // Strict-Transport-Security (HSTS)
  // Forces HTTPS for 1 year, including all subdomains
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // X-Frame-Options
  // Prevents clickjacking by blocking iframe embedding
  response.headers.set('X-Frame-Options', 'DENY');

  // X-Content-Type-Options
  // Prevents MIME-sniffing attacks
  response.headers.set('X-Content-Type-Options', 'nosniff');

  // X-DNS-Prefetch-Control
  // Controls DNS prefetching for privacy
  response.headers.set('X-DNS-Prefetch-Control', 'on');

  // Referrer-Policy
  // Controls how much referrer information is shared
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions-Policy
  // Controls which browser features and APIs can be used
  const permissionsPolicy = [
    'camera=()',
    'microphone=()',
    'geolocation=()',
    'interest-cohort=()', // Disables FLoC tracking
    'payment=()',
    'usb=()',
    'magnetometer=()',
    'gyroscope=()',
    'accelerometer=()',
  ].join(', ');

  response.headers.set('Permissions-Policy', permissionsPolicy);

  // X-XSS-Protection
  // Legacy header for older browsers (modern browsers use CSP)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

// Apply proxy to all routes
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (images, videos, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm)).*)',
  ],
};
