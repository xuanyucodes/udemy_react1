import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {

    // when first render, fetch data from API
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return <div>Post List</div>
    }
};

export default connect(null, {fetchPosts: fetchPosts})(PostList);