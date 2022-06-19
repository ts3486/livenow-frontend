import Button from '../components/atoms/Button/Button';

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Button id='1' title='first button' function={() => console.log('hello')} />
    </div>
  );
}
