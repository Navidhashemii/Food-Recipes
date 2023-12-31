import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recepie from './pages/Recepie/Recepie'
import Search from './pages/Search/Search'
import './App.css';
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {

  const {mode} = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
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
