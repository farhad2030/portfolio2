import React from "react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <>
      <div className="p-10 text-3xl font-bold text-center">
        <span className="text-blue-500">//</span> Project{" "}
        <span className="text-blue-500">//</span>{" "}
      </div>
      <div className="grid place-items-center  grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <ProjectCard
          projectName="Carpentry-Expart"
          livesite="https://carpentry-expert.firebaseapp.com/"
          github="https://github.com/farhad2030/carpentry-expert-frontend"
          backend="https://github.com/farhad2030/carpentry-expart-server"
          image="images/carpentry-expart.png"
          feature={
            <ul>
              <li>Admin and general role</li>
              <li>Payment system with stripe</li>
              <li>Authentication system with google and email and password</li>
            </ul>
          }
        />
        <ProjectCard
          projectName="Dental-care"
          livesite="https://dental-care-47c25.web.app/"
          github="https://github.com/farhad2030/dental-care.git"
          image="images/dantal.png"
          feature={
            <ul>
              <li>Display personal services</li>
              <li>Authentication system implemented</li>
              <li>Protected system implemented</li>
            </ul>
          }
        />
        <ProjectCard
          projectName="ComReview"
          livesite="https://deft-pony-e32850.netlify.app/reviews"
          github="https://github.com/farhad2030/review-chart.git"
          image="images/comreview.png"
          feature={
            <ul>
              <li>Display blog</li>
              <li>Use Graph</li>
              <li>FAQ Section</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

const ProjectCard = ({
  projectName,
  github,
  backend,
  livesite,
  image,
  feature,
}) => {
  return (
    <div class="card  bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt={projectName} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{projectName}</h2>
        <p>{feature}</p>
        <div class="card-actions justify-end">
          <a href={livesite}>
            <div class="badge badge-outline">Live demo</div>
          </a>
          <a href={github}>
            <div class="badge badge-outline">Github</div>
          </a>
          {backend ? (
            <a href={backend}>
              <div class="badge badge-outline">Backend</div>
            </a>
          ) : (
            ""
          )}
        </div>
        <Link to="/projectDetails" className="btn my-10">
          {" "}
          More details
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
