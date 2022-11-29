import Cover from '@/components/organisms/Cover/Cover';
import VenueCard from '@/components/organisms/VenueCard/VenueCard';

export default function Index() {
  const venues = [1, 2, 3];

  return (
    <div>
      <section>
        <Cover />
      </section>
      <section className='px-64 pt-24 pb-12'>
        <div>
          <h1 className='text-5xl'>人気の会場</h1>
          <div className='flex flex-row justify-between my-6'>
            {venues.map((key) => {
              return <VenueCard key={key} />;
            })}
          </div>
        </div>
      </section>
      <section className='px-64 py-12s'>
        <div>
          <h1 className='text-5xl'>人気の会場</h1>
          <div className='flex flex-row justify-between my-6'>
            {venues.map((key) => {
              return <VenueCard key={key} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
