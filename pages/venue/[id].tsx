import Cover from '@/components/organisms/Cover/Cover';
import Image from 'next/image';
import VenueCard from '@/components/organisms/VenueCard/VenueCard';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';

export default function Venue() {
  const venues = [1, 2, 3];

  return (
    <div>
      <section className='px-64 pt-24 pb-12'>
        <h1 className='text-5xl mb-3'>会場名</h1>
        <div>
          <Image className='w-full' src={coverImage} alt='Sunset in the mountains' height={700} width={1400} />
        </div>
        <div className='flex flex-row justify-between'>
          <Image className='w-full ' src={coverImage} alt='Sunset in the mountains' height={400} width={640} />
          <Image className='w-full' src={coverImage} alt='Sunset in the mountains' height={400} width={640} />
        </div>
      </section>
      <section className='px-64 py-12s'>
        <div className='h-full'>
          <h3 className='text-4xl mb-3'>概要</h3>
          <div className='flex flex-col justify-between my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos aliquam aspernatur nam, impedit labore
            placeat, omnis consequatur rerum animi cumque libero? Delectus, voluptas itaque suscipit ratione quaerat
            sequi officia!
          </div>
          <h3 className='text-4xl mb-3'>サポートサービス</h3>
          <div className='flex flex-col justify-between my-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos aliquam aspernatur nam, impedit labore
            placeat, omnis consequatur rerum animi cumque libero? Delectus, voluptas itaque suscipit ratione quaerat
            sequi officia!
          </div>
        </div>
      </section>
      <section className='px-64 py-12s'>
        <div className='h-full'>calendar</div>
      </section>
    </div>
  );
}
