import React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';

interface ButtonProps {
  title: string;
  onClick: () => any;
}

const Button = (props: ButtonProps) => {
  return (
    <MuiButton className='bg-black' variant='contained' onClick={props.onClick}>
      <Typography>{props.title}</Typography>
    </MuiButton>
  );
};

export default Button;
