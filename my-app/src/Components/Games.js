import React, { useState } from "react";
import Description from "./Description";

function Games({ Games }) {
  return Games.map((game) => <Description Games={game} key={game.id} />);
}

export default Games;
