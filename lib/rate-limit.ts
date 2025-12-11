// Simple in-memory rate limiter
// For production, consider using Redis or a service like Upstash

interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  Object.keys(store).forEach((key) => {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  });
}, 10 * 60 * 1000);

export interface RateLimitConfig {
  /**
   * Maximum number of requests allowed in the time window
   */
  maxRequests: number;
  /**
   * Time window in milliseconds
   */
  windowMs: number;
}

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Rate limiter that tracks requests by identifier (e.g., IP address)
 * @param identifier - Unique identifier for the client (e.g., IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result with success status and metadata
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 15 * 60 * 1000 } // Default: 5 requests per 15 minutes
): RateLimitResult {
  const now = Date.now();
  const record = store[identifier];

  // If no record exists or window has expired, create a new one
  if (!record || record.resetTime < now) {
    store[identifier] = {
      count: 1,
      resetTime: now + config.windowMs,
    };

    return {
      success: true,
      limit: config.maxRequests,
      remaining: config.maxRequests - 1,
      reset: store[identifier].resetTime,
    };
  }

  // Increment count
  record.count++;

  // Check if limit exceeded
  if (record.count > config.maxRequests) {
    return {
      success: false,
      limit: config.maxRequests,
      remaining: 0,
      reset: record.resetTime,
    };
  }

  return {
    success: true,
    limit: config.maxRequests,
    remaining: config.maxRequests - record.count,
    reset: record.resetTime,
  };
}

/**
 * Get the client's IP address from the request
 * Works with Vercel and other hosting providers
 */
export function getClientIp(request: Request): string {
  // Try various headers in order of preference
  const headers = request.headers;

  // Vercel
  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  // Cloudflare
  const cfConnectingIp = headers.get('cf-connecting-ip');
  if (cfConnectingIp) {
    return cfConnectingIp;
  }

  // Other proxies
  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback
  return 'unknown';
}
