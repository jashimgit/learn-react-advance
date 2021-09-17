import React, { useContext } from 'react';
import { counterContext } from '../App';

export default function ComponentC() {
    const countContext = useContext(counterContext);
    return (
        <div>
            <button
                type='button'
                onClick={() => countContext.dispatch({ type: 'increment' })}
            >
                Increment
            </button>
            <button
                type='button'
                onClick={() => countContext.dispatch({ type: 'decrement' })}
            >
                Decrement
            </button>
        </div>
    );
}
