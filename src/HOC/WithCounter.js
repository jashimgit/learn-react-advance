import React from "react";

const WithCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        increseCount = () => {
            // this.setState((prevState) => ({count: prevState.count + 1 }))
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return (
                <OriginalComponent count={count} increseCount={this.increseCount} />
            );
        }
    }
    return NewComponent;
};

export default WithCounter;
