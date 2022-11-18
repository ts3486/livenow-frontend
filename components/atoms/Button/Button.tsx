import React from 'react';

interface ButtonProps {
  title: string;
  style: string;
  onClick: () => any;
}

const Button = (props: ButtonProps) => {
  return (
    <button className={props.style} onClick={props.onClick}>
      <span>{props.title}</span>
    </button>
  );
};

export default Button;
