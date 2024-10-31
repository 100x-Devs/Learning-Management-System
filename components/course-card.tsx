import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { IconBadge } from '@/components/icon-badge';
import { formatPrice } from '@/lib/format';
import toast from 'react-hot-toast';
import axios from 'axios';
// import { CourseProgress } from '@/components/course-progress';

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
}: CourseCardProps) => {

  const createOrder = async () => {
    try {
      const res = await axios.post('/api/create-order', {
        //course id here and price
      });

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        order_id: res.data.id,
        name: 'E-Learning',
        description: 'Learning Management System',
        callback_url: '/api/verify-payment',
        theme: {
          color: '#f97316',
        },

        handler: function (response: any) {
          axios
            .post('/api/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              //course id here
            })
            .then((res) => {
              if (res.data.status === 'verification_successful') {
                window.location.href = '/payment-success';
              } else {
                toast.error('Payment failed');
              }
            })
            .catch((error) => {
              console.error('Error:', error);
              alert('Error verifying payment');
            });
        },
      };
      const payment = new (window as any).Razorpay(options);
      payment.open();
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error creating order');
    }
  };
  
  return (
    <Link href={`/courses/${id}`}>
      <div className="group hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full">
        <div className="relative w-full aspect-video rounded-md overflow-hidden">
          <Image fill className="object-cover" alt={title} src={imageUrl} />
        </div>
        <div className="flex flex-col pt-2">
          <div className="text-lg md:text-base font-medium group-hover:text-sky-700 transition  dark:group-hover:text-sky-500  line-clamp-2">
            {title}
          </div>
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="my-3 flex items-center gap-x-2 text-sm md:text-xs">
            <div className="flex items-center gap-x-1 text-slate-500">
              <IconBadge size="sm" icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? 'Chapter' : 'Chapters'}
              </span>
            </div>
          </div>
          {progress !== null ? (
            <p>Todo</p>
          ) : (
            /*// <CourseProgress
            //   variant={progress === 100 ? 'success' : 'default'}
            //   size="sm"
            //   value={progress}
            // />*/
            <p className="text-md md:text-sm font-medium text-slate-700">
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

/*export const CourseCard = () => {
  return <div>Course Card</div>;
};*/
