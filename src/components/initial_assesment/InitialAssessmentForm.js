import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PatientInformationStep from './PatientInformationStep';
// import InitialAssessmentFormSecondPage from './InitialAssessmentFormSecondPage';
// import InitialAssessmentFormThirdPage from './InitialAssessmentFormThirdPage';

class InitialAssessmentForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <PatientInformationStep onSubmit={this.nextPage} />}
      </div>
      // {page === 2 &&
      //   <InitialAssessmentFormSecondPage
      //   previousPage={this.previousPage}
      //   onSubmit={this.nextPage}
      //   />}
      //   {page === 3 &&
      //     <InitialAssessmentFormThirdPage
      //     previousPage={this.previousPage}
      //     onSubmit={onSubmit}
      //     />}
    );
  }
}

InitialAssessmentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default InitialAssessmentForm;
