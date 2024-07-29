// MoviesPage.jsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox/SearchBox";
import MovieList from "../../components/MovieList/MovieList";
import { fetchSearchMovies } from "../Api";

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get("query") || "";
  const [noReviews, setNoReviews] = useState(false);

  useEffect(() => {
    async function getMovie() {
      if (!query) return;
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
  }, [query]);

  const onHandleSubmit = (query) => {
    setParams({ query });
    setSearchMovies([]);
  };

  return (
    <>
      <SearchBox onSearch={onHandleSubmit} queryParam={query} />
      {noReviews ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <MovieList list={searchMovies} />
      )}
    </>
  );
};

export default MoviesPage;
