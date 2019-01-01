import * as React from "react";
import { connect } from "react-redux";
import { GetUserProfileData } from "../actions/auth";
import { ProfileData } from "../components/user.prof";

interface IProps {
  dispatch?: any;
  user?: any;
}
export class Profile extends React.Component<IProps> {
  public componentWillMount() {
    const { dispatch } = this.props;
    dispatch(GetUserProfileData());
  }

  public FormatDate = (date: string) => {
    return new Date(date);
  };
  public render() {
    const { user } = this.props;
    const joined = this.FormatDate(user.createdAt);

    return (
      <div>
        <div className="row">
          <div className="col-md-12 m-2">
            <ProfileData
              name={user.name}
              username={user.username}
              joined={joined}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer.profile || []
  };
};

export default connect(mapStateToProps)(Profile);
