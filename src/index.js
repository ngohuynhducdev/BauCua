import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App"; // Đây là 1 component
import reportWebVitals from "./reportWebVitals";

// Cấu hình sử dụng redux
// createStore: hàm dùng để tạo ra store quản lý state
import { createStore } from "redux";
// Provider: Component  dùng để kết nối store của redux với component của react
import { Provider } from "react-redux";
// rootReducer: Nơi tổng hợp các reducer con
import rootReducer from "./redux/reducers/rootReducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
