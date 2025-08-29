export type TMovies = {
  id: string;
  name: string;
};

export type TMoviesViewProps = {
  onImgClick: (id: string) => void;
};
