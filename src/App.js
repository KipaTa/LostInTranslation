import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Startup from './Views/Startup';
import Translation from './Views/Translation';
import Profile from './Views/Profile';

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
