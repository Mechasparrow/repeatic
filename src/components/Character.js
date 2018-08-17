import React, { Component } from "react";
import "./Character.css";

//lodash
import _ from "lodash";

//Redirect
import { Link } from "react-router-dom";

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
        <Link to="/edit-character" className="btn btn-secondary btn-edit">
          Edit Character
        </Link>
      </div>
    );
  }
}

export default Character;
