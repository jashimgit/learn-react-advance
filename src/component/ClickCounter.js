import WithCounter from '../HOC/WithCounter';

const ClickCounter = (props) => {
    const { count, increseCount } = props;
    return (
        <div>
            <button onClick={increseCount}>Clicked {count} times</button>
        </div>
    );
};

export default WithCounter(ClickCounter);
