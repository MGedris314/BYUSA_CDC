import React from "react";
import { Link } from "react-router-dom";
import {useState} from "react";
import Calendar from 'react-calendar';
import './Calandar.css';

export function Calandar(){
    const [date, setDate] = useState(new Date());

    return (
      <div className='body bg-dark text-light'>
        <div className="img_holder">
          <Calendar onChange={setDate} value={date} />
          <p>Selected date: {date.toDateString()}</p>
        </div>
        <div>
          <p>
            Websocket updates regarding club announcements and who's teaching that week.
          </p>
        </div>
        <Link to="/">
          <button>Home</button>
        </Link>
        <p>
          If logged in as an admin, they can edit the calendar here.
        </p>
        <button>Edit calendar</button>
      </div>
    );
}