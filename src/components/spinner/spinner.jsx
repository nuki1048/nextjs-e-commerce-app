import PropTypes from "prop-types";

const Spinner = ({ width, height }) => {
  return (
    <svg
      style={{
        margin: "auto",
        background: "none",
        display: "block",
        shapeRendering: "auto",
      }}
      width={`${width}}px`}
      height={`${height}px`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <path
        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
        fill="#d87d4a"
        stroke="none"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 51;360 50 51"
        ></animateTransform>
      </path>
    </svg>
  );
};
Spinner.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};
Spinner.defaultProps = {
  width: 200,
  height: 200,
};

export default Spinner;
