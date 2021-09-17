import './App.css';
import ComponentA from './component/ComponentA';
// import Counter from './component/Counter';
import React, { createContext, useReducer } from 'react';

export const counterContext = createContext();

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

function App() {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div className="container">
            <h3>useReducer() hook </h3>
            <hr />
            {/* <Counter /> */}
            <p>Counter: {state.count}</p>
            <counterContext.Provider value={{dispatch}}>
                <ComponentA />
            </counterContext.Provider>
        </div>
    );
}

export default App;
