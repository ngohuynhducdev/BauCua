import React from "react";
import { useSelector, useDispatch } from "react-redux";

// useSelector: subscrible redux store để get state, mỗi khi state trong redux store thay đổi nó sẽ chạy lại useSelector để get state mới
// useDispatch: cung cấp 1 hàm dispatch để gửi action lên redux store, để update lại state trong redux store

// Kết nối lên redux store và lấy state về sử dụng
function DemoRedux(props) {
  //                state của store => data sẽ trả về
  const state = useSelector((state) => state.demo);
  console.log(state);
  const dispatch = useDispatch();

  const increament = () => {
    // Làm cách nào để thay đổi state trong store => gọi action
    // Gọi action để thay đổi state => Làm sao để gọi action

    // Tạo ra 1 action để store nhận được và dựa vào nó để quyết định sẽ thay đổi state như thế nào
    const action = {
      type: "INCREAMENT",
    };
    // dispatch: đẩy action này vào trong store
    dispatch(action);
  };

  const decrement = () => {
    const action = {
      type: "DECREMENT",
    };
    dispatch(action);
  };

  return (
    <div>
      <p>
        Redux state: {state.count} - {state.message}
      </p>
      <button onClick={increament}>Increament</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default DemoRedux;

// Cách trước khi có hook sử dụng
// const mapStateToProps = (state) => {
//   return { data: state };
// };

// HOC - Higher-other component
// export default connect(mapStateToProps)(DemoRedux);
