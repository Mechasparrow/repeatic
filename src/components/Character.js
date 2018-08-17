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
      <div className="character container">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="head">
              <img className="img-fluid" src={this.props.character.head} />
            </div>

            <div className="body img-fluid">
              <img className="img-fluid" src={this.props.character.body} />
            </div>

            <div className="lower img-fluid">
              <img className="img-fluid" src={this.props.character.legs} />
            </div>
          </div>
        </div>
        <button className = "btn btn-secondary btn-edit">
          Edit Character
        </button>
      </div>
    );
  }
}

export default Character;
