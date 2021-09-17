import React, { useReducer } from 'react';

const initialState = {
    count: 0,
};

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };

        default:
            return state;
    }
}

export default function Counter() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <>
            Count: {state.count}
            <br />
            <button
                type='button'
                onClick={() => dispatch({ type: 'increment' })}
            >
                increment
            </button>
            <button
                type='button'
                onClick={() => dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>
        </>
    );
}
