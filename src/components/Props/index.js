import React, { Component } from "react";
import Hello from "./Hello";
import Movie from "./Movie";
import data from "./data.json";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import Button from "./Button";

// Khác với state, props có ở cả class component và function component
export default class Props extends Component {
  state = {
    movies: data,
    user: {
      name: "Dan Nguyen",
      comment: "ABC OK XYZ",
      date: "27/07/2021",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1DeyZNqRdLF9WiyJOo7YQW5HxbSp3F6tNQQ&usqp=CAU",
    },
  };

  render() {
    // Demo Hello
    // return (
    //   <div>
    //     {/* name="Dan Nguyễn": props từ component cha truyền xuống cho component con */}
    //     <Hello name="Dan Nguyen" />
    //     <Hello name="Huy Trần" />
    //     <Hello name="Khải Trương" />
    //   </div>
    // );

    // Demo Movie
    // return (
    //   <div className="container">
    //     <div className="row">
    //       {this.state.movies.map((item) => (
    //         <div key={item.maPhim} className="col-sm-4">
    //           <Movie movie={item} />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // );

    // Demo Comment
    // const { user } = this.state;
    // return (
    //   <div className="card" style={{ width: "18rem" }}>
    //     <UserInfo user={user} />
    //     <div className="card-footer">
    //       <p>{user.date}</p>
    //     </div>
    //   </div>
    // );

    // Demo Button
    return (
      <div>
        <Button variant="primary" size="lg">
          <span>Mua hàng</span>
        </Button>
        <Button variant="secondary" size="sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span>Giỏ hàng</span>
        </Button>
      </div>
    );
  }
}
