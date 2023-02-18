import { useState } from "react";
import { FaList } from "react-icons/fa";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "../queries/clientQueries";
import { ADD_PROJECT } from "../mutations/projectMutations";

const AddProjectModal = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [clientId, setClientId] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: {
      name,
      description,
      clientId,
      status,
      startDate,
      endDate,
    },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });

  // Get Clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS, {});

  const onSubmit = (e) => {
    e.preventDefault();
    // if (name === "" || description === "" || status === "") {
    //   return alert("Please fill in all fields");
    // }

    addProject(name, description, clientId, status, startDate, endDate);

    setName("");
    setDescription("");
    setStatus("");
    setClientId("");
    setStartDate("");
    setEndDate("");
  };

  if (loading) {
    return null;
  }
  if (error) {
    return <p>Something Went Wrong</p>;
  }

  return (
    <>
      {!loading && !error && (
        <>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addProjectModal"
          >
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>New Project</div>
            </div>
          </button>

          {/* Modal */}
          <div
            className="modal fade"
            id="addProjectModal"
            tabIndex="-1"
            aria-labelledby="addProjectModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addProjectModalLabel">
                    New Project
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form
                    className="was-validated"
                    noValidate
                    onSubmit={onSubmit}
                  >
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        id="description"
                        value={description}
                        required
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        required
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status...</option>
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>

                    {/* Select Client (with options of each client to select) */}
                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        required
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <option value="">Select Client...</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Start Date */}
                    <div>
                      <label className="form-label">Project Start Date</label>
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Project End Date */}
                    <div>
                      <label className="form-label">Project End Date</label>
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                        />
                      </div>
                    </div>

                    {name !== "" &&
                    description !== "" &&
                    status !== "" &&
                    clientId !== "" ? (
                      <button
                        type="submit"
                        data-bs-dismiss="modal" // closes modal!
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    ) : (
                      <button className="btn btn-primary" disabled>
                        Submit
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProjectModal;
