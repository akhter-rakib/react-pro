import React, { useReducer } from "react";

type Countstate = {
    count: number
}
type CounterAction = {
    type: string,
    payload: number
}
const initalState = { count: 0 }

const reducer = (state: Countstate, action: CounterAction) => {

    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
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
        </>
    )
}

export default Counter