import "./App.css";
import { Route, Switch, withRouter, Redirect, NavLink } from "react-router-dom";
import GamesPage from "./pages/Games/GamesPage";
import GamePage from "./pages/Game/GamePage";

function App() {
  // comment again
  let routes = (
    <Switch>
      <Route path="/games/:id" component={GamePage}/>
      <Route path="/games" component={GamesPage}/>
      <Route path="/" exact component={() => <NavLink to="/games">Demo</NavLink>}/>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <>
      {routes}
    </>
  )
}

export default withRouter(App);
