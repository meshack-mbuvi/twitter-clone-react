import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { connect } from "react-redux";
import { Modal } from "../components/modal";
import { Form } from "../components/form";
import { TextArea } from "../components/textArea";

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
                <Link to="/messages" className="nav-item nav-link">
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
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
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
