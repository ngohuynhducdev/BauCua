import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    console.log(this.props);
    const { movie } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={movie.hinhAnh}
          alt="movie"
          height="300px"
        />
        <div className="card-body">
          <p className="card-title">{movie.tenPhim}</p>
          <p className="card-text">{movie.moTa}</p>
        </div>
      </div>
    );
  }
}







