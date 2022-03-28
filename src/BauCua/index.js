import React from "react";
import { useSelector } from "react-redux";
import BanChoi from "./BanChoi";
import XucXac from "./XucXac";

export default function BauCua() {
  const { diemThuong } = useSelector((state) => state.baucua);

  return (
    <div className="container">
      <h1 className="text-center mb-4">Bài tập bầu cua Cybersoft</h1>
      <div className="w-25 mx-auto mb-4">
        <b>Tiền thưởng: {diemThuong} Điểm</b>
      </div>

      <div className="row">
        <div className="col-sm-8">
          <BanChoi />
        </div>
        <div className="col-sm-4">
          <XucXac />
        </div>
      </div>
    </div>
  );
}
