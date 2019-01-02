import * as React from "react";
import { connect } from "react-redux";
import { GetUserProfileData } from "../actions/auth";
import { ProfileData } from "../components/user.prof";
import { AllTwits } from "../actions/twits";
import { Twit } from "src/components/twit";

interface IProps {
  dispatch?: any;
  user?: any;
  twits?: any;
}
export class Profile extends React.Component<IProps> {
  public componentWillMount() {
    const { dispatch } = this.props;
    dispatch(AllTwits());
    dispatch(GetUserProfileData());
  }

  public FormatDate = (date: string) => {
    return new Date(date);
  };
  public render() {
    const { user, twits } = this.props;

    const clientTwit = twits
      ? twits.filter(t => {
          return t.author.id === user.id;
        })
      : [];
    const joined = this.FormatDate(user.createdAt);

    return (
      <div>
        <div className="container mt-2">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <div className="row">
                <div className="col-md-12 m-2 statProf">
                  <ProfileData
                    name={user.name}
                    username={user.username}
                    joined={joined}
                    bio={user.bio}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              {clientTwit.map((twit, index) => {
                return (
                  <Twit
                    key={index}
                    author={twit.author}
                    twitText={twit.text}
                    createdAt={twit.createdAt}
                    img="https://picsum.photos/50/50"
                  />
                );
              })}
            </div>
            <div className="col-sm-3 col-md-3">Who to follow</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer, twitReducer }) => {
  return {
    user: userReducer.profile || [],
    twits: twitReducer.twits || []
  };
};

export default connect(mapStateToProps)(Profile);
