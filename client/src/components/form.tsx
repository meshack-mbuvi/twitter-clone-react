import * as React from "react";

interface IProps {
  handleSubmit: (e: any) => void;
  className?: string;
}
export class Form extends React.Component<IProps> {
  public render() {
    return (
      <form
        onSubmit={e => this.props.handleSubmit(e)}
        className={this.props.className}
      >
        {this.props.children}
      </form>
    );
  }
}
