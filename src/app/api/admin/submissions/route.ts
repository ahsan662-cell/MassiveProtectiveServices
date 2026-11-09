import { NextRequest, NextResponse } from 'next/server';
import {
  getAllSubmissions,
  getSubmissionStats,
  deleteSubmission,
  clearAllSubmissions,
} from '@/utils/submissionStore';

export async function GET(req: NextRequest) {
  try {
    const stats = getSubmissionStats();
    const submissions = getAllSubmissions();

    return NextResponse.json(
      {
        success: true,
        stats,
        submissions,
        retrievedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        },
      }
    );
  } catch (error: unknown) {
    console.error('[API /api/admin/submissions] Error:', error);
    return NextResponse.json(
      { error: 'Failed retrieving submission analytics' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id === 'all') {
      clearAllSubmissions();
      return NextResponse.json({ success: true, message: 'All submissions cleared' });
    }

    if (id) {
      const removed = deleteSubmission(id);
      if (removed) {
        return NextResponse.json({ success: true, message: `Submission ${id} deleted` });
      }
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }

    return NextResponse.json({ error: 'Missing id parameter' }, { status: 400 });
  } catch (error: unknown) {
    return NextResponse.json(
      { error: 'Failed deleting submission' },
      { status: 500 }
    );
  }
}

