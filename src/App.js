// import Clock from './component/Clock';
// import Forms from './component/Forms';
import './App.css';
import Counter from './useEffecthook/Counter';

import { useState } from 'react';

function App() {
    const [show, setshow] = useState(true);
    return (
        <div>
            <div>{show && <Counter />}</div>
            <p>
                <button
                    type='button'
                    onClick={() => setshow((prevShow) => !prevShow)}
                >
                    {show ? 'Hide counter' : 'Show countter'}
                </button>
            </p>

            
        </div>
    );
}

export default App;
