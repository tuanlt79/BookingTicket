import React from "react";
import { withFormik, useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { dangNhapAction } from "../../action/NguoiDungAction";

export default function Login(props) {
  console.log({ props });

  //cac props cua formik cung cap
  const dispatch = useDispatch();
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .required("Tai Khoan khong duoc bo trong")
        .min(6, "Tk toi thieu 6 ky tu"),
      // .matches(
      //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      //   "email khong hop le"
      // ),
      matKhau: yup.string().required("Mat Khau khong dc bo trong"),
    }),
    onSubmit: (values) => {
      //valúe <=> this.sate.values (react class component)
      // alert(JSON.stringify(values, null, 2));
      //gọi api hoặc action để đưa dữ liệu về server
      dispatch(dangNhapAction(values));
    },
  });

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Dang Nhap</h3>
      <div className="form-group">
        <p>Tai Khoan</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.taiKhoan && touched.taiKhoan ? (
          <p className="text-danger">{errors.taiKhoan}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Mat Khau </p>
        <input
          className="form-control"
          name="matKhau"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.matKhau && touched.matKhau ? (
          <p className="text-danger">{errors.matKhau}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success" disabled={!isValid}>
          Dang Nhap
        </button>
      </div>
    </form>
  );
}
