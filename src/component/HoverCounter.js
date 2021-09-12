// import WithCounter from '../HOC/WithCounter';

const HoverCounter = ({ count, increseCount }) => {

    return (
        <div>
            <h2 onMouseOver={increseCount}>Hovered {count} times</h2>
        </div>
    )
}

export default HoverCounter;
// export default WithCounter(HoverCounter);