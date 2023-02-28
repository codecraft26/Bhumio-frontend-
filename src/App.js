import React from 'react'
import { BrowserRouter  as  Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'

import Home from './components/Home/Home'
import Login from './components/Login/Login'


const App = () => {
  const [auth, setAuth] = React.useState(false)

  return (


   <Router>


 

   

    <Header/>
    <Routes>


      
      <Route path="/login" element={<Login/>}/> 
      

      <Route path="/" element={<Home/>}/>

    </Routes>

   </Router>
    )
}

export default App