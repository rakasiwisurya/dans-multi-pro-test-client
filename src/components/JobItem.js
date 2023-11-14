import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const JobItem = ({ className, job }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${className} d-flex justify-content-between`}
      onClick={() => navigate(`/job-detail/${job?.id}`)}
      style={{ cursor: "pointer" }}
    >
      <div>
        <div className="text-primary fw-bold">{job?.position}</div>
        <div>
          <span className="text-secondary">{job?.company}</span> -{" "}
          <span className="text-success fw-bold">{job?.status}</span>
        </div>
      </div>

      <div className="text-end">
        <div>{job?.location}</div>
        <div className="text-secondary">{moment(job?.createdAt).fromNow()}</div>
      </div>
    </div>
  );
};

export default JobItem;
