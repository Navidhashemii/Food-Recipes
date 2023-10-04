import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recepie from './pages/Recepie/Recepie'
import Search from './pages/Search/Search'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/recepies/:id' element={<Recepie/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
