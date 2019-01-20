import * as React from "react";
import { Link } from "react-router-dom";
import { toaster } from "evergreen-ui";

// components
import { Button } from "../components/button";
import { connect } from "react-redux";
import { Modal } from "../components/modal";
import { Form } from "../components/form";
import { TextArea } from "../components/textArea";
import Messages from "./messages";

//  Actions
import { Newtwit } from "../actions/twits";

interface IProps {
  user?: any;
  dispatch?: any;
}

export class Navbar extends React.Component<IProps> {
  public state = {
    twit: ""
  };
  public handleSubmit = e => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(Newtwit(this.state.twit));
  };

  public handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  public handleLogout = () => {
    try {
      window.localStorage.setItem("token", "");
      return document.location.reload(true);
    } catch (error) {
      return toaster.danger("An error occurred while logging out");
    }
  };

  public render() {
    const authToken = localStorage.getItem("token");
    return (
      <div>
        {authToken ? (
          <nav className="navbar navbar-light navbar-expand-lg">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <Link to="/" className="nav-item nav-link">
                  <i className="fa fa-home" />
                  Home
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/notifications" className="nav-item nav-link">
                  <i className="fa fa-bell-o" />
                  Notifications
                </Link>
              </li>
              <li className="nav-item nav-link">
                <Link
                  to="/messages"
                  className="nav-item nav-link"
                  data-toggle="modal"
                  data-target="#messages"
                >
                  <i className="fa fa-envelope-o" />
                  Messages
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto d-flex mr-4 justify-content-end">
              <li className="nav-item dropdown">
                <img
                  src="https://picsum.photos/50/50/?random"
                  className="img-profile nav-link dropdown-toggle"
                  id="profile"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                />
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                  <button
                    className="dropdown-item"
                    onClick={() => this.handleLogout()}
                  >
                    Logout
                  </button>
                </div>
              </li>
            </ul>
            <Button
              className="btn-rounded tweet form-control nav-link btn-link btn-primary mr-4"
              value="Tweet"
              dataTarget="#twit"
              dataToggle="modal"
            />
            <Modal id="twit" title="Compose new Twit" footer={false}>
              <Form
                handleSubmit={(e: any) => this.handleSubmit(e)}
                className="mt-2 mb-0"
              >
                {/* Input fields for creating new account */}
                <div className="row">
                  <div className="col-md-1 ">
                    <img
                      src="https://picsum.photos/50/50/?random"
                      className="card-img"
                    />
                  </div>
                  <div className="form-group col-md-10 ml-3">
                    <TextArea
                      placeholder="What's happening?"
                      className="form-control rounded-0"
                      id="twit"
                      required={true}
                      onChange={e => this.handleChange(e)}
                    />
                  </div>
                </div>
                <div className="row m-2 mt-1">
                  <div className="col-md-10" />
                  <div className="form-group col-md-2 pull-right m-0 p-2">
                    <Button
                      type="submit"
                      value="Twit"
                      className="btn-rounded btn-primary form-control"
                    />
                  </div>
                </div>
              </Form>
            </Modal>

            {/* messages */}
            <div
              className="modal fade"
              role="dialog"
              id="messages"
              aria-hidden="true"
              tabIndex={-1}
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="title d-flex justify-content-between">
                    <h5 className="modal-title  d-flex">
                      <span className="mr-auto">Direct messages </span>
                    </h5>
                    <div>
                      <Button
                        type="submit"
                        value="New Message"
                        className="btn-rounded btn-primary"
                      />
                    </div>

                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <Messages />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer }) => {
  return { user: userReducer || null };
};

export default connect(mapStateToProps)(Navbar);
