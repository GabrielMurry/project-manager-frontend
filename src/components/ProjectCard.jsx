import { FaCheckCircle, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="card mb-3"
        style={
          project.status === "Not Started"
            ? { border: "thin solid #292b2c" }
            : project.status === "In Progress"
            ? { border: "thin solid #f0ad4e" }
            : { border: "thin solid #5cb85c" }
        }
      >
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>

            <a className="btn btn-light" href={`/project/${project.id}`}>
              View
            </a>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="small">
              Status: <strong>{project.status}</strong>
            </p>
            {project.status === "Not Started" ? (
              <FaPauseCircle
                className="text-dark me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            ) : project.status === "In Progress" ? (
              <FaPlayCircle
                className="text-warning me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            ) : (
              <FaCheckCircle
                className="text-success me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
