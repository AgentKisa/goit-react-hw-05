import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../Api";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetchSearchMovies(query);
        setSearchMovies(response);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [query]);

  const onHandleSubmit = (value) => {
    setQuery(value);
    setSearchMovies([]);
  };

  return (
    <>
      <SearchBox onSearch={onHandleSubmit} />
      <MovieList list={searchMovies} />
    </>
  );
};

export default MoviesPage;
