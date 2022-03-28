// Demo class component
import React, { Component } from "react";

export default class Databinding extends Component {
  product = "Iphone 12 promax";
  price = "$1299";

  renderProduct() {
    return (
      <div>
        <p>{this.product}</p>
        <p>{this.price}</p>
      </div>
    );
  }

  render() {
    // Cách 1
    // return (
    // <div>
    //   <p>{this.product}</p>
    //   <p>{this.price}</p>
    // </div>
    // );

    // Cách 2
    // return <div>{this.renderProduct()}</div>;
    return this.renderProduct()

  }
}

// Demo function component
// import React from "react";
// export default function Databinding() {
//   let name = "Cybersoft Academy";

//   let student = {
//     name: "Lolo",
//     age: 18,
//   };

//   const formatStudent = () => {
//     return (
//       <p>
//         Name: {student.name} - Age: {student.age}
//       </p>
//     );
//   };

//   return (
//     <div>
//       <h1>Hello, {name}</h1>

//       <p>
//         Name: {student.name} - Age: {student.age}
//       </p>

//       {formatStudent()}
//     </div>
//   );
// }
