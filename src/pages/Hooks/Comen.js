import React, { memo } from "react";

function Comen(props) {
  console.log("comment");
  return (
    <div>
      {props.renderNotify()}
      <textarea></textarea> <br />
      <button>Gửi</button>
    </div>
  );
}
//Sử dụng memo để bao component lại
export default memo(Comen);
