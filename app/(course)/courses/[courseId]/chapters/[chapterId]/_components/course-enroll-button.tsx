'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/format';

interface CourseEnrollButtonProps {
  price: number;
  courseId: string;
}

export const CourseEnrollButton = ({
  price,
  courseId,
}: CourseEnrollButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(`/api/courses/${courseId}/checkout`, {
        amount: parseFloat(price.toString()) * 100,
      });

      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }

      const { data } = response;

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        order_id: data.orderId,
        name: 'E-Learn',
        description: 'Learning Management System',
        callback_url: '/api/courses/verify-payment',
        theme: {
          color: '#f97316',
        },

        handler: async function (response: any) {
          try {
            setIsLoading(true);
            const res = await axios.post(
              `/api/courses/${courseId}/verify-payment`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                courseId: courseId,
              }
            );
            if (res.data.status === 'verification_successful') {
              toast.success('Payment successful');
            } else {
              toast.error('Payment failed');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Error verifying payment');
          } finally {
            setIsLoading(false);
          }
        },
      };
      const payment = new (window as any).Razorpay(options);
      payment.open();
      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Button
      onClick={onClick}
      disabled={isLoading}
      size="sm"
      className="w-full md:w-auto"
    >
      Enroll for {formatPrice(price)}
    </Button>
  );
};
