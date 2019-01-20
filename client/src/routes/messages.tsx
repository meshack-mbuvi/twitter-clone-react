import * as React from "react";
import { connect } from "react-redux";

// actions
import { getAllMessages } from "../actions/messages";
// components
import { MessageItem } from "../components/messageItem";

interface IProps {
  dispatch: any;
  messages: any;
}
export class Messages extends React.Component<IProps> {
  public componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(getAllMessages());
  };
  public render() {
    const { messages } = this.props;
    return (
      <div className="mb-4">
        {messages
          ? messages.map((item, index) => {
              return (
                <MessageItem
                  createdAt={item.createdAt}
                  from={item.from}
                  text={item.text}
                  key={index}
                />
              );
            })
          : ""}
      </div>
    );
  }
}

const mapStateToProps = ({ messageReducer }) => {
  const messages = messageReducer.messages || [];
  return {
    messages
  };
};

export default connect(mapStateToProps)(Messages);
