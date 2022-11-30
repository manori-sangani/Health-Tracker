import React from 'react'
// import logo from './favicon-32x32.png'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Link} from "react-router-dom"

function Navbar(props) {
  return (
    <>
    
      <nav className="navbar navbar-inverse navbar-fixed-top navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: '#505050'}}>
        <div style={{padding: '1px', paddingLeft: '20px'}}>
        <div className="navbar-brand " style={{color: 'greenyellow'}}>
        <Link to="/">
            {/* <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/> */}
        </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Health Tracker          
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>             

        <div className="nav justify-content-end collapse navbar-collapse mx-5" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link to="/login" className="nav-link" style={{color: 'lightgray'}}>Log In / Log Out</Link>
            </li>            
            {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
            </li> */}
            </ul>            
        </div>
        </nav>
    
    </>
  )
}

Navbar.propTypes = {

}

export default Navbar
