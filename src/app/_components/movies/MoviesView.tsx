import * as motion from 'motion/react-client';

import { movies } from './constans';
import type { TMoviesViewProps } from './types';

const MoviesView = ({ onImgClick }: TMoviesViewProps) => (
  <motion.div
    className="grid grid-cols-6 gap-16"
    style={{ transformOrigin: 'top center' }}
    initial={{ scale: 2 }}
    whileInView={{ scale: 1 }}
    transition={{
      type: 'spring',
      stiffness: 100,
      damping: 30,
    }}
    viewport={{ margin: '-50% 0%' }}
  >
    {movies.map((movie) => (
      <motion.img
        key={movie.id}
        className="h-full w-full cursor-pointer rounded-16"
        src={`/images/${movie.name}.webp`}
        whileHover={{ opacity: 1 }}
        initial={{ opacity: 0.5 }}
        onClick={() => onImgClick(movie.id)}
      />
    ))}
  </motion.div>
);

export default MoviesView;
