import React, { useState } from "react";

export default function BaiTapChonXe(props) {
  let [imgSrc, setImgSrc] = useState("./img/car/imgRedCar.jpg");
  const changeColor = (color) => {
    setImgSrc(`./img/car/img${color}Car.jpg`);
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img className="w-100" src={imgSrc} />
        </div>
        <div className="row">
          <div className="col-6">
            <button
              className="col-6 btn btn-danger"
              style={{ color: "red" }}
              onClick={() => {
                changeColor("Red");
              }}
            >
              Red car
            </button>
          </div>
          <div className="col-6">
            <button
              className="col-6 btn btn-secondary"
              style={{ color: "silver" }}
              onClick={() => {
                changeColor("Silver");
              }}
            >
              Silver car
            </button>
          </div>
          <div className="col-6">
            <button
              className="col-6 btn btn-dark"
              style={{ color: "black" }}
              onClick={() => {
                changeColor("Black");
              }}
            >
              Black car
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
