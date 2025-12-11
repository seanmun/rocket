import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting: 5 attempts per 15 minutes per IP
    const clientIp = getClientIp(request);
    const rateLimitResult = rateLimit(clientIp, {
      maxRequests: 5,
      windowMs: 15 * 60 * 1000, // 15 minutes
    });

    // Add rate limit headers to response
    const headers = {
      'X-RateLimit-Limit': rateLimitResult.limit.toString(),
      'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
      'X-RateLimit-Reset': new Date(rateLimitResult.reset).toISOString(),
    };

    // If rate limit exceeded, return 429 Too Many Requests
    if (!rateLimitResult.success) {
      return NextResponse.json(
        {
          valid: false,
          error: 'Too many attempts. Please try again later.',
          retryAfter: new Date(rateLimitResult.reset).toISOString(),
        },
        { status: 429, headers }
      );
    }

    const { pitchId, password } = await request.json();

    // Server-side password validation (not exposed to client)
    const passwords: { [key: string]: string } = {
      'pitch-1': process.env.PITCH_1_PASSWORD || '',
      'pitch-2': process.env.PITCH_2_PASSWORD || ''
    };

    if (pitchId && password === passwords[pitchId]) {
      return NextResponse.json({ valid: true }, { headers });
    } else {
      return NextResponse.json({ valid: false }, { status: 401, headers });
    }
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
