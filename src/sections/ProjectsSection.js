import React from "react";

const ProjectsSection = () => {
  return (
    <>
      <div className="grid place-items-center  grid-cols-1 md:grid-cols-3 gap-10">
        <ProjectCard livesite=""></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </>
  );
};

const ProjectCard = () => {
  return (
    <div class="card  bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Carpentry-Expart</h2>
        <p>
          <ul>
            <li>Admin and general role</li>
            <li>Payment system with stripe</li>
            <li>Authentication system with google and email and password</li>
          </ul>
        </p>
        <div class="card-actions justify-end">
          <a href="">
            <div class="badge badge-outline">Live demo</div>
          </a>
          <a href="">
            <div class="badge badge-outline">Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
