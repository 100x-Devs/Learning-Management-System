import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { validateWebhookSignature } from 'razorpay/dist/utils/razorpay-utils';

export async function POST(req: Request) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    await req.json();
  const secret = process.env.RAZORPAY_KEY_SECRET as string;
  const body = razorpay_order_id + '|' + razorpay_payment_id;
  try {
    const isValidSignature = validateWebhookSignature(
      body,
      razorpay_signature,
      secret
    );
    if (isValidSignature) {
      const { userId } = auth();
      if (!userId) {
        return new NextResponse('Unauthorized', { status: 401 });
      }
      // DB call to save the payment
      console.log('Payment verification successful');
      return NextResponse.json({ status: 'verification_successful' });
    } else {
      console.log('Payment verification failed');
      return NextResponse.json(
        { status: 'verification_failed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { status: 'verification_failed' },
      { status: 500 }
    );
  }
}
