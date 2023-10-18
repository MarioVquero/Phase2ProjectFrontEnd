import React from "react";
import Description from "./Description";

function Games({Games})
{
    const gameCollection = Games.map(game => (
        <div>
        <img src={game.image} key={game.id}/>

        
        <Description Games={game}/>
        </div>
    ))

    return(
        <div>
            {gameCollection}
        </div>
    )

}

export default Games;