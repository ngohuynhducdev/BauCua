import React, { useState, useEffect } from "react";

// useEffect: lifecycle cho function component

export default function Hooks() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Dùng để gọi API, tương tác với DOM, ....
  // useEffect này được chạy sau mỗi lần render
  // Tương đương componentDidMount + componentDidUpdate
  // Hạn chế dùng
  useEffect(() => {
    console.log("useEffect này được chạy sau mỗi lần render");

    // Nếu muốn lấy kết quả mới của count sau khi setCount để thực hiện 1 hành động nào đó ta chỉ có thể làms trong useEffect
    // console.log("count", count);

    // Muốn kiểm tra nếu count thay đổi => gọi API
    // Tuy nhiên useEffect không cung cấp giá trị prevState or prevProps để ta có thể so sánh
    // Không thể: if(prevState.count !== count)
    // console.log("message", message);
  });

  // useEffect này chỉ được chạy sau lần render đầu tiên
  // Tương đương componentDidMount + componentWillUnmount
  useEffect(() => {
    console.log("useEffect này được chạy duy nhất sau lần render đầu tiên");
    // DOM
    // const handler = () => {
    //   alert("clicked");
    // };

    // const el = document.getElementById("container");
    // el.addEventListener("click", handler);

    // function này sẽ được chạy trước khi component bị huỷ bỏ
    return () => {
      // el.removeEventListener("click", handler);
    };
  }, []);

  // Tương đương componentDidMount + componentDidUpdate (count thay đổi)
  useEffect(() => {
    console.log(
      "useEffect này được chạy sau mỗi lần render với điều kiện giá trị count bị thay đổi"
    );

    // => count chắc chắn đã được thay đổi => có thể dùng giá trị count mới để thực hiện một hành động nào đó

    console.log(count);
  }, [count]);

  // Tương đương componentDidMount + componentDidUpdate (message thay đổi)
  useEffect(() => {
    console.log(
      "useEffect này được chạy sau mỗi lần render với điều kiện giá trị message bị thay đổi"
    );

    console.log(message);
  }, [message]);

  console.log("render");
  return (
    <div id="container">
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>

      <p>{message}</p>
      <button onClick={() => setMessage("Hello, world!")}>Set message</button>
    </div>
  );
}
