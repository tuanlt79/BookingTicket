import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { layThongTinPhongVeAction } from "../../action/PhimAction";
import { taiKhoan } from "../../configs/setting";
import "./Checkout.css";
export default function Checkout(props) {
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  const { danhSachGheDangDat } = useSelector(
    (state) => state.QuanLyDatVeReducer
  );
  const dispatch = useDispatch();
  let { id } = props.match.params;

  useEffect(() => {
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  console.log("thongTinPHongVe", thongTinPhongVe);
  const renderGheDangDat = () => {
    return danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <Fragment key={index}>
          <span
            className="text-success font-weight display-4"
            style={{ fontSize: 23 }}
          >
            {gheDangDat.stt}
          </span>
        </Fragment>
      );
    });
  };
  const renderGhe = () => {
    return thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
      //xác định ghế đang đặt
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      let classGheDangDat = indexGheDD !== -1 ? "gheDangDat" : "";
      //Xác định ghế đã đặt và chưa đặt
      let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch({
                type: "DAT_GHE",
                ghe,
              });
            }}
          >
            {ghe.daDat === true ? "X" : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
    // const arrJSX = [];
    // for (let i = 1; i < 100; i++) {
    //   arrJSX.push(<button>{i}</button>);
    // }
    // return arrJSX;
  };
  const tinhTongTien = () => {
    return danhSachGheDangDat.reduce((tongTien, gheDangDat, index) => {
      return (tongTien += gheDangDat.giaVe);
    }, 0);
  };
  if (!localStorage.getItem(taiKhoan)) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 text-center">
          <div className=" text-center mt-5">
            <img
              className="logo"
              src="https://tix.vn/app/assets/img/icons/screen.png"
              alt=""
            />
          </div>
          {renderGhe()}
        </div>
        <div className="col-4 text-center">
          <div className="display-4 text-success">
            {tinhTongTien().toLocaleString()} VND
          </div>
          <hr />
          <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} width={300} alt="" />
          <hr />
          <h3>{thongTinPhongVe.thongTinPhim?.tenPhim}</h3>
          <div>Dia Chi: {thongTinPhongVe.thongTinPhim?.diaChi}</div>
          <div>
            Ngay Gio Chieu: {thongTinPhongVe.thongTinPhim?.ngayChieu} -
            {thongTinPhongVe.thongTinPhim?.gioChieu}
          </div>
          <hr />
          <h3 className="text-warning text-left">
            Ghe:
            {renderGheDangDat()}
            <hr />
          </h3>
          <div>
            <button className=" w-100 btn btn-success display-4S">
              DAT VE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
