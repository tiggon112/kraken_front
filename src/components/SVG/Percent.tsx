const Percent = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={2}
      className="stroke-purple"
    >
      <path
        d="M17.5 4L6.5 20"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-transparent"
      ></path>
      <path
        d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-transparent"
      ></path>
      <path
        d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-transparent"
      ></path>
    </svg>
  );
};

export { Percent };
