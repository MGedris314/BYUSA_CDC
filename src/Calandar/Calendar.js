import {admin_loggedin} from '../Admin/authState.js';

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
}