import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { layThongTinChiTietPhimAction } from "../../action/PhimAction";
import moment from "moment";
export default function Details(props) {
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
  //tu goi api khi trang vua load
  useEffect(() => {
    // lay tham so tu url
    let { id } = props.match.params;
    //goi action truyen vao id phim
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);
  console.log("chiTietPhim", chiTietPhim);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img src={chiTietPhim.hinhAnh} alt="" className="w-100" />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Ten Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mo TA</th>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem explicabo cum voluptatem saepe, doloremque harum
                unde dolore praesentium illo eius corrupti eaque recusandae iure
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <div className="mt-5">
        <div className="row">
          <div
            className="nav flex-column nav-pills col-4"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              let activeClass = index === 0 ? "active" : "";
              return (
                <a
                  key={index}
                  className={`nav-link ${activeClass}`}
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href={`#${heThongRap.maHeThongRap}`}
                  role="tab"
                  aria-controls={`${heThongRap.maHeThongRap}`}
                  aria-selected="true"
                >
                  <img src={heThongRap.logo} width="50px" alt="" />
                  {heThongRap.tenHeThongRap}
                </a>
              );
            })}
          </div>
          <div className="tab-content col-8" id="v-pills-tabContent ">
            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
              let activeClass = index === 0 ? "active" : "";
              return (
                <div
                  key={index}
                  className={`tab-pane fade show ${activeClass}`}
                  id={`${heThongRap.maHeThongRap}`}
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  {/* load cum rap chieu tu heThongRap.cumRapChieu */}
                  {heThongRap.cumRapChieu?.map((cumRap, index) => {
                    return (
                      <div key={index}>
                        <h3>{cumRap.tenCumRap}</h3>
                        <div className="row">
                          {cumRap.lichChieuPhim
                            ?.slice(0, 8)
                            .map((lichChieu, index) => {
                              return (
                                <NavLink
                                  to={`/checkout/${lichChieu.maLichChieu}`}
                                  className="col-3 text-success"
                                >
                                  {moment(lichChieu.ngayChieuGioChieu).format(
                                    "hh:mm A"
                                  )}
                                </NavLink>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
