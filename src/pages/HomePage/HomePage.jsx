import React from "react";
import { useEffect, useState } from "react";
import { fetchMovies } from "../Api.js";
import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  const [moviesTrend, setMoviesTrend] = useState([]);
  useEffect(() => {
    try {
      const fMovies = async () => {
        const response = await fetchMovies();
        setMoviesTrend(response);
      };
      fMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <MovieList list={moviesTrend} />
    </>
  );
};

export default HomePage;
