'use client';

import MoviesView from './MoviesView';
const Movies = () => {
  const onImgClick = (id: string) => {
    window.open(`https://www.netflix.com/kr/title/${id}`);
  };

  const props = {
    onImgClick,
  };

  return <MoviesView {...props} />;
};

export default Movies;
