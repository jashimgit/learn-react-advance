// import Clock from './component/Clock';
// import Forms from './component/Forms';
import './App.css';
import Counter from './Counter';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

function App() {
    return (
        <div className='container'>
            <h3>React Render Props pattern </h3>

            <Counter
                render={(count, increseCount, decreseCount) => (
                    <ClickCounter
                        count={count}
                        increseCount={increseCount}
                        
                    />
                )}
            />
            <Counter
                render={(count, increseCount, decreseCount) => (
                    <HoverCounter
                        count={count}
                        increseCount={increseCount}

                    />
                )}
            />
        </div>
    );
}

export default App;
