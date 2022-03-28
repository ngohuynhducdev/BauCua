// Initial state
const initialState = {
  diemThuong: 500,
  danhSachCuoc: [
    { ma: "nai", hinhAnh: "./img/nai.png", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./img/bau.png", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", diemCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./img/bau.png" },
    { ma: "bau", hinhAnh: "./img/bau.png" },
    { ma: "bau", hinhAnh: "./img/bau.png" },
  ],
};

// Reducer
const bauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GIAM_DIEM_CUOC": {
      const { ma } = action.payload;

      // Khi thay đổi state là array hoặc object, ta cần phải sao chép nó ra array hoặc object mới và thay đổi trên array hoặc obj mới, sau đó gán lại cho state muốn thay đổi
      // Cách 1:
      // const newDSC = [...state.danhSachCuoc];
      // const index = state.danhSachCuoc.findIndex((item) => item.ma === ma);
      // if (index !== -1) {
      //   newDSC[index].diemCuoc -= 100;
      // }
      // return { ...state, danhSachCuoc: newDSC };

      // Cách 2:
      const newDSC = state.danhSachCuoc.map((item) => {
        return item.ma === ma
          ? { ...item, diemCuoc: item.diemCuoc - 100 }
          : item;
      });
      return {
        ...state,
        danhSachCuoc: newDSC,
        diemThuong: state.diemThuong + 100,
      };
    }
    case "TANG_DIEM_CUOC": {
      const { ma } = action.payload;
      const newDSC = state.danhSachCuoc.map((item) => {
        return item.ma === ma
          ? { ...item, diemCuoc: item.diemCuoc + 100 }
          : item;
      });
      return {
        ...state,
        danhSachCuoc: newDSC,
        diemThuong: state.diemThuong - 100,
      };
    }
    case "DO_XUC_XAC": {
      // B1: Random ra 3 xúc xắc mới
      const newXucXac = state.xucXac.map(() => {
        // random ra 1 con số trong khoảng từ min tới max: Math.random() * (max - min + 1) + min
        // random từ 0 đến 5 => Math.random() * (5 - 0 + 1) + 0 => Math.random() * 6
        const number = Math.floor(Math.random() * 6);

        const xucXac = state.danhSachCuoc[number];
        return { ma: xucXac.ma, hinhAnh: xucXac.hinhAnh };
      });

      // B2: Tính điểm
      // B2.1: lấy ra những con vật mà người dùng đã cược
      const dsDatCuoc = state.danhSachCuoc.filter((item) => item.diemCuoc);
      // B2.2: Xử lý hoàn tiền cược nếu trúng
      const tienCuoc = dsDatCuoc.reduce((result, item) => {
        const found = newXucXac.find((xucXac) => xucXac.ma === item.ma);
        if (found) {
          result += item.diemCuoc;
        }
        return result;
      }, 0);
      // B2.3: Xử lý trả tiền thắng
      const tienThang = newXucXac.reduce((result, xucXac) => {
        const found = dsDatCuoc.find((item) => item.ma === xucXac.ma);
        if (found) {
          result += found.diemCuoc;
        }
        return result;
      }, 0);
      // B3: reset danh sách diểm cược về 0
      const newDSC = [...initialState.danhSachCuoc];

      return {
        ...state,
        xucXac: newXucXac,
        diemThuong: state.diemThuong + tienCuoc + tienThang,
        danhSachCuoc: newDSC,
      };
    }
    default:
      return state;
  }
};

export default bauCuaReducer;
