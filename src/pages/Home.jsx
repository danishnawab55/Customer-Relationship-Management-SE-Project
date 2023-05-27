import React from 'react'
import Footer1 from '../components/Footer1'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='p-2'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="images/logo.png" alt="" width="50" height="50" className="d-inline-block align-text-top me-3" />
                    </a>
                </div>
            </nav>
            <div className='d-flex justify-content-end mt-3 me-3'>
                <Link to="/login"><button type="button" className="btn btn-danger">Get Started</button></Link>
            </div>
            <div>
                <b><h1 class="display-1 text-primary">CUSTOMER RELATIONSHIP MANAGEMENT</h1></b>
                <p className='w-75 lead'>Customer relationship management (CRM) is a technology for managing all your company's relationships and interactions with customers and potential customers. The goal is simple: Improve business relationships. A CRM system helps companies stay connected to customers, streamline processes, and improve profitability.</p>

                <div className='container mt-5'>
                    <img className='w-100' src="images/CRM.png" alt="" />
                </div>

                <div className='mt-5 text-center bg-light'>
                    <h2>"Streamline Your Relationships, Propel Your Success: Our CRM Web App"</h2>
                    <Link to="/login"><button type="button" className="btn btn-danger w-50 mt-3">Get Started</button></Link>
                </div>


            </div>
            <div>
                <Footer1></Footer1>
            </div>
        </div>
    )
}
