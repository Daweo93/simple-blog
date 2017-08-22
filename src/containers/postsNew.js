import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import Input from '../components/input';
import Textarea from '../components/textarea';
import { connect } from 'react-redux'; 
import { createPost } from '../actions';

class PostsNew extends Component {

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {error, handleSubmit, submitting} = this.props;

    return (
      <div className="col-sm-12 mt-4">
        <h2 className="mb-4">Posts New</h2>

        <form className="row flex-column" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            type="text"
            component={Input}
          />
          <Field
            label="Tags"
            name="categories"
            type="text"
            component={Input}
          />
          <Field
            label="Post content"
            name="content"
            type="text"
            component={Textarea}
          />

          <div className="col-sm-12">
            <button className={"btn " + (error ? 'btn-danger' : 'btn-primary')} disabled={submitting}>Submit</button>
            <Link to="/" className="btn btn-danger ml-3">Cancel</Link>
          </div>
        </form>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories"
  }
  if (!values.content) {
    errors.content = "Enter some content"
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostsNew)
);