import React from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Link} from "react-router-dom"

function Login(props) {
  return (
    <div style={{paddingTop: '40px'}}>
        <section>
        <div className="container h-80">
            <div className="row d-flex justify-content-center align-items-center h-80">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{borderRadius: '25px', height: '430px'}}>
                <div className="card-body p-md-2">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h2 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign in</p>

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                            <input type="email" id="form3Example3c" className="form-control" placeholder='example@laesfera.co'/>                            
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                            <input type="password" id="form3Example4c" className="form-control" placeholder='Password'/>                            
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg"><Link to="/dashboard" className='text-decoration-none' style={{color: 'white'}}>Login</Link></button>
                        </div>                        

                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Login
