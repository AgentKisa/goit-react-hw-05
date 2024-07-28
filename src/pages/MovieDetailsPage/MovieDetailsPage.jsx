import React from "react";
import { useEffect, useRef, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchDetailsMovies } from "../Api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const goBackRef = location.state?.from ?? "/";

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

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
    return <div>Loading...</div>;
  }
  console.log("loca", location);
  return (
    <div>
      <Link to={goBackRef}>Go back to movies!</Link>

      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <h2>
        {film.title} ({film.release_date ? film.release_date.slice(0, 4) : ""})
      </h2>
      <p>User Score: {film.popularity}%</p>
      <p>Overview: {film.overview}</p>
      <p>
        Genres:{" "}
        {film.genres && film.genres.map((genre) => genre.name).join(", ")}
      </p>
      <ul>
        Additional information
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
