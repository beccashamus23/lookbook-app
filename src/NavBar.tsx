import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar-container">
      <NavLink className = "loc"  to="/">HOME | </NavLink>
      <NavLink className = "loc" to="/Nashville">NASHVILLE | </NavLink>
      <NavLink className = "loc" to="/Nyc">NEW YORK CITY | </NavLink>
      <NavLink className = "loc" to="/Miami">MIAMI | </NavLink>
    </nav>
  );
}