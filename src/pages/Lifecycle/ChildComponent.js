import React, { Component, PureComponent } from "react";

//PureComponent giống component tư nhiên PureComponent sẽ xét giá trị đầu vào của props có thay đổi hay không => nếu có mới render lại
//showldComponentUpdate không tồn tại trong PureComponent (vì PureComponent đã xử lý rendẻ tự động tương tự với lifecycle này)
export default class ChildComponent extends PureComponent {
  setInterval = {};
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor Child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return currentState;
  }
  //   shouldComponentUpdate(newProps, newState) {
  //     // xử lý => return về false thì giao diện không render lại, return true giao diện render lại (default)
  //     return true;
  //   }
  render() {
    console.log("render lại giao diện rồi nha");
    return (
      <div>
        <br />
        ChildComponent
        <br />
        Props Child:
        {this.props.stateNumber.number}
      </div>
    );
  }
  //Lifecycle dùng để gọi api
  componentDidMount() {
    //chạy 1 lần sau lần rendẻ đầu tiên
    console.log("componentDidMount child");
  }
  //componentDiđUpate chạy kể từ lần thay đổi próp hoặc state
  componentDidUpdate(prevProps, prevState) {
    // hạn chế setSate trong component này (Muốn setSate phải có điều kiện if);
    console.log("componentDidUpdate child");
    this.setInterval = setInterval(() => {
      console.log("object");
    }, 1000);
  }
  //lifcycle chạy trước khi component mất khỏi giao diện
  componentWillUnmount() {
    clearInterval(this.setInterval);
  }
}
