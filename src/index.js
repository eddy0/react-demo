import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Layout from './layout/layout'
import 'bootstrap'
import { HashRouter } from 'react-router-dom';

//
// class App extends React.Component {
//     render() {
//
//         return (
//             <HashRouter>
//                 < Layout />
//             </HashRouter>
//         )
//     }
// }
//
// const app = document.getElementById('root')
// ReactDOM.render( <App/>, app)


import { applyMiddleware, combineReducers, createStore} from 'redux'

const logger = (store) => (next) => (actions) => {
    console.log('action fired', actions)
    // actions.type = 'MINUS'   => you can modify the action
    next(actions)
}

const middleware = applyMiddleware(logger)

const userReducer = (state=0, actions) => {
    let newState = state
    if (actions.type === 'PLUS') {
        newState += 1
    } else if (actions.type === 'MINUS' ) {
        newState -= 1
    }
    return newState
}

const commentReducer = (state=[], actions) => {
    return state
}

const reducers = combineReducers({
    count: userReducer,
    comment: commentReducer
})


const store = createStore(reducers, middleware)

store.subscribe( () => {
    console.log('store changed', store.getState())
})

store.dispatch( {type:'PLUS', payload: 'will'})
store.dispatch( {type:'PLUS', payload: 'will'})
store.dispatch( {type:'MINUS', payload: 'will'})
store.dispatch( {type:'MINUS', payload: 'will'})
