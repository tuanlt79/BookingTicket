import React, { useRef, useState } from "react";

export default function UseRef(props) {
  let [number, setNumber] = useState(1);
  let messRef = useRef("");
  console.log({ messRef });
  return (
    <div className="mt-5 text-center">
      {number}
      <br />
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
          messRef.current = "Data da dc thay doi";
          //   console.log(messRef);
        }}
      >
        +
      </button>
    </div>
  );
}
