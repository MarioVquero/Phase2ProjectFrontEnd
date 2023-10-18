import React, { useState } from "react";
import Home from "./Home"
//import Description from "./Description"

function Collection({collection})
{
    const gameCollection = collection.map(game => (
        <Home game={game}/>
    ))
 
    return(
        <div>
            {gameCollection}
        </div>
    )
    

}

export default Collection;