import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../action/PhimAction";
export default function Details(props) {
  //   console.log(props);
  const { chiTietPhim } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
  //tu goi api khi trang vua load
  useEffect(() => {
    // lay tham so tu url
    let { id } = props.match.params;
    //goi action truyen vao id phim
    dispatch(layThongTinChiTietPhimAction(id));
  }, []);
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
    </div>
  );
}
