import React, { useState } from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import Button from '@/components/atoms/Button/Button';
import ModalApply from '@/components/organisms/ModalApply/ModalApply';
import { useRouter } from 'next/router';

export default function Venue() {
  const router = useRouter();
  const venues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div>
      <section className='px-64 pt-24 pb-12'>
        <div className='flex justify-between'>
          <Image className='rounded-full' src={coverImage} width={300} height={300} />
          <div className='w-2/3 text-2xl'>
            <div className='flex items-center'>
              <div className='mr-5'>Username</div>
              <Button title='Edit Profile' variant='gray' onClick={() => router.push('/edit/1')}></Button>
            </div>
            <div className='text-gray-500 mb-16'>genre</div>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur impedit tenetur natus voluptate,
              modi eligendi? Qui dignissimos recusandae temporibus consequatur eum iste quas nulla ipsum illum, dolor
              ullam consectetur rem?
            </div>
          </div>
        </div>
      </section>
      <section className='px-64 py-6'>
        <div className='h-full'>
          <div className='flex flex-row flex-wrap'>
            {venues.map((key) => {
              return (
                <div className='m-1'>
                  <Image src={coverImage} width={420} height={420} key={key} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
