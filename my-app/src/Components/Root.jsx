import { Outlet } from "react-router";
import Nav from "../nav";

// This component will render on load.
export default function Root() {
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div className="m-2.5">
      {/* A <nav> component that links out to /, /teas, and /about. */}
      <Nav />
      {/* Nested routes will render right here. */}
      <Outlet />
      {/* This <footer> will render below every route. */}
      <footer>Mario and Miguels Project for Phase 2</footer>
    </div>
  );
}
