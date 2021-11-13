import './App.css';
import Nav from './Nav';
import KeycodesPage from './KeycodesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div id="content">
        <Nav />
        <Routes>
          <Route path="/" element={<h3>Home</h3>} />
          <Route path="keycodes" element={<KeycodesPage />} />
        </Routes>
      </div>
      <div id="footer">Developed by Christian Ereira - View source at <a href="https://github.com/ChristianEreira/WebTools">GitHub</a></div>
    </Router>
  );
}

export default App;
