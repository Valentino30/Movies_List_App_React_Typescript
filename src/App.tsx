import { useEffect } from "react";

import { useMovie } from "./hooks/movie";

function App() {
  const { getMovies, movies } = useMovie();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <h1>Movie List</h1>
      {movies && (
        <ul>
          {movies.map(({ id, title, year, image }) => (
            <li key={id}>
              {title}, {year}
              <img src={image} alt="backdrop-img" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
