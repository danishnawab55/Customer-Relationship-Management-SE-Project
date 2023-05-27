import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import './customer.css'

export default function Customer() {
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
                    <div className='col-2 text-secondary border-end'>
                        <p>Navigation</p>
                        {/* <button className='btn border'>Home</button><br></br> */}
                        <Link to='/Customer'>
                            <button className='btn border'>Dashboard</button><br></br>
                        </Link>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Customer Info
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Link to="/Cus_info" className="dropdown-item">Add Customer</Link></li>
                                <li><a className="dropdown-item" href="#">Accounts</a></li>

                            </ul>
                        </div>
                        <button className='btn border'>Contacts</button><br></br>
                        <button className='btn border'>Opportunities</button><br></br>
                        <button className='btn border'>Leads</button><br></br>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle border" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Activities
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
                        <button className='btn border'>Campaign</button>
                        <br></br>

                    </div>

                    <div className='col-7 text-center mt-5' >
                        <h1 className='display-1'>Hi Buddy,</h1>
                        <h1> Welcome to Customer Management.</h1>

                        <div className='d-flex gap-5 justify-content-center mt-5 pt-4 '>
                            <div className='border border-info p-2 bg-primary text-white'>
                                <h6>TARGET</h6>
                                <span className='lead'>600,000,000.00</span>
                            </div>

                            <div className='border border-info p-2 bg-info text-white'>
                                <h6>ONGOING</h6>
                                <span className='lead'>38,000,000.00</span>
                            </div>

                            <div className='border border-info p-2 bg-success text-white'>
                                <h6>ACHIEVED</h6>
                                <span className='lead'>75,000,000.00</span>
                            </div>

                            <div className='border border-info p-2 bg-danger text-white'>
                                <h6>LOST</h6>
                                <span className='lead'>40,000,000.00</span>
                            </div>
                        </div>
                    </div>


                    <div className='col-3 '>
                        <div className="notice-board">
                            <h2 className='mb-3 '>Upcoming Tasks:  </h2>
                            <ul>
                                <li className='border-3 p-2 border-start'><span className='text-primary'>Counselling to byer</span> has high priority.
                                    Related to <span className='text-primary'>Opportunity</span>. <br />
                                    <span className='text-secondary'><i>12 May 2023 - 27 May 2023</i></span>
                                </li>
                            </ul>
                        </div>

                        <div className=" mt-5 notice-board">
                            <h2>Upcoming Events: </h2>
                            <ul>
                                <li className='border-3 p-2 border-start'><span className='text-primary'>Laptop Sale</span> has budget Rs. 40,000 but actual cost Rs.60,000 and expect revenue 0.00.  <br />
                                    <span className='text-secondary'><i>20 May, 2023</i></span>
                                </li>
                                <li className='border-3 p-2 border-start'><span className='text-primary'>Hardisk Sale</span> has budget Rs. 20,000 but actual cost Rs.30,000 and expect revenue 0.00.  <br />
                                    <span className='text-secondary'><i>23 May, 2023</i></span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

