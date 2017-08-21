import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
import _ from "lodash";

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="col-sm-12 mt-4">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h1 className="mb-0">Posts</h1>
          </div>
          <div className="col-sm-6 justify-content-end d-flex">
            <Link to="/posts/new" className="btn btn-primary"> Add Post</Link>
          </div>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);