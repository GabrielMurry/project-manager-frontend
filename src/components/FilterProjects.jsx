import { FaFilter } from "react-icons/fa";
import PropTypes from "prop-types";

const FilterProjects = ({ setFilterValue }) => {
  return (
    <>
      <div className="dropdown">
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="dropdown"
          data-bs-target="#dropdownMenuButton"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FaFilter />
        </button>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a
            href="#"
            className="dropdown-item cursor-pointer"
            onClick={() => setFilterValue("all")}
          >
            All
          </a>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => setFilterValue("new")}
          >
            Not Started
          </a>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => setFilterValue("progress")}
          >
            In Progress
          </a>
          <a
            href="#"
            className="dropdown-item"
            onClick={() => setFilterValue("completed")}
          >
            Completed
          </a>
        </div>
      </div>
    </>
  );
};

FilterProjects.propTypes = {
  setFilterValue: PropTypes.func,
};

export default FilterProjects;
