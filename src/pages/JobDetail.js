import React, { useEffect, useState } from "react";
import { Back, Header, JobDetailDesc, JobDetailHeader, JobDetailSide } from "../components";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();

  const [isDetailLoading, setIsDetailLoading] = useState(true);
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJob();
  }, []);

  const getJob = async () => {
    setIsDetailLoading(true);
    try {
      const response = await api.get(`/positions/${id}`);
      setJob(response?.data?.data);
      setIsDetailLoading(false);
    } catch (error) {
      console.error(error);
      if (error?.response?.data) toast.error(error?.response?.data?.message);
      setIsDetailLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Back />
      {isDetailLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" />
        </div>
      ) : (
        <Container fluid>
          <Card body className="p-2">
            <JobDetailHeader
              status={job?.status}
              location={job?.location}
              position={job?.position}
            />
            <Row className="g-4">
              <Col xs={12} md={8}>
                <JobDetailDesc description={job?.description} />
              </Col>
              <Col xs={12} md={4}>
                <JobDetailSide company={job?.company} image={job?.image} sources={job?.sources} />
              </Col>
            </Row>
          </Card>
        </Container>
      )}
    </>
  );
};

export default JobDetail;
