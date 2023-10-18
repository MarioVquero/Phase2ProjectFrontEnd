import React, { useState } from "react";

export default function Description({Games})
{   

    const [IorD, setIorD] = useState(true)
    
   
    return (
        IorD? <img src={Games.image} onClick={() => setIorD(!IorD)}/>: 
        <div onClick={() => !setIorD(!IorD)}>
            <h1>{Games.title}</h1>
        </div>
    )
}