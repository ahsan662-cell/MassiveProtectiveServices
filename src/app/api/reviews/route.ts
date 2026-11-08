import { NextResponse } from 'next/server';
import { fetchGoogleReviewsDirect } from '@/utils/googleReviews';

export async function GET() {
  try {
    const data = await fetchGoogleReviewsDirect();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[API /api/reviews] Error returning reviews:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve reviews' },
      { status: 500 }
    );
  }
}

