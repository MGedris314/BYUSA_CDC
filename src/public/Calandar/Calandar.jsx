import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import './Calandar.css';

export function Calandar() {
    const [date, setDate] = useState(new Date());
    const [events, addevents]=useState([]);
    const [discription, setDiscription]=useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logged_in, setIsloggedIn]=useState(false);

    const add_events =(date, event) =>{
      addevents([...events, {date, event}]);
    };

    const insert_event = (date) => {
      const event = prompt ("Please enter details about the evnet.");
      if (event){
        add_events(date, event)
      }
    }

    const change_event_text = (e) =>{
      setDiscription(e.target.value);
    };

    //The avbove code handles everything for taking in event data.  Bellow will render it on the designated day.

    const render_event = ({date, view}) => {
      if (view === 'month'){
        const day_event = events.filter(event=> event.date.toDateString()===date.toDateString());
        return (
          <ul>
            {day_event.map((event, index)=>( <li key={index}>{event.event}</li>))}
          </ul>
        );
      }
    };

    const change_day =(date)=>{
      setDate(date);
    }

    useEffect(()=>{
      const loggedIn=localStorage.getItem('logged_in')==='true';
      setIsloggedIn(loggedIn);
    }, []);

    const openModal = () => {
      if (logged_in){
        setIsModalOpen(true);
      }
      else {
        alert("To edit callendar, you must be logged in.")
      }
    };

    const update_event = () => {
      if (discription) {
        add_events(date, discription);
        setDiscription('')
      }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
      <div className='body bg-dark text-light'>
        <div className="img_holder">
          <Calendar onChange={setDate} value={date} onClickDay={change_day} 
          tileContent={render_event} calendarType="gregory" />
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
        <button onClick={openModal}>Edit calendar</button>
        {isModalOpen && (
          <div className="modal-content">
            <button id="close" onClick={closeModal}>&times;</button>
            <input type="text" value={discription} onChange={change_event_text} 
            placeholder="Info about the event.">
            </input>
            <button onClick={update_event}>Update</button>
            
          </div>
        )}
      </div>
    );
  }