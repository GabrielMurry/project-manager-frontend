import graphql from "./assets/graphql.png";
import apollo from "./assets/apollo.png";
import mongodb from "./assets/mongodb.png";

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <div className="">Project Manager</div>
          </div>
        </a>
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={mongodb} alt="mongodb logo" className="mr-2" />
            <img src={graphql} alt="graphql logo" className="mr-2" />
            <img src={apollo} alt="apollo logo" className="mr-2" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
