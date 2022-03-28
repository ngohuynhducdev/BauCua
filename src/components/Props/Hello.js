// import React from 'react'

// function component: mặc định sẽ có 1 params là props
export default function Hello({ name }) {
  // component con sẽ nhận được giá trị từ component cha truyền xuống thông qua object props
  // const { name } = props;
  return <p>Hello, {name}</p>;
}

// import React, { Component } from 'react'

// export default class Hello extends Component {
//   // Mặc định sẽ có 1 object this.props chứa các giá trị từ component cha truyền xuống
//   render() {
//     console.log(this.props)
//     return (
//       <p>
//         Hello, {this.props.name}
//       </p>
//     )
//   }
// }
