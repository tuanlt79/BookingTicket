import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinPhongVeAction } from "../../action/PhimAction";
export default function Checkout(props) {
  const { thongTinPhongVe } = useSelector((state) => state.PhimReducer);
  const dispatch = useDispatch();
  let { id } = props.match.params;

  useEffect(() => {
    dispatch(layThongTinPhongVeAction(id));
  }, []);
  console.log("thongTinPHongVe", thongTinPhongVe);
  return <div>{thongTinPhongVe.thongTinPhim.tenPhim}</div>;
}
