// // Example for html
// {/* <button onclick="clickMe()">
//   Click me
// </button> */}

import React, { Component } from 'react'
export default class HandlingEvents extends Component {
  username = "Dân Nguyễn"

  constructor() {
    super()
    // this.onClick = this.onClick.bind(this)
  }

  // Nếu muốn dùng con trỏ this bên trong function này cần phải bind this vào function trong constructor
  // onClick() {
  //   console.log(this)
  //   alert(`Name: ${this.username}`)
  // }

  // Ngoài ra để sử dụng this thì ta có thể viết bằng arrow function
  onClick = () => {
    console.log(this)
    alert(`Name: ${this.username}`)
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Click me</button>
      </div>
    )
  }
}


// import React from 'react'
// export default function HandlingEvents() {
//   const clickMe = () => {
//     alert("Clicked")
//   }

//   const showName = (name) => {
//     alert(`Hello ${name}`)
//   }

//   const handleSubmit = (event) => {
//     // Ngăn reload lại page
//     event.preventDefault()
//     alert("Submitted")
//   }

//   const handleSearch = (event) => {
//     console.log(event.target)
//     alert(`search: ${event.target.value}`)
//   }

//   const handleChange = (event, name) => {}

//   return (
//     <div>
//       {/* Lưu ý ta chỉ truyền tên hàm, không có dấu () */}
//       <button onClick={clickMe}>
//         Cách 1: Click me
//       </button>

//       {/* Sử dụng cách này nếu function cần truyền params */}
//       <button onClick={() => showName('Dân Nguyễn')}>
//         Cách 2: Show name
//       </button>

//       <form onSubmit={handleSubmit}>
//         <button type="submit">submit</button>
//       </form>

//       <input type="text" onChange={handleSearch} />

//       {/* Lấy đối tượng event kèm theo truyền params */}
//       <input type="text" onChange={(e) => handleChange(e, 'Dân Nguyễn')} />
//     </div>
//   )
// }







