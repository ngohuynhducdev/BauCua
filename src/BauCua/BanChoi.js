import React from "react";
import { useSelector } from "react-redux";
import ConVat from "./ConVat";

export default function BanChoi() {
  const { danhSachCuoc } = useSelector((state) => state.baucua);

  return (
    <div className="row">
      {danhSachCuoc.map((item) => (
        <div key={item.ma} className="col-sm-4">
          <ConVat data={item} />
        </div>
      ))}
    </div>
  );
}
