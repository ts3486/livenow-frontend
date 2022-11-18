import React from 'react';

interface ButtonProps {
  title: string;
  variant?: string;
  onClick: () => any;
}

const Button = (props: ButtonProps) => {
  switch (props.variant) {
    default:
      return (
        <button className='bg-blue hover:bg-blue text-white font-bold m-1 py-2 px-4 rounded' onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );

    case 'alert':
      return (
        <button className='bg-blue hover:bg-blue text-white font-bold m-1 py-2 px-4 rounded' onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );
  }
};

export default Button;
