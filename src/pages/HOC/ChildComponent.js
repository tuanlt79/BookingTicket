import React from "react";

export default function ChildComponent(props) {
  return <div>Title: {props.children}</div>;
}
