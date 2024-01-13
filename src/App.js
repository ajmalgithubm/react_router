import Home from './components/Home';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
