import React from 'react';
import { Field, reduxForm } from 'redux-form';
import i_a_validate from '../../custom_utils/validations/i_a_validations';
import renderField from '../../custom_utils/renderField';

const PatientInformationStep = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'i_a_form', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate: i_a_validate,
})(PatientInformationStep);
