import './App.css';
import Nav from './Nav';
import KeycodesPage from './KeycodesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<h3>Home</h3>}/>
          <Route path="keycodes" element={<KeycodesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
