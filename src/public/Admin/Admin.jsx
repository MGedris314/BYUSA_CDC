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
    const [user, setUser] = useState(localStorage.getItem('user') || null)
    const [authState, setAuthState] = useState(false);
    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleAdminKeyChange = (e) => setAdminKey(e.target.value);

    async function log_user() {
        try {
          const response = await fetch('http://localhost:4000/login', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: username, password: password })
          });
      
          if (!response.ok) {
            throw new Error('Login failed');
          }
      
          const data = await response.json();
          localStorage.setItem('username', data.user);
          localStorage.setItem('logged_in', 'true');
          console.log("logged in");
        } catch (error) {
          console.error('Error:', error);
        }
      }
    function log_out(){
        setUsername('');
        setAdminKey('');
        setPassword('');

        localStorage.setItem('logged_in','false')
    }
    function User_Change(e){
        setUsername(e.target.value);
    }
    function Pass_Change(e){
        setPassword(e.target.value);
    }
    function Key_Change(e){
        setAdminKey(e.target.value);        
    }
    return( 
    <main>
    <div className='body bg-dark text-light'>
    <div className="Fields">
    <label for="username">Username</label>
        <input type="text" id="username" name="username" onChange={User_Change}></input>
    <label for="password">Password</label>
        <input type="text" id="password" name="password" onChange={Pass_Change}></input>
    {/* <label for="Adminkey">Admin key</label> */}
        {/* <input type="text" id="Admin" name="Admin" onChange={Key_Change}></input> */}
    </div>
    <div className="buttons">
    <button onClick={log_user}>
        Log in
    </button>
    <button onClick={log_out}>
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