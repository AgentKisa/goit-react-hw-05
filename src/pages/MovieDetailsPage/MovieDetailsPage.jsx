import React, { useEffect, useRef, useState, Suspense } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchDetailsMovies } from "../Api";
import { Circles } from "react-loader-spinner";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = useRef(location.state?.from ?? "/");

  const defaultImg = "https://path/to/default/image.jpg";

  useEffect(() => {
    async function getFilm() {
      try {
        const response = await fetchDetailsMovies(movieId);
        setFilm(response);
      } catch (error) {
        console.log(error);
      }
    }
    getFilm();
  }, [movieId]);

  if (!film) {
    return (
      <div>
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div className={css.movieDetails}>
      <Link to={goBackRef.current}>Go back to movies!</Link>
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
        className={css.moviePoster}
      />
      <div className={css.movieInfo}>
        <h2>
          {film.title} ({film.release_date ? film.release_date.slice(0, 4) : ""}
          )
        </h2>
        <p>User Score: {film.popularity}%</p>
        <p>Overview: {film.overview}</p>
        <p>
          Genres:{" "}
          {film.genres && film.genres.map((genre) => genre.name).join(", ")}
        </p>
        <ul className={css.additionalInfo}>
          Additional information
          <li className={css.additionalInfoItem}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.additionalInfoItem}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading sub components...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
