import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import { Routes, Route } from 'react-router-dom';
import ContactUs from './Component/ContactUs';

function App() {
  return (
    <div className='overflow-x-hidden '>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
