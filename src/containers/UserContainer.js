import React, { Component } from "react";
import { connect } from "react-redux";

class UserContainer extends Component {
  render() {
    console.log(this.props.users);
    return (
      <div>
        <h1>bye</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserContainer);
