import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {createStore} from 'redux' 
import {counterReducer} from './reducer'
import {Provider} from 'react-redux'

const store = createStore(counterReducer)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'))
