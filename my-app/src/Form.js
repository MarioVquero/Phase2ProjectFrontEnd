import React, { useState } from "react";
import bootstrap from "bootstrap";

function Form({ URL }) {
  const onSubmit = (newGame) => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newGame),
    });
  };

  const [newGame, setNewGame] = useState({
    title: "",
    image: "",
    yearOfRelease: "",
    rating: "",
    console: "",
    review: "",
  });

  //   Here we made a state for each input value using one state

  const onChangeNewGame = (event) => {
    setNewGame({ ...newGame, [event.target.name]: event.target.value });
  };

  //   We are adding properties to newGame by using the splitter operator and getting the target name as a key and the targets value as a value

  const onSubmitNewGame = (event) => {
    event.preventDefault();
    console.log(newGame);
    // we are preventing default on submission because we don't want the page to rerender
    onSubmit(newGame);
  };

  return (
    <div>
      <form onSubmit={onSubmitNewGame} className="form-group">
        <input
          class="form-control"
          type="text"
          name="title"
          value={setNewGame.title}
          placeholder="title"
          onChange={onChangeNewGame}
        />
        <input
          class="form-control"
          type="text"
          name="image"
          value={setNewGame.image}
          placeholder="insert url here"
          onChange={onChangeNewGame}
        />
        <input
          class="form-control"
          type="text"
          name="yearOfRelease"
          value={setNewGame.yearOfRelease}
          placeholder="year of release"
          onChange={onChangeNewGame}
        />
        <input
          class="form-control"
          type="text"
          name="rating"
          value={setNewGame.rating}
          placeholder="What is your rating"
          onChange={onChangeNewGame}
        />
        <input
          class="form-control"
          type="text"
          name="console"
          value={setNewGame.console}
          placeholder="console played on"
          onChange={onChangeNewGame}
        />
        <input
          class="form-control"
          type="text"
          name="review"
          value={setNewGame.review}
          placeholder="your review"
          onChange={onChangeNewGame}
        />
        <input type="submit" value="add" />
      </form>
      <div>
        <h1>{newGame.title}</h1>
        <img src={newGame.image} alt="game" />
        <h2>{newGame.yearOfRelease}</h2>
        <h3>{newGame.rating}</h3>
        <h3>{newGame.console}</h3>
        <p>{newGame.review}</p>
      </div>
    </div>
  );
}

export default Form;
