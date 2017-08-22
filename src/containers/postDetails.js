import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

class PostDetails extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {
    const { post } = this.props;

    if(!post) {
      return <div>Loading...</div>
    }

    return (
      <div className="col-sm-12 mt-4">
        <div className="row mb-4">
          <div className="col-sm-12 mb-4">
            <Link to="/">&lt; Back to list</Link>
          </div>
          <div className="col-sm-6">
            <h2 className="mb-0">{post.title}</h2>
          </div>
          <div className="col-sm-6 justify-content-end d-flex">
            <Link to="/posts/new" className="btn btn-danger">Delete Post</Link>
          </div>
        </div>

        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchPost})(PostDetails);