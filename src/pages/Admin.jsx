import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Admin() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    </a>
                    <div>
                        <Link to='/Login'>
                            <button className='btn btn-danger'><i className="fa-solid fa-right-from-bracket"></i> Logout</button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div>
                <div className='row'>
                    <div className='col-3 text-secondary border-end'>
                        <p>Navigation</p>
                        <button className='btn border'>Home</button>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Employee
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/Employee" className="dropdown-item">Employee Info</Link></li>
                                <li><a className="dropdown-item" href="#">Sales Target</a></li>

                            </ul>
                        </div>
                        <button className='btn border'>Company Profile</button>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Configuration
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Employee Info</a></li>
                                <li><a className="dropdown-item" href="#">Sales Target</a></li>

                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Back Office setup
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Employee Info</a></li>
                                <li><a className="dropdown-item" href="#">Sales Target</a></li>

                            </ul>
                        </div>

                    </div>
                    <div className='col-9 text-center'>
                        <h1 className='display-1 mt-5' >Hi Buddy,</h1>
                        <h1 className='mt-3'> Welcome to Administrator</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

