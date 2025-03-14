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
    
    const Chuck = () => {
        const [joke, set_joke]=useState(null);
        useEffect(()=>{
            const fetch_chuck=async() => {
                const url ="https://api.chucknorris.io/jokes/random?category=dev";
                try{
                    const response = await fetch(url);
                    const data = await response.json();
                    set_joke(data);
                }
                catch(error){
                    console.log("We have this error, but Chuck Norris doesn't", error);
                }
            };
            fetch_chuck();
        }, [])

    return (
        <div>
        {joke ? (
        <pre>{JSON.stringify(joke, null, 2)}</pre>
        ) : (
        <p>Loading...</p>
        )}
        </div>
    );
    }

    const register = async(username, password) =>{
        if (!username || !password) {
        console.log('Please enter both a username and a password')
        return;
        }
        try {
                const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: username, password: password }),
            });

            if (response.ok) {;
                console.log('Registration complete');
            } 
            else {
                console.log('User already exists or another error occurred.');
            }
        } 
        catch (error) {
            console.error('Error:', error);
        }
    }

    async function log_user() {
    try {
    const response = await fetch('/api/login', {
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
    function log_out() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
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
        <button onClick={() => log_user()}>
            Log in
        </button>
        <button onClick={()=>log_out()}>
            log out
        </button>
        <button onClick={() => register(username, password)}>
            Register
        </button>
        <Link to="/">
        <button>
            Home
        </button>
        </Link>
        </div>
            <Chuck />
        </div>
        </main>
        );
    }