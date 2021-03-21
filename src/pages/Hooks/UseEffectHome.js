import React, { useState, useEffect } from "react";
import axios from "axios";
// làm trang chủ tương tự clas Home tuy nhiên làm = function component
export default function UseEffectHome() {
  const [arrPhim, setArrPhim] = useState([]); // tao ra state cho mang phim => load ra trang chu
  const renderPhim = () => {
    return arrPhim.map((phim, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={phim.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{phim.tenPhim}</h4>
              <p className="card-text">{phim.moTa}</p>
              <button className="btn btn-success">Dat Ve</button>
            </div>
          </div>
        </div>
      );
    });
  };
  //use Effect phải đặt trước retủn,
  // nhận vào 2 tham số:
  // + tham số 1: là hàm chạy sau khi component render
  //+ tham số 2: chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
  // ghi chú: 1 component có thể gọi nhiều useEffect
  useEffect(() => {
    layDanhSachPhim();
    //   return () = {
    //       // hàm này sẽ được kích hoạt khi component mất khỏi giao diện

    //   }
  }, []);
  const layDanhSachPhim = async () => {
    try {
      let result = await axios({
        url:
          "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
        method: "GET",
      });
      setArrPhim(result.data);
    } catch (errors) {
      console.log("errors", errors);
    }
  };
  return (
    <div className="container mt-5">
      <button
        className="btn btn-dark"
        onClick={() => {
          layDanhSachPhim();
        }}
      >
        Lay Danh Sach Phim
      </button>
      <div className="display-4 text-center">Danh Sach Phim</div>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
