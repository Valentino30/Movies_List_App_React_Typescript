import { useState } from "react";

import { useMovie } from "./hooks/movie";

function App() {
  const [keyword, setKeyword] = useState("");
  const { getMovies, movies } = useMovie();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value && setKeyword(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    keyword && getMovies(keyword);
    setKeyword("");
  };

  return (
    <div>
      <h1>Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
          placeholder="Search Movie"
        />
      </form>
      {movies ? (
        <ul>
          {movies.map(({ id, title, year, image }) => (
            <li key={id}>
              {title}, {year}
              <img src={image} alt="backdrop-img" />
            </li>
          ))}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
