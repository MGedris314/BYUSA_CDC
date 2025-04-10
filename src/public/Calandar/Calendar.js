import {admin_loggedin} from '../Admin/authState.js';

var modal = document.getElementById("pop_out");
var closeButton=document.getElementById("CloseButton")

const web_events = {
    System: 'system'
};

class Event_message{
    constructor(from){
        this.from=from
    }
}
export function edditor(){
    if (admin_loggedin==true){
        alert("I'm doing things")
    }
    else if (admin_loggedin==false){
        alert("Still having some success")
    }
    else{
        alert("Something didn't work.")
    }
    modal.style.display = "block";
}

class CallEventNotifier {
    events = [];
    handlers = [];

    constructor() {
        let port = window.location.port;
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);
        this.socket.onopen = (event) => {
        this.receiveEvent(new Event_message('Simon', web_events.System, { msg: 'connected' }));
        };
        this.socket.onclose = (event) => {
        this.receiveEvent(new Event_message('Simon', web_events.System, { msg: 'disconnected' }));
        };
        this.socket.onmessage = async (msg) => {
        try {
            const event = JSON.parse(await msg.data.text());
            this.receiveEvent(event);
        } catch {}
        };
}

broadcastEvent(from) {
    const event = new Event_message(from);
    this.socket.send(JSON.stringify(event));
}

addHandler(handler) {
    this.handlers.push(handler);
}

removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
}

receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
        handler(handler);
    });
}
}

function update_div(event){
console.log(event)   
}

const CallNotifer=new CallEventNotifier
CallNotifer.addHandler(update_div)

export function close(){
    modal.style.display="none"
}


export {CallNotifer, web_events, update_div}