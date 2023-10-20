import { NavLink } from "react-router-dom";
// import bootstrap from "bootstrap";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navbar-nav">
        <NavLink class="navbar-brand" href="#" to="/">
          Home
        </NavLink>
        <NavLink class="nav-item nav-link" href="#" to="./form">
          Form
        </NavLink>
        <NavLink class="nav-item nav-link" href="#" to="./Collection">
          Collection
        </NavLink>
      </div>
    </nav>
  );
}
