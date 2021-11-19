import './App.css';
import { useState, useEffect } from 'react';

function KeycodesPage() {
  const [keyEvent, setKeyEvent] = useState({ key: "...", code: "...", which: "..." });

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      setKeyEvent(e);
      console.log(e);
    });
  }, []);

  return (
    <div className="centerVert">
      <p className="section">Press any key to get the JavaScript keycode</p>
      <p className="bigNumber">{keyEvent.which}</p>
      <div id="keycodeTable">
        <div id="keycodeTableLeft">
          <p>event.key</p>
          <p>event.code</p>
          <p>event.which</p>
        </div>
        <div id="keycodeTableSeperator"></div>
        <div>
          <p>{keyEvent.key == " " ? '" "' : keyEvent.key}</p>
          <p>{keyEvent.code}</p>
          <p>{keyEvent.which}</p>
        </div>
      </div>
    </div>
  );
}

export default KeycodesPage;
