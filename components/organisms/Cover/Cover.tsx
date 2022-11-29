import React from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/woman-playing-guitar.jpg';
import Button from '@/components/atoms/Button/Button';

const helloWorld = () => {
  console.log('hello world');
};

const Cover = (props: any) => {
  return (
    <div className='flex flex-row h-80'>
      <section className='grow p-20 bg-primary'>
        <h1 className='text-8xl'>Find a venue</h1>
        <p className='text-2xl p-1'>Find a venue that suits your needs...</p>
        <div className='spacer py-3'></div>
        <div>
          <Button title='Search For a Venue' onClick={helloWorld} />
        </div>
      </section>
      {/* <section className='relative w-4/6 '>
        <Image src={coverImage} alt='Picture of the author' layout='fill' objectFit='cover' />
      </section> */}
    </div>
  );
};

export default Cover;
