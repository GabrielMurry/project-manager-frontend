import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQueries";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";
import { FaCheckCircle, FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const Project = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <>
      {!loading && !error && (
        <div
          className="mx-auto w-75 card p-5"
          style={
            data.project.status === "Not Started"
              ? { border: "thin solid #292b2c" }
              : data.project.status === "In Progress"
              ? { border: "thin solid #f0ad4e" }
              : { border: "thin solid #5cb85c" }
          }
        >
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <div className="d-flex">
            <div>
              <h5 className="mt-3">Project Status</h5>
              <p className="lead">{data.project.status}</p>
            </div>
            <div className="ms-auto d-flex align-items-center">
              {data.project.status === "Not Started" ? (
                <FaPauseCircle
                  className="text-dark me-3 mt-2"
                  style={{ fontSize: 35 }}
                />
              ) : data.project.status === "In Progress" ? (
                <FaPlayCircle
                  className="text-warning me-3 mt-2"
                  style={{ fontSize: 35 }}
                />
              ) : (
                <FaCheckCircle
                  className="text-success me-3 mt-2"
                  style={{ fontSize: 35 }}
                />
              )}
            </div>
          </div>

          <div>
            <h5>Start Date</h5>
            <p className="lead">
              {data.project.startDate ? data.project.startDate : "N/A"}
            </p>
            <h5>End Date</h5>
            <p className="lead">
              {data.project.startDate ? data.project.endDate : "N/A"}
            </p>
          </div>

          <ClientInfo client={data.project.client} />

          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
};

export default Project;
