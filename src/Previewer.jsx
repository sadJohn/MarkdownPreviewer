import React from "react";

export default class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview">
        <h2>Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: marked(this.props.preview) }} />
      </div>
    );
  }
}