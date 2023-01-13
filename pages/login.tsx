import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import ModalApply from '@/components/organisms/ModalApply/ModalApply';

type FormModel = {
  name: string;
  email: string;
  message?: string;
};

const schema: yup.SchemaOf<FormModel> = yup.object().shape({
  name: yup.string().required('名前を入力してください'),
  email: yup.string().email('有効なメールアドレスを入力してください').required('メールアドレスを入力してください'),
  message: yup.string(),
});

export type Form = yup.InferType<typeof schema>;

export default function Venue() {
  const venues = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const methods = useForm<Form>({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <section className='px-64 pt-24 pb-12 flex  justify-center'>
        <div
          className='p-8 bg-gray-100 border-gray-100 border-2 w-1/2 flex flex-col justify-center
        '>
          <h1 className='font-bold text-3xl flex justify-center mb-16'>Login</h1>
          <FormProvider {...methods}>
            <form action='/send-data-here' method='post' className='flex flex-col justify-center'>
              <div className='flex flex-col justify-start mb-5'>
                <label className='text-xl font-bold' htmlFor='name'>
                  Email:
                </label>
                <input type='text' id='name' name='name' className='mt-3' placeholder='Enter email...' />
              </div>

              <div className='flex flex-col justify-start mb-5'>
                <label className='text-xl font-bold' htmlFor='name'>
                  Password:
                </label>
                <input type='text' id='name' name='name' className='mt-3' placeholder='Enter password...' />
              </div>

              <div className='flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b my-2'>
                <button
                  className='w-full text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 text-2xl'
                  type='button'>
                  Login
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </section>
    </div>
  );
}
