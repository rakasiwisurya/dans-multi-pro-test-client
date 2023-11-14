import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { webStorage } from "../utils/webStorage";
import { useDispatch } from "react-redux";
import { setUser } from "../redux";

const Header = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser({ user: null }));
    webStorage.clear();
  };

  return (
    <Navbar bg="primary">
      <Container fluid>
        <div className="d-flex justify-content-between w-100">
          <h1 className="fs-3 fw-bold text-light">
            GitHub <span className="fw-normal">Jobs</span>
          </h1>

          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
