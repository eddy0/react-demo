import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Blog from "../blog/blog";

class Nav extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">


                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>

                        </li>

                        <li className="nav-item">
                            <Link className="nav-link"  to="/music">Music</Link>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="themes">Project<span className="caret" /></a>
                            <div className="dropdown-menu" aria-labelledby="TODO">
                                <a className="dropdown-item" href="../default/">TODO</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="../cerulean/">MUSIC</a>
                                <a className="dropdown-item" href="../cosmo/">GAME</a>
                                <a className="dropdown-item" href="../cosmo/">ABOUT</a>
                            </div>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link" href="../help/">About</a>
                        </li>


                    </ul>


                    <ul className="nav navbar-nav ml-auto">

                    </ul>
                </div>
        )
    }
}

export default Nav