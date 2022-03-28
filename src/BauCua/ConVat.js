import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardImg, CardBody, Button } from "reactstrap";

export default function ConVat({ data }) {
  const dispatch = useDispatch();
  const { diemThuong } = useSelector((state) => state.baucua);

  const giamDiemCuoc = () => {
    if (data.diemCuoc === 0) {
      return;
    }

    // Dispatch 1 action để reducer thay đổi state
    const action = {
      type: "GIAM_DIEM_CUOC",
      // Do mình tự định nghĩa thêm để mô tả rõ hơn cho action
      payload: { ma: data.ma },
    };

    dispatch(action);
  };

  const tangDiemCuoc = () => {
    if (diemThuong === 0) {
      return;
    }
    const action = {
      type: "TANG_DIEM_CUOC",
      payload: { ma: data.ma },
    };
    dispatch(action);
  };

  return (
    <Card>
      <CardImg src={data.hinhAnh}></CardImg>
      <CardBody>
        Cược:
        <Button
          color="success"
          disabled={data.diemCuoc === 0}
          onClick={giamDiemCuoc}
        >
          -
        </Button>
        <span className="mx-2">{data.diemCuoc}</span>
        <Button
          color="success"
          disabled={diemThuong === 0}
          onClick={tangDiemCuoc}
        >
          +
        </Button>
      </CardBody>
    </Card>
  );
}
