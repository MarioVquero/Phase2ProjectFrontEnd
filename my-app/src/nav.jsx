import { NavLink } from "react-router-dom";


export default function Nav()
{
    return(
        <nav>
            <NavLink to ="/"> 
                Home button    .
            </NavLink>
            <NavLink to="./form">
                form button    .
            </NavLink>
            <NavLink to="./Collection">
                Collection
            </NavLink>
        </nav>
    )
}