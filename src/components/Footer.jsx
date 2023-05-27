import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <div className='foot p-3 mt-5'>
            <footer className="footer">
                <div className="container">
                    <p className="text-center">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>
            {/* <div>
                <p>Premanshu Sharma</p>
                <p>Danish Nawab</p>
                <p>Sujyoti Nam Singh</p>
                <p>Nidhish Ranjan</p>
                <p>Debajit Dutta</p>
                <p>Suman Shil</p>
                <p>Amar Kumar</p>
            </div> */}
            
        </div>
    )
}
