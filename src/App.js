import { Router } from "@reach/router";
import { render } from "react-dom";
import { injectGlobal } from "@emotion/css";
import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Search from "./views/Search";
import Schedule from "./views/Schedule";
import Details from "./views/Details";
import Login from "./views/Login";
import UserContextProvider from "./context/UserContext";

injectGlobal`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}`;

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Welcome path="/" />
        <Home path="/home" />
        <Search path="/search" />
        <Schedule path="/schedule" />
        <Details path="/details/:id" />
        <Login path="/login" />
      </Router>
    </UserContextProvider>
  );
};

render(<App />, document.querySelector("#root"));
