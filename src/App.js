import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Startup from './components/Startup';
import Translation from './components/Translation';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      
        <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
