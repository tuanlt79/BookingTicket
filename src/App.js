import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Lifecycle from "./pages/Lifecycle/Lifecycle";
import UseStateHook from "./pages/Hooks/UseStateHook";
import BaiTapChonXe from "./pages/Hooks/BaiTapChonXe";
import UseEffectHome from "./pages/Hooks/UseEffectHome";
import ReduxHookHome from "./pages/Hooks/ReduxHookHome";
import Details from "./pages/Details/Details";
import HookUseCallBack from "./pages/Hooks/HookUseCallBack";
import HookUseMemo from "./pages/Hooks/HookUseMemo";
import UseRef from "./pages/Hooks/UseRef";
import ParentComponent from "./pages/HOC/ParentComponent";
import { HomTemplate } from "./templates/HomeTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Loading />
        {/* exact so sanh chinh xac /home moi ra /home chu khong phai vua home
        vua / . switch break khi bi trung */}
        <Switch>
          {/* <p className="text_color_red ">TEst</p> */};
          <HomTemplate exact path="/home" Component={Home} />
          <HomTemplate exact path="/home" Component={Home} />
          <HomTemplate exact path="/contact" Component={Contact} />
          <AdminTemplate exact path="/login" Component={Login} />
          <HomTemplate exact path="/register" component={Register} />
          <Route
            exact
            path="/lifecycle"
            render={(propsRoute) => {
              // tham số chứa các  props thẻ route
              return (
                <div>
                  <h3>Component lifecycle</h3>
                  <Lifecycle {...propsRoute} />
                </div>
              );
            }}
          ></Route>
          <HomTemplate exact path="/usestatedemo" component={UseStateHook} />
          <HomTemplate exact path="/baichonxe" component={BaiTapChonXe} />
          <HomTemplate exact path="/useeffecthome" component={UseEffectHome} />
          <HomTemplate exact path="/reduxhook" component={ReduxHookHome} />
          <HomTemplate exact path="/usecallback" component={HookUseCallBack} />
          <HomTemplate exact path="/detail/:id" component={Details} />
          <HomTemplate exact path="/usememo" component={HookUseMemo} />
          <HomTemplate exact path="/useref" component={UseRef} />
          <HomTemplate path="/demoprops" component={ParentComponent} />
          {/* root mac dinh de duoi cuoi cung o ung dung */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
// connect ()(App)
