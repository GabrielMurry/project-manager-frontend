import { FaCheckCircle, FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-6">
      {/* // "Not Started" Project card (border color change and FA icon) */}
      {project.status === "Not Started" ? (
        <div className="card mb-3 border-dark">
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
              <FaPauseCircle
                className="text-dark me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            </div>
          </div>
        </div>
      ) : project.status === "In Progress" ? ( // "In Progress" Project card (border color change and FA icon)
        <div className="card mb-3 border-warning">
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
              <FaPlayCircle
                className="text-warning me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            </div>
          </div>
        </div>
      ) : (
        // "Completed" Project card (border color change and FA icon)
        <div className="card mb-3 border-success">
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
              <FaCheckCircle
                className="text-success me-3 mt-2"
                style={{ fontSize: 25 }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
