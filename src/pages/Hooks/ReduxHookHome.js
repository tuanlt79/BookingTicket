import React, { useState, useEffect } from "react";
import axios from "axios";
//useSelector la hook de lay du lieu tu reducer ve
import { connect, useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimAction } from "../../action/PhimAction";

export default function ReduxHookHome(props) {
  const mangPhim = useSelector((state) => state.PhimReducer.mangPhim);
  //useDispatch tuong tu this.props.dispatch
  const dispatch = useDispatch();
  //   console.log(props);
  const renderPhim = () => {
    return mangPhim.map((phim, index) => {
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
  //use Effect phải đặt trước return,
  // nhận vào 2 tham số:
  // + tham số 1: là hàm chạy sau khi component render
  //+ tham số 2: chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
  // ghi chú: 1 component có thể gọi nhiều useEffect
  useEffect(() => {
    dispatch(layDanhSachPhimAction());
    return () => {
      // hàm này sẽ được kích hoạt khi component mất khỏi giao diện
    };
  }, []);

  return (
    <div className="container mt-5">
      <button className="btn btn-dark" onClick={() => {}}>
        Lay Danh Sach Phim
      </button>
      <div className="display-4 text-center">Danh Sach Phim</div>
      <div className="row">{renderPhim()}</div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     mangPhim: state.PhimReducer.mangPhim,
//   };
// };
// export default connect(mapStateToProps)(ReduxHookHome);
