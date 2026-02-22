import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import LakeScene from './components/LakeScene'; 
import './App.css';

// FIX 1: Set autoConnect to false. We will manually connect later!
const socket = io('https://global-wish-lanterns-api.onrender.com', {
    autoConnect: false 
});

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [lanternCount, setLanternCount] = useState(0);
    const [message, setMessage] = useState("");
    const [author, setAuthor] = useState("");
    const [selectedLanternInfo, setSelectedLanternInfo] = useState(null);

    const handleLanternClick = (info) => {
        setSelectedLanternInfo(info);
    };

    const closePopup = () => {
        setSelectedLanternInfo(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim() === "") return;

        socket.emit('send_wish', {
            message: message,
            author: author || "Anonymous",
            // FIX 2: Send dummy coordinates so MongoDB doesn't crash!
            x: 0, 
            y: 0,
            z: 0  
        });

        setMessage("");
        setAuthor("");
    };

    // This function runs the moment the 3D model finishes downloading
    const handleModelLoaded = () => {
        setIsLoading(false); // Hide the loading screen
        socket.connect();    // Connect to backend NOW, so we don't miss the initial wishes!
    };

    return (
        <div className="App">
            
            <div className={`loading-screen ${isLoading ? 'visible' : 'hidden'}`}>
                <h1 className="glowing-text">Lighting the lanterns...</h1>
            </div>

            <LakeScene 
                socket={socket} 
                onLanternClick={handleLanternClick} 
                updateLanternCount={setLanternCount}
                onLoaded={handleModelLoaded} // Use our new function here
            />

            {!isLoading && (
                <div className="ui-container">
                    <div className="lantern-count">
                        Global Wishes: {lanternCount}
                    </div>

                    <form className="wish-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your Name (Optional)" 
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="input-author"
                        />
                        <input 
                            type="text" 
                            placeholder="Type your wish..." 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="input-message"
                            required
                        />
                        <button type="submit" className="submit-btn">Release Lantern</button>
                    </form>
                </div>
            )}

            {selectedLanternInfo && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-box" onClick={(e) => e.stopPropagation()}>
                        <p>{selectedLanternInfo}</p>
                        <button onClick={closePopup} className="close-btn">Close</button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default App;