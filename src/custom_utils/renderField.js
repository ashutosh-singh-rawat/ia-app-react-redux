import React from 'react';

function renderField(field) {

  const { meta: { touched, error }}    = field
  const className = `form-group ${touched && error ? 'has-danger' : ''}`
  const inputClassName = `form-control ${touched && error ? 'form-control-danger' : ''}`

  return(
    <div className={className}>
      <label className="col-form-label">{field.label}</label>
      <input
        {...field.input}
        placeholder={field.label}
        type={field.type}
        className={inputClassName}
      />
      {touched && error && <span className="form-control-feedback">{error}</span>}
    </div>
  );
}

export default renderField;
