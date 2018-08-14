import React, { Component } from "react";
import "./LevelDisplay.css";

class LevelDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="level-display">
        <div className="d-flex flex-row">
          <p className="p-2 label">Level:</p>
          <p className="p-2 level-text">{this.props.level}</p>
        </div>
      </div>
    );
  }
}

export default LevelDisplay;
