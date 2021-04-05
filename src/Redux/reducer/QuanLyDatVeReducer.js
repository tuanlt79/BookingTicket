const stateDatVe = {
  danhSachGheDangDat: [],
};
export const QuanLyDatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      //kiểm tra ghế có trong mảng danhSachGheDangDat=> có,xoá, không thì thêm vào
      let index = state.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.ghe.maGhe
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      } else {
        state.danhSachGheDangDat.push(action.ghe);
      }
      state.danhSachGheDangDat = [...state.danhSachGheDangDat];
      return { ...state };
    }
    case "resetDSG": {
      state.danhSachGheDangDat = [];
      return { ...state };
    }

    default:
      break;
  }
  return { ...state };
};
