import React, { useState } from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import ModalApply from '@/components/organisms/ModalApply/ModalApply';

export default function Venue() {
  const venues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <section className='px-64 pt-24 pb-12'>
        <div className='flex justify-between'>
          <Image className='rounded-full' src={coverImage} alt='Rounded avatar' width={300} height={300} />
          <div className='w-2/3 text-2xl'>
            <div>Username</div>
            <div>genre</div>
            <div>profile</div>
          </div>
        </div>
      </section>
      <section className='px-64 py-12s'>
        <div className='h-full'>
          <div className='flex flex-row flex-wrap m-6'>
            {venues.map((key) => {
              return (
                <div className='m-1'>
                  <Image src={coverImage} width={400} height={400} key={key} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
