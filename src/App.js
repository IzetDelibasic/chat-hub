import './App.css';
import React, { useState , useRef} from 'react';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat';
const cookies = new Cookies();

function App() {
  const authToken = cookies.get("auth-token");
  const [isAuth, setIsAuth] = useState(authToken !== null && authToken !== undefined);

  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  console.log("isAuth value:", isAuth);
  if(!isAuth){
    return (
      <div className='App'> 
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return ( 
    <div>{room ? (<Chat room={room} />
  ) : (
    <div className='room'> 
      <label>Enter Room Name:</label>
      <input ref={roomInputRef}/>
      <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat</button>
    </div>  

  )}
  </div>
  );
}

export default App;
