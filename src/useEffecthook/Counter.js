import React, { useState, useEffect } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');

    const addClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
    const tick = () => {
        setDate(new Date());
    };

    // in this useEffect hook when dependency provided 
    // useEffect will only run when the dependency state changes
    // otherwise it will not efffect to dom
    useEffect(() => {
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    }, [count]);

    /**
     *  when dependency array added and its empty it will run 
     *  only 1st time the component rendered
     *  and when dependency not added useEffect hook will run
     *  on every render
     */
    useEffect(() => {
        console.log('starting timer');
        const interval = setInterval(tick, 1000);

        // do the cleanup -- stop the timer
        return () => {
            console.log('component unmounted');
            clearInterval(interval);
        }
    }, [])

    return (
        <div>
            <h2>You clicked {count} times</h2>
            <h5>You Typed: {text}</h5>
            <hr />
            <input type='text' onChange={(e) => setText(e.target.value)} />
            <p>Time : {date.toLocaleTimeString()}</p>
            <p>
                <button type='button' onClick={addClick}>
                    Click Me
                </button>
            </p>
        </div>
    );
}
