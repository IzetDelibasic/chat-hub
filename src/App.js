import './App.css';
import React, { useState , useRef} from 'react';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat';
import {signOut} from 'firebase/auth';
import {auth} from './firebase-config';
const cookies = new Cookies();

function App() {
  const authToken = cookies.get("auth-token");
  const [isAuth, setIsAuth] = useState(authToken !== null && authToken !== undefined);

  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async  () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setRoom(null);
  }

  console.log("isAuth value:", isAuth);
  if(!isAuth){
    return (
      <div className='App'> 
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return ( 
    <>{room ? (<Chat room={room} />
  ) : (
    <div className='room'> 
      <label>Enter Room Name:</label>
      <input ref={roomInputRef}/>
      <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat</button>
    </div>  

  )}
  <div className='sign-out'>
    <button onClick={signUserOut} className='sign-out-button' id='sign-out-button'>Sign Out</button>
  </div>
  </>
  );
}

export default App;
