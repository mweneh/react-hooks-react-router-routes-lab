import React from "react";
import { actors } from "../data";

const Actors = () => {
  const myActors = actors.map((actor) => (
    <div key={actor.name}>
      <h2>Name:{actor.name}</h2>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div>
      <h1>Actors Page</h1>
      {myActors}
    </div>
  );
};

export default Actors;
