import React from 'react'
import {BrowserRouter as Router, Link} from "react-router-dom"
import PropTypes from 'prop-types'

function Sidebar(props) {
  return (    
    
    <div className='app-sidebar' style={{fontSize: 15}}>
            <div className="d-flex flex-column flex-shrink-0 p-3 shadow-lg" style={{height: props.height, backgroundColor: "#282828"}} >
            <Link to="/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <span className="fs-4 nav-link" style={{color: '#E0E0E0', fontSize: 40}}>Dashboard</span>
            </Link>
            <hr style={{color: '#E0E0E0'}}/>
            <div className="nav nav-pills flex-column mb-auto" style={{textAlign: 'left', fontSize: 15}}>
            {/* <ul className="nav nav-pills flex-column mb-auto"> */}
                <br></br><Link to="/p_details" className="nav-link text-decoration-none" style={{color: '#E0E0E0'}}>Insert Patient Details</Link>
                <br></br><Link to="/gender" className="nav-link text-decoration-none" style={{color: '#E0E0E0'}}>Gender Wise Report</Link>
                <br></br><Link to="/age" className="nav-link text-decoration-none" style={{color: '#E0E0E0'}}>Age Wise Report</Link>
                <br></br><Link to="/p_summary" className="nav-link text-decoration-none" style={{color: '#E0E0E0'}}>Patient Summary</Link>
                {/* <Link to="/p_modify" className="nav-link text-decoration-none" style={{color: '#E0E0E0'}}>Modify Patient Details</Link> */}
                
            </div>
            {/* <hr/> */}
            {/* <div className="dropdown">
            <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                <strong>mdo</strong>
            </a> */}
            {/* <div className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                <p><a className="dropdown-item" href="/">New project...</a></p>
                <p><a className="dropdown-item" href="/">Settings</a></p>
                <p><a className="dropdown-item" href="/">Profile</a></p>
                <p><hr className="dropdown-divider"/></p>
                <p><a className="dropdown-item" href="/">Sign out</a></p>
            </div>
            </div> */}
        </div>
    </div>
    
  )
}

Sidebar.propTypes = {
    height: PropTypes.string,
}

export default Sidebar
