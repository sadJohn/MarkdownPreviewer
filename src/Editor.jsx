import React from "react";

export default class Editor extends React.Component {
  render() {
    return (
      <div id="editorContainer">
        <h2>Editor</h2>
        <textarea
        name=""
        id="editor"
        value={this.props.editor}
        onChange={this.props.changeText}
      />
      </div>
      
    );
  }
}
