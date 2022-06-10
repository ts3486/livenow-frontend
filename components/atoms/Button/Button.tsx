import React from 'react';
import MuiButton from '@mui/material/Button';

export interface ButtonProps {
  title: string;
  id: string;
}

export default function Button(props: ButtonProps) {
  return <MuiButton variant='contained'>{props.title}</MuiButton>;
}
