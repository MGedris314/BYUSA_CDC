import React from "react";
import { Link } from "react-router-dom";
import './Admin.css';

export function Admin(){
    return( 
    <main>
    <div className='body bg-dark text-light'>
    <div className="Fields">
    <label for="username">Username</label>
        <input type="text" id="username" name="username"></input>
    <label for="password">Password</label>
        <input type="text" id="password" name="password"></input>
    </div>
    <div className="buttons">
    <button>
        Log in
    </button>
    <button>
        Register
    </button>
    <Link to="/">
        <button>
            Home
        </button>
    </Link>
    </div>
    </div>
    </main>
    );
}