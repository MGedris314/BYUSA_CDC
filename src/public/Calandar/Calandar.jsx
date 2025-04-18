import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Calendar from 'react-calendar';
import './Calandar.css';
import {update_div, CallNotifer} from './Calendar.js'

//Create a function to loop through events and add them to sytem (calendar.js).  Take a look at simon create message array players.jsx

export function Calandar(props) {
    const [date, setDate] = useState(new Date());
    const [events, addevents]=useState([]);
    const [discription, setDiscription]=useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logged_in, setIsloggedIn]=useState(false);
    const username=props.username

    function handle_update(event){
      addevents((prev_events)=>[...prev_events, event]);
    }

    React.useEffect(()=>{
      CallNotifer.addHandler(handleEvents);

      return () => {
        CallNotifer.removeHandler(handleEvents);
      }
    })

    function handleEvents(event){
      console.log(event, events, "Did this work?")
      addevents([...events, event])
    }

    React.useEffect(()=>{
      fetch('api/calendar_post').catch((error)=>{
      console.error('Error',error);
      });
    })

    function message_to_send(){
      const message_array=[];
      for (const [i, thing] of events.entries())
      {
        let message = 'unknown'
        if (thing.from){
          message = thing.from;
        }
        else{
          message="Something went wrong";
          console.log("1401"+discription)
          console.log("structure of thing ", thing.from)
        }

        message_array.push(
          <div key={i} className="trigg_event">
            <span className={'player-event'}>
              {message}
            </span>
          </div>
        )
      }
      return message_array
    }

    useEffect(()=>{
      update_div(handle_update);
    },[]);

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
        // console.log("date = " + date);
        const day_event = events.filter(event => event.date && event.date.toDateString() === date.toDateString());
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

    async function  update_event(){
      await fetch('/api/editor', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (discription) {
        console.log("in the if statement", props.username)
        console.log(discription, "This is supposed to be the discriptoin")
        add_events(date, discription);
        // setDiscription('')
        // websocket broadcast message here.  I think it would look something like
        CallNotifer.broadcastEvent(discription, "Sending side")
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
          <p>Selected date: </p>
        </div>
        <div>
          {events.map((event, index) => (
            <p key={index}>
              {event.event}</p>
          ))}
        </div>
        <div>{message_to_send()}</div>
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