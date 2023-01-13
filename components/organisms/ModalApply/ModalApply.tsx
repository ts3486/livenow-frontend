import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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

export const ModalApply = () => {
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
    <div className='w-screen'>
      <FormProvider {...methods}>
        <form action='/send-data-here' method='post' className='flex flex-col justify-center'>
          <div className='flex flex-col justify-start mb-5'>
            <label className='font-semibold' htmlFor='name'>
              お名前:
            </label>
            <input type='text' id='name' name='name' />
          </div>
          <div className='flex flex-col justify-start mb-5'>
            <label className='font-semibold' htmlFor='email'>
              メール:
            </label>
            <input type='text' id='email' name='email' />
          </div>

          <div className='flex flex-col justify-start mb-5'>
            <label className='font-semibold' htmlFor='option'>
              オプション:
            </label>
            <fieldset className='mt-2'>
              <input type='radio' value='email' className='mr-2' />
              <label className='mr-6'>Email</label>

              <input type='radio' value='phone' className='mr-2' />
              <label className='mr-6'>Phone</label>

              <input type='radio' value='mail' className='mr-2' />
              <label className='mr-6'>Mail</label>
            </fieldset>
          </div>

          <div className='flex flex-col justify-start mb-5 font-semibold'>
            <label htmlFor='message'>メッセージ:</label>
            <input type='text' id='message' name='message' />
          </div>

          <div className='flex items-center justify-end border-t border-solid border-blueGray-200 rounded-b my-2'>
            <button
              className='w-full text-white bg-secondary active:bg-yellow-700 font-bold uppercase text-sm py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1'
              type='button'>
              Submit
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ModalApply;
