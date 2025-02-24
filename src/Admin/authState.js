// Variables
let admin_loggedin= false;

// Exported functions
export class AuthState {
    static Unknown = new AuthState('unknown');
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');
  
    constructor(name) {
      this.name = name;
    }
  }

export function log_on(){
  if (admin_loggedin==false){
      admin_loggedin=true;
      alert("Success!")
  }
  else{
    alert("You've alerady logged in.")   
  }
}

export function log_off(){
  if (admin_loggedin==true){
      admin_loggedin=false;
      alert("Success!")
  }
  else{
    alert("You've alerady logged off.")
  }
}