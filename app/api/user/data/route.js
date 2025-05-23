import { getAuth } from '@clerk/nextjs/server';
import connectDB from '@/config/db';
import User from '@/models/User';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { userId } = getAuth(request);

    await connectDB();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' });
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
