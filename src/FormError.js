import React, { Component } from 'react';

class FormError extends Component{
  render(){
    const {themessage} = this.props;
    return (
      <div className="col-12 alert alert-danger px-3">
        {themessage}
      </div>
    );    
  }
}

export default FormError;