import React, { useState } from "react";

export default function Description({Games})
{   

    const [IorD, setIorD] = useState(true)
    const [played,setPlayed] = useState(false)
    
    function handleClick()
    {
        setPlayed(!played);
        
    }
   
    return (
        IorD? <img src={Games.image} onClick={() => setIorD(!IorD)}/>: 
        <div onClick={() => !setIorD(!IorD)}>
            <h1>{Games.title}</h1>
            <h2>{Games.yearOfRelease}</h2>
            <h3>{Games.rating}</h3>
            <p>{Games.review}</p>
            <button placeholder="click" onClick={handleClick}>{!played? "not played": "played"}</button>
        </div>
    )
}