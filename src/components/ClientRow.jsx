import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientQueries";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }], // works BUT if you do that too much and start calling multiple queries, you might bog down your application
    // ----- not using update() because we want to delete not only the client, but the client's projects. So we want a cascading delete effect. query to re-call GET_CLIENTS and GET_PROJECTS
    // update(cache, { data: { deleteClient } }) {
    //   // better getting query from cache. NOT making a whole new request. Writing to cache, getting clients, setting clients in our data to filter out the client that matches the id of the one we want to delete (and filtering it out)
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td className="d-flex justify-content-end">
        <div className="dropdown">
          <button
            className="btn btn-danger btn-sm"
            data-bs-toggle="dropdown"
            data-bs-target="#dropdownMenuButton"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FaTrash />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a
              href="#"
              className="dropdown-item cursor-pointer text-danger"
              onClick={deleteClient}
            >
              Delete User?
            </a>
          </div>
        </div>
      </td>
    </tr>
  );
};

ClientRow.propTypes = {
  client: PropTypes.object,
};

export default ClientRow;
