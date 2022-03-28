import React, { Component } from "react";

export default class Button extends Component {
  render() {
    // component sẽ nhận vào các props
    // variant: set kiểu cho button
    // size: set độ lớn cho button

    // children là 1 props mặc định trong tất cả component
    // Khi ta gọi component và truyền vào content bên trong component thì nó sẽ là children
    // <Button variant="primary" size="lg">
    //   <span>Mua Hàng</span>
    // </Button>

    // <span>Mua Hàng</span> là children

    // Khi ta gọi {children} thì <span>Mua Hàng</span> sẽ được thế vào vị trí của children
    const { variant, size, children } = this.props;

    const className = `btn btn-${variant} btn-${size}`;
    return <button className={className}>{children}</button>;
  }
}

{
  /* <button className="btn btn-primary btn-lg">Mua hàng</button>;
   */
  // <Button variant="primary" size="lg">
  //    <span>Mua Hàng</span>
  //  </Button>
}
