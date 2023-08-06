import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='nav-container flex-container nav-text'>
            <Link to="/Menu">
                <button>Meny</button>
            </Link>
            Bun Drop
            <Link to="/Basket">
                <button>Varukorg</button>
            </Link>
        </div>
    );
}

export default Navbar;