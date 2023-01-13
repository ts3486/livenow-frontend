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
        <button
          className='bg-secondary md:hover:opacity-80 text-white text-xl font-bold m-1 py-3 px-5 rounded shadow'
          onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );

    case 'gray':
      return (
        <button
          className='bg-gray-200 md:hover:bg-gray-400  text-gray-600 md:hover:bg-gray-300 text-base font-bold m-1 py-2 px-4 rounded shadow'
          onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );

    case 'alert':
      return (
        <button
          className='bg-red md:hover:bg-gray-400  text-white font-bold m-1 py-2 px-4 rounded shadow'
          onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );

    case 'long':
      return (
        <button
          className='w-full bg-secondary md:hover:bg-gray-400 text-white font-bold m-1 py-2 px-4 rounded shadow'
          onClick={props.onClick}>
          <span>{props.title}</span>
        </button>
      );
  }
};

export default Button;
