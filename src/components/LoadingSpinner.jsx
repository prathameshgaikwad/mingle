const LoadingSpinner = () => {
  return (
    <div className="card post post-placeholder">
      <div className="card-body">
        <h5 className="card-title placeholder-glow">
          <span className="placeholder col-6 my-border"></span>
        </h5>
        <p className="card-text placeholder-glow">
          <span className="placeholder col-12 my-border"></span>
          <span className="placeholder col-12 my-border"></span>
          <span className="placeholder col-12 my-border"></span>
        </p>
        <span className="placeholder-glow placeholder-hashtags">
          <span className="placeholder col-6 bg-primary my-border"></span>
        </span>
        <span className="placeholder-glow">
          <span className="placeholder col-12 bg-success placeholder-reactions my-border"></span>
        </span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
