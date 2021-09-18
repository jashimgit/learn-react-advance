// import Clock from './component/Clock';
// import Forms from './component/Forms';
import './App.css';
import Counter from './Counter';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import Post from './component/Post';

function App() {
    return (
        <div className='container'>
            <h3>React Render Props pattern </h3>
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
            <Post />
        </div>
    );
}

export default App;
