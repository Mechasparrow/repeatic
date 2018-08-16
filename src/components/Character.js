import React, { Component } from "react";
import "./Character.css";

//lodash
import _ from "lodash";

//Completed Tasks Page component
class Character extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="character">
        <div className="head">
          <img src={this.props.character.head} />
        </div>

        <div className="body">
          <img src={this.props.character.body} />
        </div>

        <div className="lower">
          <img src={this.props.character.legs} />
        </div>
      </div>
    );
  }
}

export default Character;
