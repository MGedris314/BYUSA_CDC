import React from "react";
import './Admin.css';

export default function Admin(){
    return <div className='body bg-dark text-light'>
<div class="Fields">
    <label for="username">Username</label>
        <input type="text" id="username" name="username"></input>
    <label for="password">Password</label>
        <input type="text" id="password" name="password"></input>
    </div>
    <div class="buttons">
    <button>
        Log in
    </button>
    <button>
        Register
    </button>
    <a href="index.html">
        <button>
            Back
        </button>
    </a>
    </div>
    </div>
}