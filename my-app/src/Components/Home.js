import React, { useEffect, useState } from "react";
import Games from "./Games";
import Description from "./Description";
import Nav from "../nav";

export default function Home({URL})
{
    //state for holding game info
    const [games, setGames] = useState([])

    //initial fetch for getting info from db.json
    useEffect(() => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setGames(data))
    },[])


    
    //show navbar at all times to go to different pages
    //and passing down games to both Games
    return (
        <div>
            <Nav />
            <Games Games={games}/>
        </div>
        
    )
}
