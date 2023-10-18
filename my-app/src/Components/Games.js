import React from "react";

function Games({Games})
{
    const gameCollection = Games.map(game => (
        <img src={game.image}/>
    ))

    return(
        <table>
            {gameCollection}
        </table>
    )

}

export default Games;