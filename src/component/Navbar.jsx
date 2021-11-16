import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand " to="/">
                    <img src='./logo192.png' className='navbar-brand-style' />
                </Link>
                <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/post">Post</Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar