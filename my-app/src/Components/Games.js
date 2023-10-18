import React, { useState } from "react";
import Description from "./Description";

function Games({Games})
{

    const [IorD, setIorD] = useState(false);

    function displayInfo(game)
    {
        <Description Games={game}/>
    }
    //mapping for the game images and displaying them
    const gameCollection = Games.map(game => (
        <img src={game.image} key={game.id} onClick={displayInfo(Games)}/>
    ))

    return(
        <div>
            {gameCollection}
        </div>
    )

}

export default Games;