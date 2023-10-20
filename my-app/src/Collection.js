import React, { useState } from "react";
//import Description from "./Description"
import { useLoaderData } from "react-router-dom";

function Collection() {
  const games = useLoaderData();

  return (
    <div>
      {games.map((game) => (
        <div>
          <h1>{game.title}</h1>
          <h2>{game.yearOfRelease}</h2>
          <h3>{game.rating}</h3>
          <p>{game.review}</p>
        </div>
      ))}
    </div>
  );
}

export default Collection;
