import React, { Component, PureComponent } from "react";

// Khi component cha render lại thì component con cũng render lại theo mặc dù component con không thay đổi props hoặc state
// => Việc render của component con là dư thừa

// PureComponent: khi ta extends PureComponent thay vì Component thì React sẽ tự sử lý shouldComponentUpdate giúp ta
// tự động so sánh props và state cũ với props và state mới, nếu chúng khác nhau nó mới render lại

// Tuy nhiên nó sẽ tự động so sánh dạng shallow compare (===)
// => Chỉ có thể so sánh value của primities value (string, number, boolean, null, undefined)
// => Khi so sánh array, object, func nó sẽ so sánh địa chỉ vùng nhớ

export default class Children extends PureComponent {
  // Chạy khi state và props thay đổi hoặc component cha bị re-render và chạy trước trước hàm render của bản thân component này
  // Chức năng: quyết định xem component có cần render lại hay không
  // Nếu return true => render lại, return false => không render lại
  // shouldComponentUpdate(nextProps, nextState) {
  //   // state và props trong shouldComponentUpdate là state và props chưa đc thay đổi
  //   console.log("props", this.props, "state", this.state);
  //   // shouldComponentUpdate cung cấp 2 params là props và state sau khi thay đổi
  //   console.log("nextProps", nextProps, "nextState", nextState);

  //   // props thay đổi => cho phép render lại
  //   if (this.props.date !== nextProps.date) {
  //     return true;
  //   }

  //   // Không cần thiết render lại
  //   return false;
  // }

  render() {
    console.log("Children render run");
    return (
      <div>
        <p>Children Component</p>
        {this.props.date.toLocaleTimeString()}
      </div>
    );
  }
}
