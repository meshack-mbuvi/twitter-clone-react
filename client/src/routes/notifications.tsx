import * as React from "react";
import { connect } from "react-redux";

export class Notifications extends React.Component {
  public render() {
    return <div className="container">Notification components here</div>;
  }
}

export default connect()(Notifications);
