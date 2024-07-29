import React, { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../Api";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [noReviews, setNoReviews] = useState(false);

  const onHandleSubmit = (query) => {
    async function getMovie() {
      try {
        const response = await fetchSearchMovies(query);
        if (!response || response.length === 0) {
          setNoReviews(true);
        } else {
          setSearchMovies(response);
          setNoReviews(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
    setSearchMovies([]);
  };

  return (
    <>
      <SearchBox onSearch={onHandleSubmit} />
      {noReviews ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <MovieList list={searchMovies} />
      )}
    </>
  );
};

export default MoviesPage;
