import './App.css';
import Sidebar from './components/Sidebar';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
import Connect from './pages/Connect';

function App() {
  return (
    <div id="page">
      <Sidebar id="sidebar" />
      <Router id="content">
        <Home path="/" />
        <Photos path="/destinations/:place" />
        <About path="/about" />
        <Connect path="/connect" />
      </Router>
    </div>
  );
}

export default App;
