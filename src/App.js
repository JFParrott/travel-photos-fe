import './App.css';
import Sidebar from './components/Sidebar';
import { Router } from '@reach/router';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
import Connect from './pages/Connect';
import ErrorDisplayer from './components/ErrorDisplayer';

function App() {
  return (
    <div id="page">
      <Sidebar id="sidebar" />
      <Router id="content">
        <Home path="/" />
        <Photos path="/destinations/:place" />
        <About path="/about" />
        <Connect path="/connect" />
        <ErrorDisplayer default msg="Page does not exist" status="404" />
      </Router>
    </div>
  );
}

export default App;
