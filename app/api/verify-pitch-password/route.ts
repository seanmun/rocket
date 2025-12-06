import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { pitchId, password } = await request.json();

    // Server-side password validation (not exposed to client)
    const passwords: { [key: string]: string } = {
      'pitch-1': process.env.PITCH_1_PASSWORD || '',
      'pitch-2': process.env.PITCH_2_PASSWORD || ''
    };

    if (pitchId && password === passwords[pitchId]) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ valid: false }, { status: 500 });
  }
}
