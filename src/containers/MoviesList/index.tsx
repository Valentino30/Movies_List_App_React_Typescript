import List from "../../components/List";
import ListItem from "../../components/ListItem";

import { MovieType } from "../../types/movie";

type MoviesListProps = {
  movies: MovieType[];
};

export default function MoviesList({ movies }: MoviesListProps) {
  return (
    <List>
      {movies.map(({ id, title, year, image }) => (
        <ListItem key={id} id={id} title={title} year={year} image={image} />
      ))}
    </List>
  );
}
