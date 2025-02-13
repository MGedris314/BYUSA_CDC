import React from "react";
import './Home/Home.css';

export default function App(){
    return <div classNameName='body bg-dark text-light'>
    <title>BYU CSCD</title>
    <header>
        <h1>
            BYU Country swing dance club home page
        </h1>
    </header>
    <nav className="button_grid">
    <a href="Calandar.html" className="calandar">
        <button>
            Calandar view
        </button>
    </a>
    <a className="waver">
        <button>
            Link to waver
        </button>

    </a>
    <a href="https://clubs.byu.edu/link/Clubs/CSD" target="_blank" className="club_link">
        <button>
            Join the club
        </button>
    </a>
    <a href="Admin_login.html" className="log_in">
        <button>
            Instructor Log in
        </button>
    </a>
    <a className="social">
        <button>
            Instagram link
        </button>

    </a>
    </nav>
    <footer>
    <a href="https://github.com/MGedris314/BYUSA_CDC" target="_blank" className="link">
        <p>
            github repository
        </p>
    </a>
    </footer>
    </div>;
}

