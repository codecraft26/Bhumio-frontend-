import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {


  const [auth, setAuth] = React.useState(true)



  return (
    <div className="header">
       <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="IMDb logo"/></Link>
    <div className="headerRight">
        <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
        <Link to="/product" style={{textDecoration: "none"}}><span>Product</span></Link>


       
     
        <Link to="/About" style={{textDecoration: "none"}}><span>AboutUs</span></Link>

         {/* //if user is logged in then show logout else show login */}
         {

auth ? <Link to="/logout" style={{textDecoration: "none"}}><span>Logout</span></Link>


:
 <Link to="/login" style={{textDecoration: "none"}}><span>Login</span></Link>

}
    </div>    
</div>

    )
}

export default Header