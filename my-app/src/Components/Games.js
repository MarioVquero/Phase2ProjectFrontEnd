import React from "react";
import Description from "./Description";

function Games({Games})
{
    function displayInfo(game)
    {
        <Description Games={game}/>
    }
    //mapping for the game images and displaying them
    const gameCollection = Games.map(game => (
        <img src={game.image} key={game.id} onClick={displayInfo(game)}/>
    ))

    return(
        <div>
            {gameCollection}
        </div>
    )

}

export default Games;