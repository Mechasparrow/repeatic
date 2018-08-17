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
      </div>
    );
  }
}

export default EditCharacter;
