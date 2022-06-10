import React from 'react';
import Input from '@mui/material/Input';

export interface FileInputProps {
  id: string;
}

const Button = (props: FileInputProps) => {
  return <Input type='file' />;
};

Button.defaultProps = {
  title: 'Button',
  id: 1,
};

export default Button;
