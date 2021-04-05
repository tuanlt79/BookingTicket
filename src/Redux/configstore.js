import { applyMiddleware, combineReducers, createStore } from "redux";
import { PhimReducer } from "./reducer/PhimReducer";
import reduxThunk from "redux-thunk";
import { LoadingReducer } from "./reducer/LoadingReducer";
import { QuanLyDatVeReducer } from "./reducer/QuanLyDatVeReducer";
import { NguoiDungReducer } from "./reducer/NguoiDungReducer";
//state tổng của ứng dụng
const rootReducer = combineReducers({
  PhimReducer,
  LoadingReducer,
  QuanLyDatVeReducer,
  NguoiDungReducer,
});
export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
