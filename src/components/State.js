// Tại thời điểm học bài này ta chỉ sử dụng state trong class component,

import React, { Component } from "react";

export default class State extends Component {
  // Mặc định khi extends Component ta sẽ có 1 object state
  state = {
    count: 0,
    isLoggedIn: false,
  };

  increaseCount = () => {
    // Không được quyền thay đổi trực tiếp state mà phải thông qua hàm setState
    // this.state.count += 1
    this.setState({ count: this.state.count + 1 }, () => {
      // Callback chỉ được chạy khi đã setState thành công
      console.log("State trong callback:", this.state.count);
    });

    // Bởi vì setState là 1 hàm bất đồng bộ => khi ta gọi console.log(this.state.count) sau khi setState nó log ra state cũ, khắc phục bằng cách lấy state mới trong callback của hàm setState
    console.log("State bên ngoài:", this.state.count);
  };

  decreaseCount = () => {
    // Gọi setState giảm count 2 lần, mong đợi sau khi chạy hàm này nó sẽ trừ count đi 2
    // Tuy gọi setState 2 lần nhưng do setState là hàm bất đồng bộ nên lúc này this.state.count bên trong 2 hàm setState giá trị là như nhau => return về cùng 1 giá trị cho 2 lần gọi setState
    // this.setState({ count: this.state.count - 1 });
    // this.setState({ count: this.state.count - 1 });

    // setState với tham số thứ nhất là 1 callback nhận vào state
    // Khi viết kiểu tham số là function thì state ta nhận được luôn luôn là giá trị mới nhất
    this.setState((state) => {
      console.log("setState 1:", state);
      return {
        count: state.count - 1,
      };
    });
    this.setState((state) => {
      console.log("setState 2:", state);
      return {
        count: state.count - 1,
      };
    });

    // => Nên xài cách tham số là function khi ta cần setState mà dựa vào giá trị hiện tại của state
    // Giá trị mới của message không bị phụ thuộc vào giá trị hiện tại của nó
    // this.setState({
    //   messsage: "Hello Cybersoft"
    // })
    // Giá trị mới của isActive bị phụ thuộc vào giá trị hiện tại của nó
    // this.setState((state) => {
    //   return {
    //     isActive: !state.isActive
    //   }
    // })
  };

  toggleLoggedIn = () => {
    this.setState((state) => {
      return {
        isLoggedIn: !state.isLoggedIn,
      };
    });
  };

  // Hàm render sẽ tự động được chạy lại mỗi khi state thay đổi
  render() {
    return (
      <div>
        <h3>Demo count</h3>
        <p>Count: {this.state.count}</p>
        {/* Khi click button này biến count sẽ tăng lên 1 đơn vị */}
        <button onClick={this.increaseCount}>Increase Count</button>
        {/* Khi click button này biến count sẽ giảm xuống 2 đơn vị */}
        <button onClick={this.decreaseCount}>Decrease Count</button>

        <h3>Demo isLoggedIn</h3>
        <p>
          This user is {this.state.isLoggedIn ? "currently" : "not"} loggedin
        </p>
        {this.state.isLoggedIn ? (
          <button onClick={this.toggleLoggedIn}>Logout</button>
        ) : (
          <button onClick={this.toggleLoggedIn}>Login</button>
        )}
      </div>
    );
  }
}
