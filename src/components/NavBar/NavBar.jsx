import CartWidget from "../CartWidget/CartWidget";
import React from 'react';
import { Link , NavLink } from "react-router-dom"
const NavBar = () => {
    return (
        <nav>
            {}
            <h1>
                <Link to="/">Dead By Daylight</Link>
            </h1>
            {}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/category/survivors">Supervivientes</NavLink> 
                </li>
                <li className="nav-item">
                    <NavLink to="/category/killers">Asesinos</NavLink> 
                </li>
            </ul>
        </div>
    </div>
        </nav>
            {}
            <div>CartWidget</div>
        </nav>
    )
};
export default NavBar;