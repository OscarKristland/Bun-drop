import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav-container flex-container nav-text'>
            <Link to="/Menu">
                <button className="snygg-knapp">Meny</button>
            </Link>
            <h3 className="site-name">Bun Drop</h3>
            <Link to="/Basket">
                <button className="snygg-knapp">Varukorg</button>
            </Link>
        </div>
    );
}

export default Navbar;