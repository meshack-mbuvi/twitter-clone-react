import * as React from "react";
import { connect } from "react-redux";

// Atoms
import { Form } from "../components/form";
import { Modal } from "../components/modal";
import { Input } from "../components/input";
import { Button } from "../components/button";

// Actions
import { SignUp } from "../actions/auth";

interface IState {
  name?: string;
  email?: string;
  password?: string;
  cPassword?: string;
}

interface IProps {
  user?: any;
  dispatch?: any;
  actions?: any;
}
export class Signup extends React.Component<IProps, IState> {
  public state = {
    name: "",
    email: "",
    password: "",
    cPassword: ""
  };

  public handleSubmit = (e: any) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(SignUp(this.state));
  };

  public handleChange = (e: any) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  public render() {
    const { user } = this.props;
    return (
      <div className="row">
        <Modal id="signup" title="Sign up">
          <p className="signup-info">Create your account</p>
          <Form
            handleSubmit={(e: any) => this.handleSubmit(e)}
            className="mt-4 ml-4  mr-4"
          >
            {user && user.error ? (
              <p className="text-danger text-center">{user.error.message}</p>
            ) : (
              ""
            )}
            {user && user.info ? (
              <p className="text-info text-center">{user.info.message}</p>
            ) : (
              ""
            )}
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
                value="Sin up"
                className="btn-rounded btn-primary form-control"
              />
            </div>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return {
    user: userReducer || []
  };
};

export default connect(mapStateToProps)(Signup);
