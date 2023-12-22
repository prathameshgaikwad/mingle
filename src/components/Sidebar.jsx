import PropTypes from "prop-types";
import { FiHome } from "react-icons/fi";
import { CgAdd } from "react-icons/cg";
import MingleLogo from "./MingleLogo";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "220px", height: "100vh", position: "sticky", top: "0" }}>
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        style={{ gap: "5px" }}>
        <MingleLogo className="header-logo" />
        <span className="fs-4">Mingle</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Home")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Home" && "active"
            }`}
            aria-current="page">
            <FiHome />
            Home
          </a>
        </li>
        <li onClick={() => setSelectedTab("Create Post")}>
          <a
            href="#"
            className={`nav-link text-white ${
              selectedTab === "Create Post" && "active"
            }`}>
            <CgAdd />
            Create Post
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img
            src="https://github.com/mdo.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>AuroraEcho76</strong>
        </a>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  setSelectedTab: PropTypes.func.isRequired,
};

export default Sidebar;
