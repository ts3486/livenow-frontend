import React, { useState, ReactElement } from 'react';

type ModalProps = Required<{
  title: string;
  readonly children: ReactElement;
}>;

export const Modal = ({ title, children }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='bg-secondary text-white active:bg-gray-400 hover:bg-gray-400
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none w-full transition-transform'
        type='button'
        onClick={() => setShowModal(true)}>
        Send Request
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50 transition-transform duration-150'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none w-full '>
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'>
                  <h3 className='text-3xl font-bold'>{title}</h3>
                  <button
                    className='bg-transparent border-0 text-black float-right'
                    onClick={() => setShowModal(false)}>
                    <span className='text-black opacity-7 h-6 w-6 text-xl block py-0'>x</span>
                  </button>
                </div>
                <div className='flex items-center justify-center mx-6 mt-5'>{children}</div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
