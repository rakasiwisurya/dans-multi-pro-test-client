import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { webStorage } from "./utils/webStorage";
import { setUser } from "./redux";
import { Spinner } from "react-bootstrap";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setUser({ user: webStorage.get("user"), isLoading: false }));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (user && pathname === "/login") navigate("/", { replace: true });
      if (!user && pathname !== "/login") navigate("/login", { replace: true });
    }
  }, [isLoading, user]);

  if (isLoading)
    return (
      <div className="vh-100 w-100 d-flex align-items-center justify-content-center">
        <Spinner animation="border" />
      </div>
    );

  return children;
};

export default Auth;
