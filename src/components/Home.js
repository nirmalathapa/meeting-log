import React, { Component } from "react";
import { Link } from "@reach/router";

class Home extends Component {
  render() {
    const { user } = this.props;

    const biggerLead = {
      fontSize: 1.4 + "em",
      fontWeight: 200
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            {!user && (
              <div>
                <div
                  className="display-4 text-info mt-3 mb-2"
                  style={{
                    fontSize: 2.8 + "em"
                  }}
                >
                  Meeting Log
                </div>

                <p className="lead" style={biggerLead}>
                  A simple react app that has functionality to register, login
                  and create new meeting log. It is connected to the real time
                  database called firebase that automatically recieves updates
                  with the newest data. Made with{" "}
                  <a href="https://reactjs.org/">React</a> and{" "}
                  <a href="https://firebase.google.com">Firebase</a>.
                </p>
              </div>
            )}

            {user == null && (
              <span>
                <Link to="/register" className="btn btn-outline-info mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-outline-info mr-2">
                  Log In
                </Link>
              </span>
            )}
            {user && (
              <div>
                <p>To create a new meeting log click on the meetings button.</p>
                <Link to="/meetings" className="btn btn-info">
                  Meetings
                </Link>
              </div>
            )}
          </div>{" "}
          {/* columns */}
        </div>
      </div>
    );
  }
}

export default Home;
