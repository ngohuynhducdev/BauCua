// Học cách làm việc với mảng trong react

import React, { Component } from "react";

export default class List extends Component {
  state = {
    products: ["Iphone", "Samsung", "Xiaomi", "Huawei"],
  };

  renderProducts = () => {
    return this.state.products.map((item) => <p>{item}</p>);
  };

  handleAdd = () => {
    const newProducts = [...this.state.products, "Sony"];
    this.setState({ products: newProducts });
  };

  render() {
    return (
      // <div>{[<p>Iphone</p>, <p>Samsung</p>, <p>Xiaomi</p>, <p>Huawei</p>]}</div>

      // Cách viết trực tiếp
      <div>
        {/*
          ["Iphone", "Samsung", "Xiaomi", "Huawei"] => [<p>Iphone</p>, <p>Samsung</p>, <p>Xiaomi</p>, <p>Huawei</p>]
        */}
        {/* https://reactjs.org/docs/lists-and-keys.html#keys */}
        {this.state.products.map((item, index) => (
          <p key={`product-${index}`}>{item}</p>
        ))}

        {this.state.products.map((item, index) => {
          // const key = Math.floor(Math.random() * 100);
          // Nếu ta dùng key là random => mỗi lần render nó sẽ nhận 1 key mới => nó sẽ xem là phần tử mới và tạo mới phần tử đó
          return (
            <input key={`input-${index}`} type="text" defaultValue={item} />
          );
        })}

        <button onClick={this.handleAdd}>Thêm sản phẩm</button>
      </div>

      // Cách viết thông qua gọi hàm
      // <div>
      //   {this.renderProducts()}
      // </div>
    );
  }
}
