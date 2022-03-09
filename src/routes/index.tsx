import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Login from "../pages/Login";
import Showcase from "../pages/Showcase";
import Singup from "../pages/Singup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>

      <Route path="/singup">
        <Singup />
      </Route>

      <Route path="/showcase">
        <Showcase />
      </Route>
    </Switch>
  );
};

export default Routes;
