import {admin_loggedin} from '../Admin/authState.js';

var modal = document.getElementById("pop_out");
var closeButton=document.getElementById("CloseButton")

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

export function close(){
    modal.style.display="none"
}