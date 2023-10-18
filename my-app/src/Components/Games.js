import React, { useState } from "react";
import Description from "./Description";

function Games({Games})
{

    const [IorD, setIorD] = useState(false);

    
    //mapping for the game images and displaying them
    
        

    return(
        Games.map(game => (
            <Description Games={game}/>
        ))
    )

}

export default Games;