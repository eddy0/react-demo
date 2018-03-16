import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './header'
import 'bootstrap'

import {Blog, Main, Music}  from './blog/blog'


const Layout = () => (
    <div>
         <Header />
        <hr/>
         <Route exact path='/' component={ Main }  />
         <Route path='/blog/:blog' component={ Blog }  />
         <Route path='/blog' component={ Blog }  />
         <Route path='/music' component={ Music }  />
    </div>
)

export default Layout
