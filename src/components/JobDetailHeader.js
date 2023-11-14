import React from "react";

const JobDetailHeader = ({ status, location, position }) => {
  return (
    <div className="border-bottom pt-3 pb-4 mb-3">
      <div className="text-secondary">
        {status} / {location}
      </div>
      <div className="fs-3 fw-bold">{position}</div>
    </div>
  );
};

export default JobDetailHeader;
