import React, { Component } from "react";

export default class Avatar extends Component {
  render() {
    console.log(this.props)
    return (
      <img
        className="card-img-top"
        src={this.props.user.avatar}
        alt="avatar"
        height="300px"
      />
    );
  }
}
