import React, { Component } from 'react';
import './Home.css';

//Home Page component
class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className = "home">
        <h2>Welcome to the home page</h2>
      </div>
    );
  }
}

export default Home;
