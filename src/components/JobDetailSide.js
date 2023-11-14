import React from "react";
import { Card, Image } from "react-bootstrap";

const JobDetailSide = ({ company, image, sources }) => {
  return (
    <sidebar>
      <Card className="mb-3">
        <Card.Header className="fw-bold">{company}</Card.Header>
        <Card.Body>
          <Image src={image} width="100%" className="mb-3" />

          <a href={sources[0].resource} target="_blank" rel="noopener noreferrer">
            {sources[0].resource}
          </a>
        </Card.Body>
      </Card>

      <Card style={{ backgroundColor: "#ffffe0" }}>
        <Card.Header className="fw-bold">How To Apply</Card.Header>
        <Card.Body>
          <p>
            Email your resume to{" "}
            <a href={sources[1].resource} target="_blank" rel="noopener noreferrer">
              {sources[1].resource}
            </a>{" "}
            or apply directly at{" "}
            <a href={sources[2].resource} target="_blank" rel="noopener noreferrer">
              {sources[2].resource}
            </a>
          </p>
        </Card.Body>
      </Card>
    </sidebar>
  );
};

export default JobDetailSide;
