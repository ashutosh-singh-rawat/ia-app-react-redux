import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Initial Assessment</h1>

        <Link to="initial_assesment" className="btn btn-primary btn-lg"> Start </Link>
      </div>
      // <p> TEst asdas asdasdas sa d asd as d as d as d asd as d as d as</p>
    );
  }
}

export default HomePage;
