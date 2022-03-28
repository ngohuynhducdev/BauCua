import React, { Component } from "react";
import Avatar from "./Avatar";

export default class UserInfo extends Component {
  render() {
    console.log(this.props);
    const { user } = this.props;
    return (
      <div className="userInfo">
        <Avatar user={user} />
        <div className="card-body">
          <p className="card-title">{user.name}</p>
          <p className="card-text">{user.comment}</p>
        </div>
      </div>
    );
  }
}
