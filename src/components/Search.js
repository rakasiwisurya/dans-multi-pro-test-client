import React from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";

const Search = ({ isSearchLoading, onSearch, onChange, form }) => {
  return (
    <Container fluid className="my-3">
      <Form onSubmit={onSearch}>
        <Row xs={12} className="g-3 align-items-end">
          <Col md={4}>
            <Form.Group controlId="description">
              <Form.Label>Job Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Filter by title, benefits, companies, expertise"
                onChange={onChange}
                value={form.description}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Filter by city, state, zip code or country"
                onChange={onChange}
                value={form.location}
              />
            </Form.Group>
          </Col>

          <Col md={2} className="d-flex justify-content-center">
            <Form.Group controlId="fullTime">
              <Form.Check
                label="Full Time"
                type="checkbox"
                onChange={(e) => onChange(e, "checked")}
                checked={form.fullTime}
              />
            </Form.Group>
          </Col>

          <Col md={2}>
            <Button variant="primary" type="submit" className="w-100" disabled={isSearchLoading}>
              {isSearchLoading ? <Spinner animation="border" /> : "Search"}
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Search;
