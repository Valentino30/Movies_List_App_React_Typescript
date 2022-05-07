import { createContext, useCallback, useContext, useState } from "react";

import { getMoviesRequest } from "../api/movie";
import { MovieContextType } from "../types/movie";

const defaultMovieContext = {
  getMovies: () => {},
  movies: [],
};

const MovieContext = createContext<MovieContextType>(defaultMovieContext);

export const useMovie = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = useState<[] | false>([]);

  const getMovies = useCallback(async (keyword: string) => {
    setMovies(false);
    try {
      const movies = await getMoviesRequest(keyword);
      setMovies(movies);
    } catch (error) {
      setMovies([]);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ getMovies, movies }}>
      {children}
    </MovieContext.Provider>
  );
};
