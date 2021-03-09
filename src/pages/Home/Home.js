import React, { Component } from "react";
import axios from "axios";
export default class Home extends Component {
  state = {
    arrFilms: [],
  };
  loadFilm = () => {
    //Dung axios goi thong tin tu backed ve qua api
    const promise = axios({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01 ",
      method: "GET",
    });
    //xu ly thanh cong
    promise.then((result) => {
      console.log("resul", result.data);
      this.setState({
        arrFilms: result.data,
      });
    });
    // xu ly khi request loi
    promise.catch((error) => {
      console.log("err", error.response.data);
    });
  };
  renderFilms = () => {
    return this.state.arrFilms.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-white bg-dark">
            <img className="card-img-top" src={film.hinhAnh} alt />
            <div className="card-body">
              <h4 className="card-title">{film.tenPhim}</h4>
              <p className="card-text">{film.moTa}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        Home
        <button className="btn btn-success" onClick={this.loadFilm}>
          Lấy danh sách phim
        </button>
        <div className="text-center display4">Danh SAch PHim</div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }

  //hàm giống hàm render  của react component kế thừa nên có
  componentDidMount() {
    // các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    this.loadFilm();
  }
}