import React from 'react'
import { BrowserRouter  as  Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import About from './components/About/About'

const App = () => {
  const [auth, setAuth] = React.useState(true)

  return (


   <Router>


 

   

    <Header/>
    <Routes>


      
      <Route path="/login" element={<Login/>}/> 
      

      <Route path="/" element={<Home/>}/>


      <Route path="/About" element={<About/>}/>

    </Routes>

   </Router>
    )
}

export default App