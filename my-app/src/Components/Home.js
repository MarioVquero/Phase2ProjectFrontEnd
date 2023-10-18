import React, { useEffect, useState } from "react";
import Games from "./Games";
import Description from "./Description";
import Nav from "../nav";
import { useFetcher } from "react-router-dom";

export default function Home({URL})
{
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    return (
        <div>
            <Nav />
            <Games Games={games}/>
        </div>
        
    )
}
