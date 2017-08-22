import React from 'react';

export default function (props) {
  const {input, label, meta: {touched, error}} = props;
  const className = `form-control ${(touched && error ? 'is-invalid' : '')}`;
  return (
    <div className="form-group col-sm-12">
      <label htmlFor={input.name}>{label}</label>
      <textarea id={input.name} className={className} rows="5" {...input}></textarea>
      {touched && error &&
      <small className="text-danger">{error}</small>
      }
    </div>
  );
}
