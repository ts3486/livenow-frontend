import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { passwordRules } from '@/consts/validation';

type FormModel = {
  name: string;
  email: string;
  password: string;
};
const schema: yup.SchemaOf<FormModel> = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
  password: yup
    .string()
    .matches(passwordRules, { message: 'Please choose a stronger password' })
    .required('Please enter a strong password'),
});
export type Form = yup.InferType<typeof schema>;

export default function Venue() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Form> = (data) => {
    console.log(data);
    return data;
  };

  const onErrors: SubmitErrorHandler<Form> = (data) => {
    console.log(data);
    return data;
  };

  return (
    <div>
      <section className='px-64 pt-24 pb-12 flex  justify-center'>
        <div
          className='p-8 bg-gray-100 border-gray-100 border-2 w-1/2 flex flex-col justify-center
        '>
          <h1 className='font-bold text-3xl flex justify-center mb-16'>Signup</h1>
          <form onSubmit={handleSubmit(onSubmit, onErrors)} className='flex flex-col justify-center'>
            <div className='flex flex-col justify-start mb-5'>
              <label className='text-xl font-bold' htmlFor='name'>
                Your name:
              </label>
              <input {...register('name')} type='text' className='mt-3' placeholder='Enter your name...' />
              {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
            </div>

            <div className='flex flex-col justify-start mb-5'>
              <label className='text-xl font-bold' htmlFor='email'>
                Email:
              </label>
              <input {...register('email')} type='text' className='mt-3' placeholder='Enter your email...' />
              {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
            </div>

            <div className='flex flex-col justify-start mb-5'>
              <label className='text-xl font-bold' htmlFor='password'>
                Password:
              </label>
              <input {...register('password')} type='text' className='mt-3' placeholder='Enter a strong password...' />
              {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
            </div>

            <div className='flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b my-2'>
              <input type='submit' />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
