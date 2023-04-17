import React, { useReducer } from "react";

type Countstate = {
    count: number
}

const initalState = { count: 0 }
type UpdateAction = {
    type: 'increment' | 'decrement'
    payload: number
}

type ResetAction = {
    type: 'reset'
}

const initialState = { count: 0 }

type CounterAction = UpdateAction | ResetAction

const reducer = (state: Countstate, action: CounterAction) => {

    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Incremeant 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement 10
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Rgeset
            </button>
        </>
    )
}

export default Counter