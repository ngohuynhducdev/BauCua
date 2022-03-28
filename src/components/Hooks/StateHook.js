import React, { useState } from "react";

// Kể từ phiên bản 16.8, React cho ra đời khái niệm hooks, cho phép ta sử dụng state và lifecycle bên trong function component
// useState: dùng để tạo state bên trong function component và chỉ sử dụng được bên trong function component.
// state trong function component có những tính chất tương tự như trong class component (render lại component khi state thay đổi)

const FRUITS = ["banana", "orange", "strawberry", "kiwi", "apple"];

export default function StateHook() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  const [fruits, setFruits] = useState([]);
  const [values, setValues] = useState({ email: "", password: "" });

  const addFruit = () => {
    const index = Math.floor(Math.random() * 5);
    const fruit = FRUITS[index];

    // const newFruits = [...fruits, fruit]
    // setFruits(newFruits);

    setFruits((current) => [...current, fruit]);
  };

  const removeFruit = () => {
    const index = Math.floor(Math.random() * fruits.length);

    // const newFruits = [...fruits];
    // newFruits.splice(index, 1)

    const newFruits = fruits.filter((_, idx) => idx !== index);
    setFruits(newFruits);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    // const newValues = {
    //   ...values,
    //   [name]: value,
    // };
    // setValues(newValues);

    setValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  console.log("State values:", values);
  return (
    <div>
      {/* state number */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>

      {/* state string */}
      <p>{username}</p>
      <button onClick={() => setUsername("dannguyen")}>Set username</button>

      {/* state array */}
      <p>{fruits.join(" - ")}</p>
      <button onClick={addFruit}>Add Fruit</button>
      <button onClick={removeFruit}>Remove Fruit</button>

      {/* state object */}
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={values.password}
          name="password"
          onChange={handleChange}
          className="form-control"
        />
      </div>
    </div>
  );
}

// class State extends React.Component {
//   state = {
//     count: 0,
//     username: "",
//   };
//   render() {
//     return (
//       <div>
//         <p>{this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Tăng count
//         </button>

//         <p>{this.state.username}</p>
//         <button onClick={() => this.setState({ username: "dannguyen" })}>
//           Set Username
//         </button>
//       </div>
//     );
//   }
// }
