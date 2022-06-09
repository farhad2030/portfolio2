import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const location = useLocation();
  console.log(location.state);
  console.log(location);
  const { projectName } = location.state;
  return (
    <div className="m-10">
      <h1 className="text-5xl ">{projectName}</h1>
      <div className="my-5">
        <div class="badge badge-outline mx-2">Github</div>
        <div class="badge badge-outline mx-2">Github</div>
        <div class="badge badge-outline mx-2">Github</div>
      </div>
      <div>
        <h3 className="text-3xl my-5">Description</h3>
      </div>
      <div>
        <h3 className="text-3xl">Features</h3>
        <div className="ml-5 mt-5">
          <li>kdfj</li>
          <li>kdfj</li>
          <li>kdfj</li>
          <li>kdfj</li>
        </div>
      </div>
      <div>
        <h3 className="text-3xl my-5">Screenshots</h3>
      </div>
    </div>
  );
};

export default ProjectDetails;
