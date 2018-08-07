import React, { Component } from 'react';
import './Health.css';

class Health extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 25
    }
  }

  render() {
    return (
      <div className = "Health">
          <div className = "d-flex flex-row">
            <div className = "d-flex label">
              <p className = "p-2 ">Health:</p>
            </div>
            <div className = "d-flex flex-fill progress">
              <div className = "progress-bar bg-danger" role = "progressbar" style={{width: this.props.health + '%'}} aria-valuenow={this.state.progress} aria-valuemin="0" aria-valuemax="100">

              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Health;
