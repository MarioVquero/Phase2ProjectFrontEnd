import React, { useState } from "react";
//import Description from "./Description"
import { useLoaderData } from "react-router-dom";

function Collection() {
  const games = useLoaderData();

  return (
    <div class="bg-dark.bg-gradient">
      <div class="d-flex  justify-content-center ">
        {games.map((game) =>
          game.played ? (
            <div class="card" style={{ width: "288px" }}>
              <h1 class="card-title">{game.title}</h1>
              <img class="card-img-top" src={game.image} alt="your game" />
              <h2>Year of release: {game.yearOfRelease}</h2>
              <h3 class="card-text">Rating: {game.rating}</h3>
              <p class="class-text">{game.review}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Collection;
