import React, { Component } from "react";
import Children from "./Children";

export default class Lifecycle extends Component {
  // Constructor: phương thức chạy đầu tiên khi component được khởi tạo
  // Chỉ chạy duy nhất 1 lần
  // Chức năng: khởi tạo state, bind this cho method
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      products: [],
      selectedProductId: "",
    };

    console.log("Constructor run");
  }

  // Tự động được chạy 1 lần duy nhất sau khi component render lần đầu tiên
  // Chức năng: setState, Gọi API, tương tác với DOM, setTimeout, setInterval, các tác vụ bất đồng bộ,...
  componentDidMount() {
    console.log("componentDidMount run");

    // DOM
    // const el = document.getElementById("container");
    // console.log(el)

    // setTimeout, setInterval
    // this.timer = setInterval(() => {
    //   this.setState({
    //     date: new Date(),
    //   });
    // }, 1000);

    fetch("https://61029ba879ed6800174821dc.mockapi.io/api/products")
      .then((resp) => resp.json())
      .then((data) => {
        // Check nếu biến isUnmounted là false => component chưa bị unmount => cho phép setState
        if (!this.isUnmounted) {
          this.setState({ products: data });
        }
      });
  }

  // Tự động chạy 1 lần duy nhất trước khi component bị huỷ bỏ
  // Chức năng: dọn dẹp vùng nhớ, removeEventListenter, clearTimeout, clearInterval
  componentWillUnmount() {
    // clearInterval(this.timer)

    // Nếu component có gọi setState sau khi bị unmount thì React sẽ throw ra 1 warning
    // Để khắc phục ta tạo 1 biến flag để check component có bị huỷ bỏ hay chưa
    this.isUnmounted = true;
  }

  // Tự động được chạy từ lần render thứ 2 trở đi
  // Chức năng: setState, Gọi API, setTimeout, setInterval, DOM,...
  // Dựa vào props mới để setState cho component
  // Cung cấp 2 params là giá trị trước khi thay đổi của props và state
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate run");
    console.log("prevProps", prevProps, "prevState", prevState);
    console.log("props", this.props, "state", this.state);

    // Lấy giá trị state hoặc props mới vừa đc thay đổi để call API mới
    // Tuy nhiên ta lưu ý, khi thao tác trong componentDidUpdate, ta phải có điều kiện dừng
    // Điều kiện ở đây là selectedProductId cũ phải khác selectedProductId mới
    if (prevState.selectedProductId !== this.state.selectedProductId) {
      fetch(
        `https://61029ba879ed6800174821dc.mockapi.io/api/products/${this.state.selectedProductId}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          // Khi setState trong componentDidUpdate bắt buộc phải có điều kiện dừng, nếu không sẽ bị lặp vô tận
          this.setState({
            product: data
          })
        });
    }
  }

  selectProduct = (productId) => {
    this.setState({
      selectedProductId: productId,
    });
  };

  render() {
    console.log("Render run");
    console.log(this.state.products);
    console.log(this.state.selectedProductId);
    return (
      <div id="container">
        <Children date={this.state.date} />

        {/* {this.state.date.toLocaleTimeString()} */}

        {this.state.products.map((item) => (
          <div key={item.maSP}>
            <span>{item.tenSP}</span>
            <button onClick={() => this.selectProduct(item.maSP)}>
              Chi tiết
            </button>
          </div>
        ))}
      </div>
    );
  }
}











