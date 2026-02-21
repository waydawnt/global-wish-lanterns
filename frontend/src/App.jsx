import { useState } from 'react';
import io from 'socket.io-client';
import LakeScene from './components/LakeScene';
import './App.css';

const socket = io('https://global-wish-lanterns-api.onrender.com'); // Remember your Render URL for production!

function App() {
  const [wish, setWish] = useState('');
  const [author, setAuthor] = useState(''); // NEW: State for the username
  const [activeMessage, setActiveMessage] = useState(null);
  const [lanternCount, setLanternCount] = useState(0); 

  const releaseLantern = () => {
    if (!wish.trim()) return;

    const wishData = {
      message: wish,
      author: author.trim() || 'Anonymous', // NEW: Send the name (or default to Anonymous)
      x: 0, // We don't need random X, Y, Z anymore because Three.js will handle it!
      y: 0,
      z: 0
    };

    socket.emit('send_wish', wishData);
    setWish(''); 
  };

  return (
    <div className="App">
      <div className="lantern-count">
        🏮 Global Wishes: {lanternCount}
      </div>

      <LakeScene 
        socket={socket} 
        onLanternClick={(msg) => setActiveMessage(msg)} 
        updateLanternCount={setLanternCount} 
      />

      <div className="ui-container">
        {/* NEW: Input field for Name */}
        <input 
          type="text" 
          placeholder="Your Name (Optional)" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ marginBottom: '5px' }}
        />
        <input 
          type="text" 
          placeholder="Type a wish for the world..." 
          value={wish}
          onChange={(e) => setWish(e.target.value)}
        />
        <button onClick={releaseLantern}>Release Lantern 🏮</button>
      </div>

      {activeMessage && (
        <div className="message-popup" onClick={() => setActiveMessage(null)}>
          <p>{activeMessage}</p>
          <small>(Tap to close)</small>
        </div>
      )}
    </div>
  );
}

export default App;