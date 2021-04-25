import axios from "axios";
import { history } from "../App";
import { accessToken } from "../configs/setting";
import { layThongTinPhongVeAction } from "./PhimAction";
export const datVeAction = (thongTinDatVe) => {
  // {   // du lieu back-end can
  //     "maLichChieu": 0,
  //     "danhSachVe": [
  //       {
  //         "maGhe": 0,
  //         "giaVe": 0
  //       }
  //     ],
  //     "taiKhoanNguoiDung": "string"
  //   }
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
        method: "POST",
        data: thongTinDatVe, //JWT
        headers: {
          Authorization: "Bearer " + localStorage.getItem(accessToken),
          //Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWNjb3VudDEyMjkiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJLaGFjaEhhbmciLCJuYmYiOjE2MTc2MjMzOTksImV4cCI6MTYxNzYyNjk5OX0.w8qyvjUpxjxMLCF7l5XuUE-Y74oGUYIRCJuuH9FxKsk
        },
      });
      //200: call api thanh cong
      // 201: (Dữ liệu được khởi tạo)
      // 400: dữ liệu yêu cầu không hợp lệ
      //404: tìm không thấy data từ server
      // 401: không có quyền truy cập vào api
      //500: lỗi xảy ra trên server (có thể backend sai hoặc fronted sai)
      if (result.status === 200) {
        alert("Dat Ve Thanh Cong");
        history.push(`/checkout/${thongTinDatVe.maLichChieu}`);
        dispatch(layThongTinPhongVeAction(thongTinDatVe.maLichChieu));
      }
      console.log({ result });
    } catch (errors) {
      console.log(errors);
    }
  };
};
