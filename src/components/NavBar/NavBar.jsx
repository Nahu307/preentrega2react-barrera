import CartWidget from "../CartWidget/CartWidget";
import React from 'react';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            {}
            <h1>Dead By Daylight</h1>
            {}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid mx-auto text-center"> {/* Agregamos las clases mx-auto y text-center */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/pages/survivors.html">Survivors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/pages/killers.html">Killers</a>
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