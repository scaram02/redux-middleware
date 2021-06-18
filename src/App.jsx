import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import { bindActionCreators } from 'redux'
import { decrease, increase } from './action'

const App = () => {

    const count = useSelector(state => state)
    const dispatch = useDispatch()
    // const {increase, decrease} = bindActionCreators(actionCreators, dispatch)


    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increase())}>Increase</button>
        <button onClick={() => dispatch(decrease())}>Decrease</button>

    </div>
    )
}

export default App