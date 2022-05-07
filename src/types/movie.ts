export type MovieType = {
  id: string;
  year: string;
  title: string;
  image: string;
};

export type MovieContextType = {
  movies: MovieType[] | [] | false;
  getMovies: (keyword: string) => void;
};
