import React, {Component} from 'react';
import { Link } from "react-router-dom";

export default class PostsNew extends Component {
  render () {
    return (
      <div className="col-sm-12 mt-4">
        <div className="row mb-4">
          <div className="col-sm-6">
            <h1 className="mb-0">Posts New</h1>
          </div>
          <div className="col-sm-6 justify-content-end d-flex">
            <Link to="/" className="btn btn-primary"> Add Post</Link>
          </div>
        </div>
      </div>
    )
  }
}