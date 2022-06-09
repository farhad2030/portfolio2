import React from "react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <>
      <div className="p-10 text-3xl font-bold text-center">
        <span className="text-blue-500">//</span> Project{" "}
        <span className="text-blue-500">//</span>{" "}
      </div>
      <div className="grid place-items-strach  grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <ProjectCard
          projectName="Carpentry-Expart"
          livesite="https://carpentry-expert.firebaseapp.com/"
          github="https://github.com/farhad2030/carpentry-expert-frontend"
          backend="https://github.com/farhad2030/carpentry-expart-server"
          image="images/carpentry-expart.png"
          feature={[
            "Admin and general role",
            "Payment system with stripe",
            "Authentication system with google and email and password",
          ]}
        />
        <ProjectCard
          projectName="Dental-care"
          livesite="https://dental-care-47c25.web.app/"
          github="https://github.com/farhad2030/dental-care.git"
          image="images/dantal.png"
          feature={[
            " Display personal services",
            "Authentication system implemented",
            "Protected system implemented",
          ]}
        />
        <ProjectCard
          projectName="ComReview"
          livesite="https://deft-pony-e32850.netlify.app/reviews"
          github="https://github.com/farhad2030/review-chart.git"
          image="images/comreview.png"
          feature={["Display blog", "Use Graph", "FAQ Section"]}
        />
      </div>
    </>
  );
};

const ProjectCard = (props) => {
  const { projectName, github, backend, livesite, image, feature } = props;

  return (
    <div class="card  bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt={projectName} />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{projectName}</h2>
        <p className="my-5">
          {feature.map((f, i) => {
            return <li key={i}>{f}</li>;
          })}
        </p>
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
        <Link
          to="/projectDetails"
          className="btn mt-10"
          state={{
            projectName: projectName,
            feature: feature,
            backend: backend,
            image: image,
            livesite: livesite,
            github: github,
          }}
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
