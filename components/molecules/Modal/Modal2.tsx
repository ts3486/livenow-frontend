import React, { useState } from 'react';

export const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className='bg-primary text-white active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
        type='button'
        onClick={() => setShowModal(true)}>
        Fill Details
      </button>
      {showModal ? (
        <>
          <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-brightness-50 transition-transform'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t '>
                  <h3 className='text-3xl font=semibold'>General Info</h3>
                  <button
                    className='bg-transparent border-0 text-black float-right'
                    onClick={() => setShowModal(false)}>
                    <span className='text-black opacity-7 h-6 w-6 text-xl block py-0'>x</span>
                  </button>
                </div>
                <div className='relative p-6 flex-auto'></div>
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button
                    className='text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
