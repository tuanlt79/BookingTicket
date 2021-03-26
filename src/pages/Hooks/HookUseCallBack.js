import React, { useState, memo, useCallback } from "react";
import Comen from "./Comen";
export default function HookUseCallBack() {
  let [like, setLike] = useState(1);
  let renderNotify = () => {
    return `Bạn đã thả ${like} ♥ !`;
  };
  const callbackRenderNotify = useCallback(renderNotify, [like]);
  return (
    <div className="m-5">
      Like: {like} ♥
      <br />
      <span
        style={{ cursor: "pointer", color: "red", fontSize: 35 }}
        onClick={() => {
          setLike(like + 1);
        }}
      >
        ♥
      </span>
      <br />
      <br />
      <Comen renderNotify={callbackRenderNotify} />
    </div>
  );
}
