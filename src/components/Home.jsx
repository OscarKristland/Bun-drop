import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className=''>
            <h1>Välkommen till Bun Drop</h1>
            {/* fixa ikon */}
            <Link to="./Menu">
                <button>Se meny!</button>
            </Link>
        </div>
    );
}

export default Home;