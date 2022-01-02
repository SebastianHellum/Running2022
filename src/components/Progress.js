import React from "react";
import PropType from "prop-types";
import Styled from "styled-components";

const Container = Styled.div`
  progress {
    margin-right: 8px;
  }

  progress[value] {
    width: "${(props) => props.width}";
  } 
`;

const ProgressBar = ({ max, value, color, width }) => {
  return (
    <container color={color} width={width}>
      <progress value={value} max={max} />
      <br />
      <span>{(value / max) * 1000} av 1000km gjennomført </span>
    </container>
  );
};

ProgressBar.propTypes = {
  value: PropType.number.isRequired,
  max: PropType.number.isRequired,
  color: PropType.string,
  width: PropType.string,
};

ProgressBar.defaultProps = {
  max: 1000,
  width: "70%",
};

export default ProgressBar;
