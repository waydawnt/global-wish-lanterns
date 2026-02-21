import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import LakeScene from './components/LakeScene';
import './App.css';

// Connect to our Node.js server
const socket = io('http://localhost:5000');

function App() {
  const [wish, setWish] = useState('');
  const [activeMessage, setActiveMessage] = useState(null);

  const releaseLantern = () => {
    if (!wish.trim()) return;

    // Generate random coordinates for the lantern on the lake
    const wishData = {
      message: wish,
      x: (Math.random() - 0.5) * 40, // Spread them out
      y: 0.75,                       // Float on water surface
      z: (Math.random() - 0.5) * 40
    };

    // Send to server!
    socket.emit('send_wish', wishData);
    setWish(''); // Clear the box
  };

  return (
    <div className="App">
      <LakeScene socket={socket} onLanternClick={(msg) => setActiveMessage(msg)} />

      {/* The UI Overlay */}
      <div className="ui-container">
        <input 
          type="text" 
          placeholder="Type a wish for the world..." 
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <button onClick={releaseLantern}>Release Lantern 🏮</button>
      </div>

      {/* Show message when a lantern is tapped */}
      {activeMessage && (
        <div className="message-popup" onClick={() => setActiveMessage(null)}>
          <p>"{activeMessage}"</p>
          <small>(Tap to close)</small>
        </div>
      )}
    </div>
  );
}

export default App;