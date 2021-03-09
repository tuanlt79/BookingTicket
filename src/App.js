import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./Contact/Contact";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* exact so sanh chinh xac /home moi ra /home chu khong phai vua home
        vua / . switch break khi bi trung */}
        <Switch>
          {/* <p className="text_color_red ">TEst</p> */};
          <Route exact path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* root mac dinh de duoi cuoi cung o ung dung */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
