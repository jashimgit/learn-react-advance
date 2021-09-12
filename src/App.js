// import Clock from './component/Clock';
// import Forms from './component/Forms';
import './App.css';
import Counter from './Counter';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

function App() {
    return (
        <div>
            {/* <Clock /> */}
            {/* <Forms /> */}
            <h3>React Learning </h3>
            <br />
            {/* <ClickCounter /> */}
            {/* <HoverCounter /> */}
            <Counter
                render={(count, increseCount) => (
                    <ClickCounter count={count} increseCount={increseCount} />
                )}
            />
            <Counter
                render={(count, increseCount) => (
                    <HoverCounter count={count} increseCount={increseCount} />
                )}
            />
        </div>
    );
}

export default App;
