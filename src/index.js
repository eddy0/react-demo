import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './layout/layout'
import 'bootstrap'
import { HashRouter } from 'react-router-dom';


class App extends React.Component {
    render() {

        return (
            <HashRouter>
                < Layout />
            </HashRouter>
        )
    }
}

const app = document.getElementById('root')
ReactDOM.render( <App/>, app)

