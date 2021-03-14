import React, { Component } from "react";
import { connect } from "react-redux";
class Register extends Component {
  state = {
    values: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
    errors: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDienThoai: "",
      hoTen: "",
    },
  };
  handleChangle = (event) => {
    const { value, name } = event.target;
    let newValues = { ...this.state.values };
    newValues[name] = value;
    let newErrors = { ...this.state.errors };
    let errors = "";
    if (value === "") {
      errors = name + " Không được bỏ trống !";
    }
    newErrors[name] = errors;
    this.setState({
      value: newValues,
      errors: newErrors,
    });
    // this.setState(
    //   {
    //     [name]: value,
    //   },
    //   () => {
    //     console.log(this.state);
    //   }
    // );
  };
  componentDidMount() {
    this.props.dispatch({
      type: "closeLoading",
    });
  }
  handleSubmit = (event) => {
    // Chặn sự kinệ reload của browser
    event.preventDefault();
    let valid = true;
    //Lỗi khi valid không hợp lệ
    //+ khi bất kì thuộc tính nào của errors != '' => bị lỗi
    for (let keyError in this.state.errors) {
      if (this.state.errors[keyError] !== "") {
        valid = false;
      }
    }
    // hoặc bất kì thuộc tính noà của value = '' => lỗi
    for (let keyValue in this.state.values) {
      if (this.state.values[keyValue] === "") {
        valid = false;
      }
    }

    if (!valid) {
      console.log("huhu");
      alert("Dữ Liệu không hợp lệ");
      return;
    }
  };
  render() {
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="display-4">Đăng Ký</div>
        <div className="form-group">
          <p>Tài Khoản</p>
          <input
            name="taiKhoan"
            className="form-control"
            onChange={this.handleChangle}
          />
          <p className="text-danger">{this.state.errors.taiKhoan}</p>
        </div>
        <div className="form-group">
          <p>Họ Tên</p>
          <input
            name="hoTen"
            className="form-control"
            onChange={this.handleChangle}
          />
          <p className="text-danger">{this.state.errors.hoTen}</p>
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            name="matKhau"
            className="form-control"
            onChange={this.handleChangle}
          />
          <p className="text-danger">{this.state.errors.matKhau}</p>
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            name="email"
            className="form-control"
            onChange={this.handleChangle}
          />
          <p className="text-danger">{this.state.errors.email}</p>
        </div>
        <div className="form-group">
          <p>Số Điện Thoại</p>
          <input
            name="soDienThoai"
            className="form-control"
            onChange={this.handleChangle}
          />
          <p className="text-danger">{this.state.errors.soDienThoai}</p>
        </div>
        <button type="submit" className="btn btn-success">
          Đăng Ký
        </button>
      </form>
    );
  }
}
export default connect()(Register);
