import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, ...rest }) => {
  return localStorage.getItem("token") ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;

