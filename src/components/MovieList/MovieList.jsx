import React from "react";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ list }) => {
  const location = useLocation();

  console.log("loca2", location);

  return (
    <ul>
      {list.map((movie) => (
        <li key={movie.id}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location.pathname + location.search }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
