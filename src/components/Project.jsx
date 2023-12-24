import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/projects.json"; // Import your JSON data here
import "./Project.scss";
import Navbar from "./Navbar";

const Project = () => {
  const { project_id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    // Simulate fetching project data based on project_id
    const fetchedProject = projectsData.projects.find(
      (proj) => proj.id === parseInt(project_id)
    );
    setProject(fetchedProject);
  }, [project_id]);

  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <div className="project-page-container">
        {project ? (
          <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <img src={(`${process.env.PUBLIC_URL}/${project.image}`)} alt={project.title} />
            <div>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default Project;
