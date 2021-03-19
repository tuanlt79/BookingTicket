import React, { useState } from "react";
//hook chỉ sử dụng cho rfc (react function component)

export default function UseStateHook() {
  //tuple: mảng hỗn hợp [1,'Nguyen Van A',function(){}]
  let [state, setState] = useState({
    number: 1,
  });
  // useState là hàm trả về 1 mảng gồm 2 giá trị là state
  let [number, setNumber] = useState(0);
  return (
    <div className="container">
      <h1>
        {state.number} - {number}
      </h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setState({
            number: state.number + 1,
          });
          setNumber(number + 1);
        }}
      >
        +
      </button>

      <button
        className="ml-5 btn btn-danger"
        onClick={() => {
          setState({
            number: state.number - 1,
          });
          setNumber(number - 1);
        }}
      >
        -
      </button>
    </div>
  );
}
