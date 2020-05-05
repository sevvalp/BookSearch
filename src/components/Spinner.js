import React from "react";

const Spinner = (props) => {
  return <div className="ui active text loader">{props.message}</div>;
};

Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
