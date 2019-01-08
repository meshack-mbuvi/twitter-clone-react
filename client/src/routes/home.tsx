import * as React from "react";
import { Form } from "../components/form";
import { Input } from "src/components/input";
import { Button } from "src/components/button";
import { connect } from "react-redux";
import { Modal } from "../components/modal";

// Actions
import { SignUp, Login, GetUserProfileData } from "../actions/auth";

// Components
import Tweets from "./tweets";
import { ProfileData } from "../components/user.prof";
import { UserStats } from "../components/user.stats";
import { AllTwits } from "../actions/twits";

interface IProps {
  history?: any;
  user?: any;
  twits?: any;
  dispatch?: any;
}
export class Home extends React.Component<IProps> {
  public state = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
  };

  public componentWillMount = () => {
    const authToken = localStorage.getItem("token");
    if (authToken) {
      const { dispatch } = this.props;
      dispatch(GetUserProfileData());
      dispatch(AllTwits());
    }
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(SignUp(this.state));
  };

  public handleLogin = (e: any) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(Login(this.state));
  };

  public handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  public render() {
    const authToken = localStorage.getItem("token");
    const { user, twits } = this.props;
    if (authToken) {
      const clientTwits = twits.length
        ? twits.filter(t => {
            return t.author.id === user.id;
          })
        : [];
      return (
        <div className="container mt-2">
          <div className="row">
            <div className="col-sm-3 col-md-3">
              <div className="row card">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-2">
                      <img
                        src="https://picsum.photos/50/50"
                        className="card-img mt-4"
                      />
                    </div>
                    <div className="col-md-10 statProf">
                      <ProfileData name={user.name} username={user.username} />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {clientTwits.length ? (
                    <UserStats
                      twitsCount={clientTwits.length}
                      followsCount={20}
                      followersCount={1000}
                    />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6">
              <Tweets />
            </div>
            <div className="col-sm-3 col-md-3" />
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid">
        <div className="row home ">
          <div className="col-sm-12 col-md-6 left d-flex justify-content-center align-items-center">
            <div>
              <div className="center-block ">Follow your interests.</div>
              <div className="center-block">
                Hear what people are talking about.
              </div>
              <div className="center-block">Join the conversation.</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 login">
            {/* Login form for existing users */}

            <Form
              className="form-inline mt-4"
              handleSubmit={e => this.handleLogin(e)}
            >
              <div className="form-row m-auto">
                <div className="form-group ml-4">
                  <Input
                    placeholder="Email address"
                    className="text-input form-control"
                    id="email"
                    type="email"
                    required={true}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group ml-4">
                  <Input
                    placeholder="password"
                    className="text-input form-control"
                    id="password"
                    type="password"
                    required={true}
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <Button
                    type="submit"
                    value="Log in"
                    className="btn-rounded ml-4 form-control form-control btn nav-link btn-link"
                  />
                </div>
              </div>
            </Form>

            {/* end of login form */}

            <div className="center-block signup-info col-sm-6">
              See what’s happening in the world right now
            </div>

            <div className="col-sm-6 text-center signup-info" id="joinus">
              Join Twiter today.
            </div>

            <div className="center-block col-sm-6">
              <Button
                className="btn-primary form-control btn btn-rounded nav-link btn-link"
                value="Sign Up"
                dataTarget="#signup"
                dataToggle="modal"
              />
            </div>
          </div>
        </div>

        {/* signup modal */}
        <Modal id="signup" title="Sign up">
          <p className="signup-info">Create your account</p>
          <Form
            handleSubmit={(e: any) => this.handleSubmit(e)}
            className="mt-4 ml-4  mr-4"
          >
            {/* Input fields for creating new account */}
            <div className="form-group">
              <Input
                placeholder="Name"
                className="text-input form-control"
                id="name"
                required={true}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <Input
                placeholder="Email"
                className="text-input form-control"
                id="email"
                type="email"
                required={true}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <Input
                placeholder="Password"
                className="text-input form-control"
                type="password"
                id="password"
                required={true}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <Input
                placeholder="Confirm password"
                className="text-input form-control"
                type="password"
                id="cPassword"
                required={true}
                onChange={e => this.handleChange(e)}
              />
            </div>
            <p className="joinus">
              By signing up, you agree to the <a href="#">Terms of Service</a>{" "}
              and Privacy Policy, including Cookie Use. Others will be able to
              find you by email or phone number when provided · Privacy Options
            </p>
            <div className="form-group">
              <Button
                type="submit"
                value="Sign up"
                className="btn-rounded btn-primary form-control"
              />
            </div>
          </Form>
        </Modal>
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

export default connect(
  mapStateToProps,
  null
)(Home);
