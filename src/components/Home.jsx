import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='greeting'>
            <h1>Välkommen till Bun Drop! Klicka på meny knappen för att se våran meny.</h1>
            {/* fixa ikon */}
            <Link to="./Menu">
                <button class="snygg-knapp" >Se meny!</button>
            </Link>
        </div>
    );
}

export default Home;