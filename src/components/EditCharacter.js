import React, { Component } from "react";
import "./EditCharacter.css";

class EditCharacter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="edit-character">
        <h2>Editting Character</h2>

        <div className="character-view">
          <div className="row">
            <div className="col">
              <div className="head">
                <button className="btn col-2 btn-primary">
                  <i class="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.head}
                />
                <button className="btn col-2 btn-primary">
                  <i class="fas fa-chevron-right" />
                </button>
              </div>

              <div className="body">
                <button className="btn col-2 btn-primary">
                  <i class="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.body}
                />
                <button className="btn col-2 btn-primary">
                  <i class="fas fa-chevron-right" />
                </button>
              </div>

              <div className="legs">
                <button className="btn col-2 btn-primary">
                  <i class="fas fa-chevron-left" />
                </button>
                <img
                  className="img-fluid col-4"
                  src={this.props.character.legs}
                />
                <button className="btn col-2 btn-primary">
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
