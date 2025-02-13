import React from "react";
import './Home/Home.css';

export default function App(){
    return <div classNameNameName='body bg-dark text-light'>
    <title>BYU CSCD</title>
    <header>
        <h1>
            BYU Country swing dance club home page
        </h1>
    </header>
    <nav classNameName="button_grid">
    <a href="Calandar.html" classNameName="calandar">
        <button>
            Calandar view
        </button>
    </a>
    <a classNameName="waver">
        <button>
            Link to waver
        </button>

    </a>
    <a href="https://clubs.byu.edu/link/Clubs/CSD" target="_blank" classNameName="club_link">
        <button>
            Join the club
        </button>
    </a>
    <a href="Admin_login.html" classNameName="log_in">
        <button>
            Instructor Log in
        </button>
    </a>
    <a classNameName="social">
        <button>
            Instagram link
        </button>

    </a>
    </nav>
    <footer>
    <a href="https://github.com/MGedris314/BYUSA_CDC" target="_blank" classNameName="link">
        <p>
            github repository
        </p>
    </a>
    </footer>
    </div>;
}

