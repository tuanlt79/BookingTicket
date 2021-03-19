import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class Lifecycle extends Component {
  // state={}
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      stateNumber: {
        number: 1,
      },
    };
    console.log("constructer");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return currentState;
  }
  shouldComponentUpdate(newProps, newState) {
    // xử lý => return về false thì giao diện không render lại, return true giao diện render lại (default)
    return true;
  }
  render() {
    console.log("render");
    return (
      <div>
        Lifecycle
        <h1> {this.state.stateNumber.number}</h1>
        <button
          onClick={() => {
            // this.setState({
            //   number: this.state.number + 1,
            // });
            let newStateNumber = { ...this.state.stateNumber };
            newStateNumber.number += 1;
            this.setState({
              stateNumber: newStateNumber,
            });
          }}
        >
          Click
        </button>
        {this.state.stateNumber.number < 3 ? (
          <ChildComponent stateNumber={this.state.stateNumber} />
        ) : (
          ""
        )}
      </div>
    );
  }
  //Lifecycle dùng để gọi api
  componentDidMount() {
    //chạy 1 lần sau lần rendẻ đầu tiên
    console.log("componentDidMount");
  }
  //componentDiđUpate chạy kể từ lần thay đổi próp hoặc state
  componentDidUpdate(prevProps, prevState) {
    // hạn chế setSate trong component này (Muốn setSate phải có điều kiện if);
    console.log("componentDidUpdate");
  }
}
