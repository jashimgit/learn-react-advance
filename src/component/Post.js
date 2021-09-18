import React, { Component } from 'react';

import Comment from './Comment';
import PostWrapper from '../HOC/PostWrapper';


export default class Post extends Component {

    state = {
        current: null,
        link: null
    }

    getComments(id) {
        this.setState({
            current: id,
            link: `https://jsonplaceholder.typicode.com/comments/${id}`
        });
    }
    render() {
        return (
            <PostWrapper 
                link="https://jsonplaceholder.typicode.com/posts"
                render={({data, error, isLoading}) => (
                    <div>
                    <h4>User's Post</h4>
                    <hr />
                    {error && <p>{error.message} </p>}
                    <ul>
                        {isLoading ? (
                            <h4>Loading ....</h4>
                        ) : (
                            <>
                                {data.map((post) => (
                                    <li key={post.id} className='col-sm-3'>
                                        <h4>{post.title}</h4>
                                        <p>{post.body}</p>
                                        <h5 className='text-primary' type='link'
                                        onClick={() => this.getComments(post.id)}
                                        >
                                            View Comment
                                        </h5>
                                        {this.state.current === post.id && (
                                            <Comment link={this.state.link} />
                                        )}
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </div>
                )}
            />
        );
    }
}
