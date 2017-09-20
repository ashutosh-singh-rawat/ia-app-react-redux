import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import showResults from "../../custom_utils/showResults";
import InitialAssessmentForm from "./InitialAssessmentForm";

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import { Link, withRouter } from 'react-router-dom';


class InitialAssessmentPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      // course: Object.assign({}, this.props.course),
      errors: {},
      saving: false
    };
  }

  render() {
    return (
      <div style={{ padding: 15 }}>
        <h2>Initial Assessment Form</h2>
        <InitialAssessmentForm onSubmit={showResults} />
        <Values form="i_a_form" />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(InitialAssessmentPage);
// export default InitialAssessmentPage;
