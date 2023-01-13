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
      <section className='px-64 pt-24 pb-12'>
        <FormProvider {...methods}>
          <form action='/send-data-here' method='post' className='flex flex-col justify-center'>
            <div className='flex  mb-12 justify-center'>
              <div className='flex flex-col items-center w-1/4'>
                <Image className='rounded-full' src={coverImage} width={300} height={300} />
                <label className='text-2xl font-bold mt-3' htmlFor='name'>
                  Add Profile Picture
                </label>
              </div>
            </div>
            <div className='flex flex-col justify-start mb-5'>
              <label className='text-2xl font-bold' htmlFor='name'>
                Username:
              </label>
              <input type='text' id='name' name='name' className='mt-3' />
            </div>

            <div className='flex flex-col justify-start mb-5'>
              <label className='text-2xl font-bold' htmlFor='name'>
                Genre:
              </label>
              <input type='text' id='name' name='name' className='mt-3' />
            </div>

            <div className='flex flex-col justify-start mb-5'>
              <label className='text-2xl font-bold' htmlFor='message'>
                Profile:
              </label>
              <textarea id='message' name='message' className='h-48 mt-3' />
            </div>

            <div className='flex flex-col justify-start mb-5'>
              <label className='text-2xl font-bold' htmlFor='message'>
                Content:
              </label>
              <div className='flex flex-row flex-wrap mt-3'>
                {venues.map((key) => {
                  return <div className='bg-gray-200 w-1/3 h-64 border-2 border-gray-300'></div>;
                })}
              </div>
            </div>

            <div className='flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b my-2'>
              <button
                className='w-full text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 text-2xl'
                type='button'>
                Update
              </button>
            </div>
          </form>
        </FormProvider>
      </section>
    </div>
  );
}
