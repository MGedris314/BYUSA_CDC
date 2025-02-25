import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import './Admin.css';
import { AuthState } from './authState';
import { log_off } from './authState';
import { log_on } from './authState'

export function Admin(){
    const [adminKey, setAdminKey] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [authState, setAuthState] = useState(false);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAdminKeyChange = (e) => setAdminKey(e.target.value);
    return( 
    <main>
    <div className='body bg-dark text-light'>
    <div className="Fields">
    <label for="username">Username</label>
        <input type="text" id="username" name="username"></input>
    <label for="password">Password</label>
        <input type="text" id="password" name="password"></input>
    <label for="Adminkey">Admin key</label>
        <input type="text" id="Admin" name="Admin"></input>
    </div>
    <div className="buttons">
    <button onClick={log_on}>
        Log in
    </button>
    <button onClick={log_off}>
        log out
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