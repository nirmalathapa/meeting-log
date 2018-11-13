import React, { Component } from "react";

class Meetings extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="font-weight-light">Add a Meeting</h1>
            <div className="card bg-light">
              <div className="card-body text-center">
                <form className="formgroup">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control"
                      name="meetingName"
                      placeholder="Meeting name"
                      aria-describedby="buttonAdd"
                    />
                    <div className="input-group-append">
                      <button
                        type="submit"
                        className="btn btn-sm btn-info"
                        id="buttonAdd"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Meetings;
