import React from 'react';
import axios from 'axios';

export default class PostWrapper extends React.Component {
    state = {
        data: null,
        error: null,
        isLoading: true,
    };

    getData() {
        axios
            .get(this.props.link)
            .then((res) => this.setState({ data: res.data, isLoading: false }))
            .catch((error) =>
                this.setState({ error: error, isLoading: false })
            );
    }
    componentDidMount() {
        this.setState({ isLoading: true }, this.getData());
    }
    render() {
        return this.props.render(this.state);
    }
}
