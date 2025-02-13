import React from "react";
import './Calandar.css';

export default function Calandar(){
    return <div classNameName='body bg-dark text-light'>
        <div class="img_holder">
        <img src="Blank.jpg" alt="Put calandar here"></img>
    </div>
    <div>
        <p>
            Websocket updates regarding club anouncements and who's teaching that week.
        </p>
    </div>
    <a href="index.html">
    <button>
        Return to home page.
    </button>
    <p>
        If they are loged in as an admin, they will be able to edit the calandar here.
    </p>
</a>
    </div>
}