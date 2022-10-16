import React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';

// interface ButtonProps {
//   title: string;
//   id: string;
//   function: () => any;
// }

const Footer = (props: any) => {
  return (
    <MuiButton className='bg-black' variant='contained' onClick={props.function}>
      <Typography>{props.title}</Typography>
    </MuiButton>
  );
};

export default Footer;
