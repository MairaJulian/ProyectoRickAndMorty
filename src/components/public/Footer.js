import React, { useState } from 'react'
import './Footer.css'
import abajo from '../../imagenes/abajo1.png'

const Footer = () => {

    const [click, setclick] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "Maira";

    const handleClick = () => {
        setclick(click + 1)
    }

    return (
        <div className="footerContainer">
            <footer className="footer">
                <p className="">&copy; {year} {companyName} Clicks= {click}</p>

                <span className='' onClick={handleClick}>
                    <img
                        className=''
                        height="52"
                        src={abajo}/>
                </span>

                <ul className="nav">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/maira-julian-768a001b0/" className="nav-link" target="_blank">Linkedin</a></li>
                    <li className="nav-item"><a href="https://github.com/MairaJulian" className="nav-link" target="_blank">GitHub</a></li>
                    <li className="nav-item"><a href="https://www.facebook.com/maira.julian" className="nav-link" target="_blank">Facebook</a></li>
                    <li className="nav-item"><a href="https://www.instagram.com/mairajulian/?hl=es" className="nav-link " target="_blank">Instagram</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
