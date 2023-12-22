const NoPostsAvailable = () => {
  return (
    <div className="container my-5">
      <div className="position-relative p-5 text-center bg-body">
        <svg
          className="checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52">
          <circle
            className="checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
        <h2 className="text-body message-title">You&apos;re all caught up!</h2>
      </div>
    </div>
  );
};

export default NoPostsAvailable;
