import { Switch } from "react-router-dom";
import Login from "../pages/Login";
import Showcase from "../pages/Showcase";
import Signup from "../pages/Signup";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/signup" component={Signup} />

      <Route path="/showcase" isPrivate component={Showcase} />
    </Switch>
  );
};

export default Routes;
