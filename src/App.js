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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Loading />
        {/* exact so sanh chinh xac /home moi ra /home chu khong phai vua home
        vua / . switch break khi bi trung */}
        <Switch>
          {/* <p className="text_color_red ">TEst</p> */};
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
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
          <Route exact path="/usestatedemo" component={UseStateHook} />
          <Route exact path="/baichonxe" component={BaiTapChonXe} />
          <Route exact path="/useeffecthome" component={UseEffectHome} />
          <Route exact path="/reduxhook" component={ReduxHookHome} />
          <Route exact path="/detail/:id" component={Details} />
          {/* root mac dinh de duoi cuoi cung o ung dung */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
