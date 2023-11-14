import React from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import JobItem from "./JobItem";

const JobList = ({ isJobsLoading, jobs, isLoadMoreLoading, onLoadMore, isHasNext }) => {
  if (isJobsLoading) {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center my-3">
        <Spinner animation="border" />
      </Container>
    );
  }

  return (
    <Container fluid className="mt-4">
      {jobs?.length > 0 ? (
        <>
          <div>
            {jobs?.map((job, index) => (
              <JobItem
                className={`${
                  index === jobs?.length - 1 ? "mb-4" : "border-top"
                } border-bottom border-2 p-3`}
                job={job}
                key={`jobItem-${index}`}
              />
            ))}
          </div>

          {isHasNext && (
            <Button
              variant="primary"
              onClick={onLoadMore}
              className="w-100"
              disabled={isLoadMoreLoading}
            >
              {isLoadMoreLoading ? <Spinner animation="border" /> : "More Jobs"}
            </Button>
          )}
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center">No Data</div>
      )}
    </Container>
  );
};

export default JobList;
