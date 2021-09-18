import React, { Component } from 'react';
import PostWrapper from '../HOC/PostWrapper';

export default class Comment extends Component {
    render() {
        return (
            <PostWrapper
                link={this.props.link}
                render={({ data, error, isLoading }) => (
                    <div>
                        <h4>Comment</h4>
                        <hr />
                        {error && <p>{error.message} </p>}
                        <ul>
                            {isLoading ? (
                                <h4>Loading ....</h4>
                            ) : (
                                <>
                                    <div>
                                        <p>{data.body}</p>
                                        <div>
                                            <span>Commented By: </span>
                                            <span>{data.name}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </ul>
                    </div>
                )}
            />
        );
    }
}
