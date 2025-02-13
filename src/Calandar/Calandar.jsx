import React from "react";
import { Link } from "react-router-dom";
import './Calandar.css';

export function Calandar(){
    return <div classNameName='body bg-dark text-light'>
        <div class="img_holder">
        <img src="Blank.jpg" alt="Put calandar here"></img>
    </div>
    <div>
        <p>
            Websocket updates regarding club anouncements and who's teaching that week.
        </p>
    </div>
    <Link to="/">
        <button>
            Home
        </button>
    </Link>
    <p>
        If they are loged in as an admin, they will be able to edit the calandar here.
    </p>
    </div>
}