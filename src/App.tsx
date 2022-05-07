import { useEffect } from "react";

import { useMovie } from "./hooks/movie";

function App() {
  const { getMovies, movies } = useMovie();

  useEffect(() => {
    getMovies();
  }, [getMovies]);

  console.log({ movies });

  return (
    <div>
      <h1>Movie List</h1>
    </div>
  );
}

export default App;
