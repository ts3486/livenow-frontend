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
    <Box>
      <Image src={coverImage} alt='Picture of the author' width={2000} height={1500} />
      <Box>
        <Typography variant='h2'>Find a venue</Typography>
        <Typography variant='body1'></Typography>
        <Button title='SIGNUP' onClick={helloWorld} />
        <Button title='LOGIN' onClick={helloWorld} />
      </Box>
    </Box>
  );
};

export default Cover;
