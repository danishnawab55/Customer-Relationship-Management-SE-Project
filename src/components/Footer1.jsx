import React from 'react'
import './footer.css'

export default function Footer1() {
    return (
        <div className='foot p-3 mt-5'>
            <footer className="footer">
                <div className="container">
                    <p className="text-center">© {new Date().getFullYear()} All rights reserved.</p>
                </div>
            </footer>
            <div className='p-2 text-center'>
                <b>Creators:</b><br />
                Danish Nawab(93)<br></br>
                Sujyoti Nam Singh(94)<br></br>
                Amar Kumar(95)<br></br>
                Suman Shil(96)<br></br>
                Premanshu Sharma(98)<br></br>
                Nidhish Ranjan(205)<br></br>
                Debajit Dutta(207)<br></br>
            </div>
            
        </div>
    )
}
