import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Logo from './header/logo'
import Nav from './header/nav'
import './bootswatch.css'
import './header.scss'

class Header extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (

            <header className='navbar navbar-expand-lg  navbar-dark bg-primary'>
                <div className='container'>
                    <Logo/>

                    <Nav />

                    <div className='navbar'>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />

                        <button className="btn btn-secondary my-2 my-sm-0 " type="submit">Search</button>
                    </form>
                    </div>


                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon " />
                    </button>

                </div>
             </header>
        )
    }
}

export default Header