import React, { useState } from 'react'

const Footer = () => {

    const [click, setclick] = useState(0);

    const year = new Date().getFullYear();
    const companyName = "Maira";

    const handleClick = () => {
        setclick(click + 1)
    }

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">&copy; {year} {companyName} Clicks= {click}</p>

                <span className='' onClick={handleClick}>
                    <img
                        className=''
                        height="52"
                        src="emoji.png"/>
                </span>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                    <li className="nav-item"><a href="https://www.linkedin.com/in/maira-julian-768a001b0/" className="nav-link px-2 text-muted" target="_blank">Linkedin</a></li>
                    <li className="nav-item"><a href="https://github.com/MairaJulian" className="nav-link px-2 text-muted" target="_blank">GitHub</a></li>
                    <li className="nav-item"><a href="https://www.facebook.com/maira.julian" className="nav-link px-2 text-muted" target="_blank">Facebook</a></li>
                    <li className="nav-item"><a href="https://www.instagram.com/mairajulian/?hl=es" className="nav-link px-2 text-muted" target="_blank">Instagram</a></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
