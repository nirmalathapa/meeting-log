import React, { Component } from "react";
import { Link } from "@reach/router";

class Welcome extends Component {
  render() {
    const { userName, logOutUser } = this.props;
    return (
      <div className="text-center mt-4">
        <span className="text-secondary font-weight-bold lead pl-1">
          Welcome {userName}
        </span>
        ,
        <Link to="/login" className="font-weight-bold text-info pl-1"
        onClick={e => logOutUser(e)}>
        {''} Logout
        </Link>
      </div>
    );
  }
}

export default Welcome;
