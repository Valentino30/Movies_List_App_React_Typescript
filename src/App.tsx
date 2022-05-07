import { ChangeEvent, FormEvent, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./containers/SearBar";
import Container from "./components/Container";
import MoviesList from "./containers/MoviesList";

import { useMovie } from "./hooks/movie";

function App() {
  const [keyword, setKeyword] = useState("");
  const { getMovies, movies } = useMovie();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value && setKeyword(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    keyword && getMovies(keyword);
    setKeyword("");
  };

  return (
    <Container>
      <Header title="Movies List" />
      <SearchBar
        keyword={keyword}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      {movies ? <MoviesList movies={movies} /> : <Header title="Loading..." />}
    </Container>
  );
}

export default App;
