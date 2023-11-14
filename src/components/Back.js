import React from "react";
import { Container } from "react-bootstrap";
import { ImArrowLeft } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();

  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <div
        className="d-flex align-items-center py-3"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        <ImArrowLeft className="text-secondary me-2" size={12} />
        <span className="text-primary fw-bold">Back</span>
      </div>
    </Container>
  );
};

export default Back;
