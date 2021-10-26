import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Header from "./components/header/Header";
import Posts from "./components/posts/Posts";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useContext } from "react";
import { Context } from "./context/Context";

const Admin = createContext();
const Username  = createContext();
function App() {
  const { user } = useContext(Context);
  let isAdmin = 0;
  if(user !== null)
  {
    let userName = user.username;
    console.log(userName);
    if(userName == 'Admin')
    {
      isAdmin = 1;
    }
  }
  console.log(isAdmin);
  return (
    <>
      <Router>
        <TopBar />
        {isAdmin ? <Header Admin = {isAdmin} /> : <></>}
        <Switch>
          <Route exact path="/">
             <Home user ={user}/>
          </Route>
          <Route path="/register">{user ? <Home /> : <Register />}</Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/write">{user ? <Write /> : <Register />}</Route>
          <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
