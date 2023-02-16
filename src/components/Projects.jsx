import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";

const Projects = ({ filterValue }) => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {/* cannot directly manipulate state. Create a copy of new array of objects by spreading state - creates a copy (could also use concat), we sort, then map! */}
          {filterValue === "all"
            ? [...data.projects]
                .sort((a, b) => (a.status < b.status ? 1 : -1))
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
            : filterValue === "new"
            ? data.projects.map((project) => {
                if (project.status === "Not Started") {
                  return <ProjectCard key={project.id} project={project} />;
                }
              })
            : filterValue === "progress"
            ? data.projects.map((project) => {
                if (project.status === "In Progress") {
                  return <ProjectCard key={project.id} project={project} />;
                }
              })
            : filterValue === "completed"
            ? data.projects.map((project) => {
                if (project.status === "Completed") {
                  return <ProjectCard key={project.id} project={project} />;
                }
              })
            : ""}
        </div>
      ) : (
        <h5>No Projects</h5>
      )}
    </>
  );
};

Projects.propTypes = {
  filterValue: PropTypes.string,
};

export default Projects;
