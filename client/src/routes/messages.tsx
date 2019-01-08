import * as React from "react";
import { connect } from "react-redux";

export class Messages extends React.Component {
  public render() {
    return <div className="container">Message components here</div>;
  }
}

export default connect()(Messages);
