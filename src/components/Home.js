import React, { Component } from 'react';
import './Home.css';

//Home Page component
class Home extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className = "home container">
        <h2>Here are some tasks</h2>
        <div className = "task-list">
          <p>List tasks here for giggles</p>
        </div>
      </div>
    );
  }
}

export default Home;
