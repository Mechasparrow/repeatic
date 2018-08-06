import React, { Component } from 'react';
import './Experience.css';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 70
    }
  }

  render() {
    return (
      <div className = "Experience">
          <div className = "d-flex flex-row">
            <div className = "d-flex label">
              <p className = "p-2 ">XP:</p>
            </div>
            <div className = "d-flex flex-fill progress">
              <div className = "progress-bar bg-success" role = "progressbar" style={{width: this.state.progress + '%'}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Experience;
