import React from 'react';
import Button from '../../atoms/Button/Button';
import { Card, CardMedia, CardContent, CardActions, Typography } from '@mui/material';

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
    <Card variant='outlined' sx={{ minWidth: 275 }}>
      <CardMedia
        component='img'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
        alt='green iguana'
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button title='CHECK VENUE' onClick={helloWorld} />
      </CardActions>
    </Card>
  );
};

export default VenueCard;
