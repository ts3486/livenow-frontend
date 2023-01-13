import React from 'react';

interface TextFieldProps {
  label: string;
  varaint?: string;
}

const TextField = (props: TextFieldProps) => {
  return (
    <div className='flex flex-col justify-start mb-5'>
      <label className='font-semibold' htmlFor='name'>
        {props.label}
      </label>
      <input type='text' id='name' name='name' />
    </div>
  );
};

export default TextField;
