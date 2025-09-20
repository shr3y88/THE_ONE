import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {
   const location = useLocation();

  const hideNavbarOn = ["/navbar"];


  return (
    
    <div  >
      
  {!hideNavbarOn.includes(location.pathname) && <Navbar />}
  

  

   <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agents/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/navbar' element={<FullScreenNav/>}/>
    </Routes>
    </div>
  )
}

export default App