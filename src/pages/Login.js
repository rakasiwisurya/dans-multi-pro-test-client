import React, { useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../utils/api";
import { webStorage } from "../utils/webStorage";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginLoading, setIsLoginLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoginLoading(true);

    try {
      const response = await api.post("/login", form);
      setIsLoginLoading(false);
      toast.success(response.data.message);
      webStorage.set("user", response.data.data);
      navigate("/", { replace: true });
    } catch (error) {
      console.error(error);
      if (error?.response?.data) toast.error(error?.response?.data?.message);
      setIsLoginLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card body className="shadow" style={{ padding: "30px 20px" }}>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={handleChange}
              value={form.username}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={handleChange}
              value={form.password}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={isLoginLoading}>
            {isLoginLoading ? <Spinner animation="border" /> : "Submit"}
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
