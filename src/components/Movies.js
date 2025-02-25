import React from "react";
import { movies } from "../data";

const Movies = () => {
  const myMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Title:{movie.title}</h2>
      <p>Time: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Movies Page</h1>
      {myMovies}
    </div>
  );
};

export default Movies;