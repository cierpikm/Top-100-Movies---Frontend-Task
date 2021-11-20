import React from "react";
import { ListGroup } from "react-bootstrap";

import { MovieType } from "../../types/format";

import Item from "./Item";

const Movies = ({ movies }: { movies: Array<MovieType> }) => {
  return (
    <ListGroup className="movies-list">
      {movies.map((m, index) => (
        <Item
          key={m.id.label}
          imageDesktop={m["im:image"][2].label}
          imageMobile={m["im:image"][2].label}
          title={m.title.label}
          category={m.category.attributes.term}
          description={m.summary.label}
          rank={index + 1}
          link={m.link[1].attributes.href}
        />
      ))}
    </ListGroup>
  );
};

export default Movies;
