import React, { useState } from "react";

function Form({URL}) {
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
    // we are preventing default on submission because we don't want the page to rerender
    onsubmit(newGame);
  };

  return (
    <form onSubmit={onSubmitNewGame}>
      <input
        type="text"
        name="title"
        value={setNewGame.name}
        placeholder="title"
        onChange={onChangeNewGame}
      />
      <input
        type="text"
        name="image"
        value={setNewGame.image}
        placeholder="insert url here"
        onChange={onChangeNewGame}
      />
      <input
        type="text"
        name="yearOfRelease"
        value={setNewGame.yearOfRelease}
        placeholder="year of release"
        onChange={onChangeNewGame}
      />
      <input
        type="text"
        name="rating"
        value={setNewGame.rating}
        placeholder="What is your rating"
        onChange={onChangeNewGame}
      />
      <input
        type="text"
        name="console"
        value={setNewGame.console}
        placeholder="console played on"
        onChange={onChangeNewGame}
      />
      <input
        type="text"
        name="review"
        value={setNewGame.review}
        placeholder="your review"
        onChange={onChangeNewGame}
      />
    </form>
  );
}

export default Form;
