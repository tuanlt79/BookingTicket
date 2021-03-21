import axios from "axios";

export const layDanhSachPhimAction = () => {
  return async (dispatch) => {
    //Goi action loading open
    dispatch({
      type: "openLoading",
    });
    setTimeout(async () => {
      const result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      //Sau khi lấy dữ liệu từ api về sử dụng hàm dispatch của redux thunk để đưa dữ liệu lên server
      dispatch({
        type: "LAY_DANH_SACH_PHIM",
        mangPhim: result.data,
      });
      //Tắt loading
      dispatch({
        type: "closeLoading",
      });
    }, 1000);
  };
};
// lấy thông tin chi tiết phim
export const layThongTinChiTietPhimAction = (maPhim) => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
