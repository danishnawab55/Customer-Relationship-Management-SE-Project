import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import './select.css'

export default function Select() {
    return (
        <div className='App'>
            <div className='content'>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top me-3" />
                            
                        </a>
                        <div>
                            <button className='btn btn-danger'><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
                        </div>
                    </div>
                </nav>

                <div className='row mt-5'>
                    <div className='col-5 text-center me-5 p-3 border'>
                        <Link to="/Admin">
                            <i className="fa-solid fa-user-tie"></i>
                            <h3 className='text-info'>Administrator</h3>
                        </Link>
                    </div>

                    <div className='col-5 text-center ms-5 p-3 border'>
                        <Link to='/Customer'>
                            <i className="fa-solid fa-users"></i>
                            <h3 className='text-info'>Customer</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <Footer></Footer>
            </div>
        </div>
    )
}

{/* <i className="fa-solid fa-user-tie"></i>
<i className="fa-solid fa-users"></i> */}