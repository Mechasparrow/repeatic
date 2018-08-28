import React, { Component } from "react";
import "./EditCharacter.css";

//import lodash
import _ from "lodash";

//import constants
import { CHARACTER_PARTS } from "../constants";

//import model
import Character from "../models/Character";

//Routing libs
import { Link, Redirect } from "react-router-dom";

class EditCharacter extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      doneEditting: false
    };

    this.partCycle = this.partCycle.bind(this);
    this.partRandomize = this.partRandomize.bind(this);
    this.finishEditting = this.finishEditting.bind(this);
  }

  finishEditting() {
    this.setState({
      doneEditting: true
    });
  }

  partRandomize() {
    var new_character = Character.parse({ ...this.props.character });

    var { head, body, legs } = this.props.character;

    head = _.sample(CHARACTER_PARTS.HEAD);
    body = _.sample(CHARACTER_PARTS.BODY);
    legs = _.sample(CHARACTER_PARTS.LEGS);

    new_character["head"] = head;
    new_character["body"] = body;
    new_character["legs"] = legs;

    this.props.updateCharacter(new_character);
  }

  partCycle(part, dir) {
    var new_character = Character.parse({ ...this.props.character });

    var { head, body, legs } = this.props.character;

    var selected_part = null;
    var raw_part_list = null;

    var part_name = "";
    var parts = [];
    var part_idx = 0;
    var parts_length = 0;

    switch (part) {
      case "head":
        part_name = part;
        selected_part = head;
        raw_part_list = CHARACTER_PARTS.HEAD;

        break;
      case "body":
        part_name = part;
        selected_part = body;
        raw_part_list = CHARACTER_PARTS.BODY;

        break;
      case "legs":
        part_name = part;
        selected_part = legs;
        raw_part_list = CHARACTER_PARTS.LEGS;
        break;
    }

    parts = _.values(raw_part_list);
    part_idx = _.findIndex(parts, function(part) {
      return part === selected_part;
    });
    parts_length = parts.length;

    var new_part_idx = part_idx;

    if (dir === "left") {
      if (part_idx === 0) {
        new_part_idx = parts_length - 1;
      } else {
        new_part_idx = part_idx - 1;
      }
    } else if (dir === "right") {
      if (part_idx === parts_length - 1) {
        new_part_idx = 0;
      } else {
        new_part_idx = part_idx + 1;
      }
    }

    new_character[part_name] = parts[new_part_idx];
    this.props.updateCharacter(new_character);
  }

  render() {
    //Check if finished editting, if so redirect

    if (this.state.doneEditting) {
      return <Redirect to="/" />;
    }

    return (
      <div className="edit-character container">
        <h2 className="header">Editting Character</h2>

        <div className="character-view">
          <div className="shuffle-character row">
            <div className="col-sm-3 offset-sm-9">
              <button
                onClick={this.partRandomize}
                className="btn btn-secondary"
              >
                <i className="fas fa-random" />
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="head">
                <button
                  onClick={() => {
                    this.partCycle("head", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.head}
                />
                <button
                  onClick={() => {
                    this.partCycle("head", "right");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>

              <div className="body">
                <button
                  onClick={() => {
                    this.partCycle("body", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.body}
                />
                <button
                  onClick={() => {
                    this.partCycle("body", "right");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>

              <div className="legs">
                <button
                  onClick={() => {
                    this.partCycle("legs", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.legs}
                />
                <button
                  onClick={() => {
                    this.partCycle("legs", "right");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <button onClick={this.finishEditting} className="btn btn-success">
          Finish Editting
        </button>
      </div>
    );
  }
}

export default EditCharacter;
