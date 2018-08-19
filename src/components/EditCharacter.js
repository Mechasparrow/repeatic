import React, { Component } from "react";
import "./EditCharacter.css";

//import lodash
import _ from "lodash";

//import constants
import { CHARACTER_PARTS } from "../constants";

//import model
import Character from "../models/Character";

class EditCharacter extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.partCycle = this.partCycle.bind(this);
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
    return (
      <div className="edit-character">
        <h2>Editting Character</h2>

        <div className="character-view">
          <div className="row">
            <div className="col">
              <div className="head">
                <button
                  onClick={() => {
                    this.partCycle("head", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i class="fas fa-chevron-left" />
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
                  <i class="fas fa-chevron-right" />
                </button>
              </div>

              <div className="body">
                <button
                  onClick={() => {
                    this.partCycle("body", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i class="fas fa-chevron-left" />
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
                  <i class="fas fa-chevron-right" />
                </button>
              </div>

              <div className="legs">
                <button
                  onClick={() => {
                    this.partCycle("legs", "left");
                  }}
                  className="btn col-2 btn-dark"
                >
                  <i class="fas fa-chevron-left" />
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
                  <i class="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EditCharacter;
