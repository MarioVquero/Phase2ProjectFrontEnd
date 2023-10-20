import React, { useState } from "react";
import { json } from "react-router-dom";

export default function Description({ Games }) {
  // state for Image or Description
  const [IorD, setIorD] = useState(true);

  //state for settng played
  const [played, setPlayed] = useState(false);

  function handleClick() {
    setPlayed(!played);
    console.log(played);
    const updateGame = {
      id: Games.id,
      title: Games.title,
      image: Games.image,
      yearOfRelease: Games.yearOfRelease,
      rating: Games.rating,
      console: Games.console,
      review: Games.review,
      played: played,
    };

    fetch(`http://localhost:3000/god-of-war-games/${Games.id}`, {
      method: `PATCH`,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateGame),
    });
  }

  return IorD ? (
    <div class="card" style={{ width: "288px" }}>
      <img
        class="img-fluid"
        src={Games.image}
        alt="pic"
        // style={{ width: "300px", height: "300px" }}
        onClick={() => setIorD(!IorD)}
      />
    </div>
  ) : (
    <div onClick={() => !setIorD(!IorD)} class="card">
      <div class="card-body">
        <h1 class="card-title">{Games.title}</h1>
        <h2>{Games.yearOfRelease}</h2>
        <h3>{Games.rating}</h3>
        <p class="card-text">{Games.review}</p>
        <button
          class="btn btn-primary"
          placeholder="click"
          onClick={handleClick}
        >
          {!played ? "not played" : "played"}
        </button>
      </div>
    </div>
  );
}
