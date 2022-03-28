import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";

export default function XucXac() {
  const dispatch = useDispatch();
  const { xucXac, danhSachCuoc } = useSelector((state) => state.baucua);

  const soLuongCuoc = danhSachCuoc.filter((item) => item.diemCuoc).length;

  const doXucXac = () => {
    // dispatch action lên reducer để thay đổi danh sách xúc xắc
    const action = {
      type: "DO_XUC_XAC",
    };

    dispatch(action);
  };

  return (
    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
      {xucXac.map((item) => (
        <img className="mb-2" src={item.hinhAnh} alt="xucxac" width="60px" />
      ))}

      <Button
        className="w-50"
        color="success"
        disabled={!soLuongCuoc}
        onClick={doXucXac}
      >
        Xốc
      </Button>
    </div>
  );
}
