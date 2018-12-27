import * as React from "react";
import { Twit } from "src/components/twit";
import { connect } from "react-redux";
import { AllTwits } from "src/actions/twits";

interface IProps {
  dispatch?: any;
  twits?: any;
}
export class Tweets extends React.Component<IProps> {
  public componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AllTwits());
  }
  public render() {
    const { twits } = this.props;
    console.log(twits);

    return (
      <div>
        <div className="row">
          <div className="col-md-12 mt-4">Header here</div>
        </div>
        <div className="row">
          <div className="col-md-12 m-2">
            {twits.map((tweet, index) => {
              return (
                <Twit
                  key={index}
                  author={tweet.author}
                  twitText={tweet.text}
                  replies={tweet.replies}
                  reTwits={tweet.retwits}
                  likes={tweet.likes}
                  createdAt={tweet.createdAt}
                  img="https://picsum.photos/50/50"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ twitReducer }) => {
  return {
    twits: twitReducer.twits || []
  };
};

export default connect(mapStateToProps)(Tweets);
