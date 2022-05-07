import {
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";
import { toast } from "react-toastify";

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

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<[] | false>([]);

  const getMovies = useCallback(async (keyword: string) => {
    setMovies(false);
    try {
      const movies = await getMoviesRequest(keyword);
      if (movies.length === 0) {
        toast.error("No movies found 🤔");
        setMovies([]);
      } else {
        setMovies(movies);
      }
    } catch (error) {
      toast.error("Something went wrong 😬");
      setMovies([]);
    }
  }, []);

  return (
    <MovieContext.Provider value={{ getMovies, movies }}>
      {children}
    </MovieContext.Provider>
  );
};
