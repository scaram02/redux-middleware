import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore, applyMiddleware} from 'redux' 
import {counterReducer} from './reducer'
import {Provider} from 'react-redux'


// first middleware
// const myLogger = (store) => {
//     return next => {
//         return action => {
//             console.log('the middleware ran')
//             return next(action)
//         }
//     }
// }
const myLogger = store => next => action => {
    // console.log('first middleware shorthand')
    return next(action)
}

const secondMiddleware = store => next => action => {
    // console.log('second middleware ran')
    return next(action)
}

const capAtTen = store => next => action => {
    // once counter hits 10, decrement 
    if (store.getState() >= 10){
        return next({type: "DECREASE"})
    }
    return next(action)
}

 
const store = createStore(counterReducer, applyMiddleware(myLogger, secondMiddleware, capAtTen)) // pass in all middlewares here. The order of middlewares passed is important!!!



ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'))
