import { db } from '@/lib/db';
import React from 'react';
import { Categories } from './_components/categories';

const Searchpage = async () => {
  const categories = await db.category.findMany({
    orderBy: {
      name: 'asc',
    },
  });

  //   const courses = await getCourses({
  //     userId,
  //     ...searchParams,
  //   });

  return (
    <div className="p-6">
      <Categories items={categories} />
    </div>
  );
};

export default Searchpage;
