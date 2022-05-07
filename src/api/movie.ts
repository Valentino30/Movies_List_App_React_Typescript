import { api } from ".";
import placeholder from "../assets/placeholder.jpeg";

export const getMoviesRequest = async (queryParams: string) => {
  const response = await api.get("/search/movie", `query=${queryParams}`);
  return response.data.results.map(
    (movie: {
      id: string;
      title: string;
      release_date: string;
      backdrop_path: string;
    }) => ({
      id: movie.id,
      title: movie.title,
      year: movie.release_date.substring(0, 4),
      image: movie.backdrop_path
        ? process.env.REACT_APP_IMG_BASE_URL + movie.backdrop_path
        : placeholder,
    })
  );
};
