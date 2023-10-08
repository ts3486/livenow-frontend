import Cover from '@/components/organisms/Cover/Cover';
import VenueCard from '@/components/organisms/VenueCard/VenueCard';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import { useRouter } from 'next/router';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';

export default function Index() {
  const router = useRouter();
  const venues = [1, 2, 3, 4];

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get('http://127.0.0.1:8000/api/venue')
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error.response));
    };

    fetchData();
  }, []);

  return (
    <div>
      <section>
        <Cover />
      </section>
      <section className='px-20 pt-24 pb-12'>
        <div>
          <h1 className='text-5xl font-bold'>人気の会場</h1>
          <div className='flex flex-row justify-between my-6'>
            {venues.map((key) => {
              return <VenueCard image={coverImage} key={key} />;
            })}
          </div>
          <div className='flex justify-end'>
            <div
              className='flex justify-center rounded-full py-2 px-6  mb-6  text-xl bg-secondary text-white font-bold w-1/8'
              onClick={() => router.push('search')}>
              See more venues
            </div>
          </div>
        </div>
      </section>
      <section className='px-20 py-12s'>
        <div>
          <h1 className='text-5xl font-bold'>新しい会場</h1>
          <div className='flex flex-row justify-between my-6'>
            {venues.map((key) => {
              return <VenueCard image={coverImage} key={key} />;
            })}
          </div>
          <div className='flex justify-end'>
            <div
              className='flex justify-center rounded-full py-2 px-6  mb-6 text-xl bg-secondry text-white w-1/8 font-bold'
              onClick={() => router.push('search')}>
              See more venues
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { data } = await axios.get('http://127.0.0.1:8000/api/venue/1')
//   console.log(data);
//   return { props: { data } }
// }
