import Movies from '@/app/_components/movies';
import Title from '@/app/_components/title';

const Home = () => {
  return (
    <div className="overflow-hidden bg-blue-700">
      <Title />
      <Movies />
    </div>
  );
};

export default Home;
