import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Cus_info() {
    return (
        <div>
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
            <br></br>
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        Customer Basic Info.
                    </div>
                </nav>
            </div>


            <div className=''>
                <div className='mt-3 container'>
                    <form action="">
                        <label className='p-2 me-3' htmlFor="">Customer ID:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">First Name:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">Last Name:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">Email:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">Address:</label>
                        <input className='w-50' type="address" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">Street:</label>
                        <input className='w-50' type="text" />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">City:</label>
                        <input className='w-50' type="text" required />
                        <hr />
                        <label className='p-2 me-3' htmlFor="">State:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <label className='p-2 me-3' htmlFor="">Pin Code:</label>
                        <input className='w-50' type="text" required />
                        <hr />
                        <label className='p-2 me-3' htmlFor="">Country:</label>
                        <input className='w-50' type="text" required />
                        <hr />


                        <label className='p-2 me-3' htmlFor="">Password:</label>
                        <input className='w-50' type="text" required />
                        <hr />

                        <div class="d-grid gap-2 d-md-block">
                            <button class="btn btn-primary me-5" type="button">Create Employee</button>
                            <Link to='/Customer'><button class="btn btn-primary" type="button">Back to list</button></Link>
                        </div>
                    </form>
                    {/* <div>
                        <form>
                            <label className='p-2 me-3' htmlFor="">Shipping Address:</label>
                            <input className='w-50' type="text" required />
                            <hr />
                            <label className='p-2 me-3' htmlFor="">Street:</label>
                            <input className='w-50' type="text" required />
                            <hr />
                            <label className='p-2 me-3' htmlFor="">City:</label>
                            <input className='w-50' type="text" required />
                            <hr />
                            <label className='p-2 me-3' htmlFor="">State:</label>
                            <input className='w-50' type="text" required />
                            <hr />
                            <label className='p-2 me-3' htmlFor="">Pin Code:</label>
                            <input className='w-50' type="text" required />
                            <hr />
                            <label className='p-2 me-3' htmlFor="">Country:</label>
                            <input className='w-50' type="select" required />
                            <hr />
                        </form>
                    </div> */}
                </div>

            </div>



            <Footer></Footer>
        </div >
    )
}
