import Cover from '@/components/organisms/Cover/Cover';
import coverImage from '@/public/images/john-matychuk-gUK3lA3K7Yo-unsplash.jpg';
import VenueCard from '@/components/organisms/VenueCard/VenueCard';

export default function Search() {
  const venues = [1, 2, 3];

  return (
    <div>
      <h1 className='px-20 mt-20 mb-10 text-6xl font-extrabold'>Search a Venue</h1>
      <section className='flex flex-col px-20  pb-3 w-2/3'>
        <div className='flex'>
          <input
            type='text'
            id='search-bar'
            name='search-bar'
            placeholder='enter keyword...'
            className='w-1/3 rounded-full mr-10'
          />
          <div className='bg-gray-200 rounded-full p-3 px-8 mr-2 text-xl'>distance</div>
          <div className='bg-gray-200 rounded-full p-3 px-8 mr-2  text-xl'>price</div>
          <div className='bg-gray-200 rounded-full p-3 px-8 mr-2  text-xl'>genre</div>
          <div className='bg-gray-200 rounded-full p-3 px-8 mr-2  text-xl'>ノルマ</div>
        </div>
      </section>
      <section className='px-20'>
        <div className='h-full'>
          <div className='flex flex-col justify-between my-6'>
            {venues.map((key) => {
              return <VenueCard image={coverImage} variant='long' key={key} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
