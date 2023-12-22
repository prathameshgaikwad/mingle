import MingleLogo from "./MingleLogo";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="d-flex flex-wrap justify-content-evenly align-items-center py-3 border-top">
        <div></div>
        <div></div>
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            <MingleLogo />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary copyright">
            &copy; 2023 Mingle, Inc
          </span>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Footer;
