// import React from "react";

// export default function ConditionalRendering() {
//   let isLoggedIn = true;

//   if (isLoggedIn) {
//     return <div>Welcome back! Dân Nguyễn</div>;
//   }

//   return <div>Please login!!</div>;
// }

// export default function ConditionalRendering() {
//   let isLoggedIn = false;

//   let content;
//   if (isLoggedIn) {
//     content = <div>Welcome back! Dân Nguyễn</div>;
//   } else {
//     content = <div>Please login!!</div>;
//   }

//   return (
//     <div>
//       <h1>Cybersoft Academy</h1>
//       {content}
//     </div>
//   );
// }

// Inline if with logical ? :, &&, || Operator
// export default function ConditionalRendering() {
//   let unreadCount = 8;

//   let isLoggedIn = false;

//   return (
//     <div>
//       {/* Nếu unreadCount là 0 sẽ không show thẻ p ra */}
//       {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}

//       {/* Dùng toán tử bậc 3 để render */}
//       <p>The user is {isLoggedIn ? 'currently' : 'not'} loggedin</p>

//       {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//     </div>
//   );
// }

import React, { Component } from "react";

export default class ConditionalRendering extends Component {
  isLoggedIn = true;

  render() {
    // Sử dụng if return
    // if (this.isLoggedIn) {
    //   return <div>Welcome back! Dân Nguyễn</div>;
    // }
    // return <div>Please Login !!!</div>;

    // Sử dụng if else assign variable
    // let content;
    // if(this.isLoggedIn) {
    //   content = <div>Welcome back! Dân Nguyễn</div>;
    // } else {
    //   content = <div>Please Login !!!</div>;
    // }
    // return (
    //   <div>
    //     <h1>Cybersoft Academy</h1>
    //     {content}
    //   </div>
    // )

    // Sử dụng if else with logical ? :, &&, || Operator
    return (
      <div>
        <p>This user is {this.isLoggedIn ? 'currently' : 'not'} loggedin</p>
        {this.isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}




