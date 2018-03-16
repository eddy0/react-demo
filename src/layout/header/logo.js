import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './_logo.scss'

class Logo extends React.Component {

    render() {
        return (

                    <Link to="/" className="navbar-brand">
                        LOGO
                    </Link>


        )
    }
}

export default Logo