import React from 'react';

export default function (props) {
  const {input, label, type, meta: {touched, error}} = props;
  const className = `form-control ${(touched && error ? 'is-invalid' : '')}`;

  return (
    <div className="form-group col-sm-12">
      <label htmlFor={input.name}>{label}</label>
      <input id={input.name} type={type} className={className} {...input}/>
      {touched && error &&
      <small className="text-danger">{error}</small>
      }
    </div>
  );
}