import React from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';

// interface ButtonProps {
//   title: string;
//   id: string;
//   function: () => any;
// }

const helloWorld = () => {
  console.log('hello world');
};

const VenueCard = (props: any) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <Image className='w-full' src={coverImage} alt='Sunset in the mountains' height={300} width={400} />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
        <p className='text-gray-700 text-base'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
          eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  );
};

export default VenueCard;
