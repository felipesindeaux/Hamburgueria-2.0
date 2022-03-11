import { Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login";
import Showcase from "../pages/Showcase";
import Singup from "../pages/Singup";
import Route from "./route";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />

      <Route path="/singup" component={Singup} />

      <Route path="/showcase" isPrivate component={Showcase} />
    </Switch>
  );
};

export default Routes;
