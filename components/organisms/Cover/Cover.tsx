import React from 'react';
import Image from 'next/image';
import coverImage from '@/public/images/woman-playing-guitar.jpg';
import Button from '@/components/atoms/Button/Button';
import { Box, Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

const helloWorld = () => {
  console.log('hello world');
};

const Cover = (props: any) => {
  return (
    <div className='flex flex-row'>
      <section className='w-3/5'>
        <Image src={coverImage} alt='Picture of the author' width={2500} height={1700} />
      </section>

      <section className='w-2/5 p-20'>
        <h1 className='text-8xl'>Find a venue</h1>
        <p className='text-2xl p-1'>Find a venue that suits your needs...</p>
        <div className='spacer py-40'></div>
        <div>
          <Button title='SIGNUP' onClick={helloWorld} />
          <Button title='LOGIN' onClick={helloWorld} />
        </div>
      </section>
    </div>
  );
};

export default Cover;
