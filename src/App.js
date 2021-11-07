import './App.css';
import Nav from './Nav';
import KeycodesPage from './KeycodesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="content">
        <Nav />
        <Routes>
          <Route path="/" element={<h3>Home</h3>} />
          <Route path="keycodes" element={<KeycodesPage />} />
        </Routes>
      </div>
      <div id="footer">Footer text</div>
    </Router>
  );
}

export default App;
