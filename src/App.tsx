import './App.css';
import { BrowserRouter as Router, Route, Outlet, Link, Routes, useLinkClickHandler } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
