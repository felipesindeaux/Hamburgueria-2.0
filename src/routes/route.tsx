import { useSelector } from "react-redux";
import {
  Redirect,
  Route as ReactDOMRoute,
  RootStateOrAny,
} from "react-router-dom";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useSelector((state: RootStateOrAny) => state);

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/showcase"} />
        );
      }}
    />
  );
};

export default Route;
