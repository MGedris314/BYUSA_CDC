import React from "react";
import './Home/Home.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import {Home} from './Home/Home';
import { Calandar } from './Calandar/Calandar';
import { Admin } from './Admin/Admin';



export default function App(){
    return (<BrowserRouter>
    <div className='body bg-dark text-light'>
    <title>BYU CSCD</title>
    <header>
        <h1>
            BYU Country swing dance club home page
        </h1>
    <menu className='navbar-nav'>
    <nav className="button_grid">
    <NavLink to="/Calandar" className="Calandar">
        <button>
            Club calandar
        </button>
    </NavLink>
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
    <NavLink to="/Admin" className="Admin">
        <button>
            Instructor Log in
        </button>
    </NavLink>
    <a className="social">
        <button>
            Instagram link
        </button>

    </a>
    </nav>
    </menu>
    </header>
    <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/Calandar' element={<Calandar />} />
        <Route path='/Admin' element={<Admin />} />
    </Routes>
    <footer>
    <a href="https://github.com/MGedris314/BYUSA_CDC" target="_blank" className="link">
        <p>
            github repository
        </p>
    </a>
    <a>
        <p>
            Matthew Gedris
        </p>
    </a>
    </footer>
    </div>
    </BrowserRouter>);
}

