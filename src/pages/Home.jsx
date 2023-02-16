import React from "react";
import AddClientModal from "../components/AddClientModal";
import AddProjectModal from "../components/AddProjectModal";
import Clients from "../components/Clients";
import Projects from "../components/Projects";
import FilterProjects from "../components/FilterProjects";
import { useState } from "react";

const Home = () => {
  const [filterValue, setFilterValue] = useState("all");

  return (
    <>
      <div className="d-flex mb-4">
        <div className="d-flex gap-3">
          <AddClientModal />
          <AddProjectModal />
        </div>
        <div className="ms-auto">
          <FilterProjects setFilterValue={setFilterValue} />
        </div>
      </div>
      <Projects filterValue={filterValue} />
      <hr />
      <Clients />
    </>
  );
};

export default Home;
