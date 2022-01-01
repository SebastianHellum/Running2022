import React from "react";
import PropType from "prop-types";

const ProgressBar = ({ max, value }) => {
  return (
    <div>
      <progress value={value} max={max} />
      <br />
      <br />
      <span>{(value / max) * 1000} av 1000km gjennomført </span>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropType.number.isRequired,
  max: PropType.number.isRequired,
};

export default ProgressBar;
