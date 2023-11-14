import React from "react";

const JobDetailDesc = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export default JobDetailDesc;
