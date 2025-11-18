import React from "react";
import Header from "../components/Header";
import projectsdata from "./projectsdata";
import { useHistory } from "react-router-dom";  // âœ… useHistory instead of useNavigate

function Projects() {
  const history = useHistory();

  return (
    <div>
      <Header />

      <h1 className="projects-heading">Take a look at our Products</h1>
      <hr />

      <div className="container projects-list" id="projects-list">
        <div className="row">
          {projectsdata.map((project) => (
            <div className="col-md-4" key={project.title}>
              <div className="position-relative project">
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <hr />
                  <p>{project.description}</p>
                  <button
                    className="primary-button"
                    onClick={() => history.push("/contact")} // âœ… redirect
                  >
                    GET QUOTATION
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
