import './App.css';

function KeycodesPage() {
  return (
    <div className="centerVert">
      <p className="section">Press any key to get the JavaScript keycode</p>
      <p className="bigNumber">33</p>
      <div id="keycodeTable">
        <div id="keycodeTableLeft">
          <p>event.key</p>
          <p>event.code</p>
          <p>event.which</p>
        </div>
        <div id="keycodeTableSeperator"></div>
        <div>
          <p>...</p>
          <p>...</p>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}

export default KeycodesPage;
