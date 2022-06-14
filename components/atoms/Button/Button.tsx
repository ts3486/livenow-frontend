import React from 'react';
import { Button as MuiButton, Typography } from '@mui/material';
import '../../../styles/main.scss';

interface ButtonProps {
  title: string;
  id: string;
  function: () => any;
}

const Button = (props: ButtonProps) => {
  return (
    <MuiButton className='button' variant='contained' onClick={props.function}>
      <Typography variant='button'>{props.title}</Typography>
    </MuiButton>
  );
};

export default Button;
