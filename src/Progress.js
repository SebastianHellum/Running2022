import React from "react";
import PropType from "prop-types";

const ProgressBar = ({ max, value }) => {
  return <progress value={value} max={max} />;
};

ProgressBar.propTypes = {
  value: PropType.number.isRequired,
  max: PropType.number.isRequired,
};

export default ProgressBar;
