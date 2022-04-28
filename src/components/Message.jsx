import React from "react";
import PropTypes from "prop-types";

function Message({ type, msg }) {
  let bgColor = "transparent";

  if (type === "error") {
    bgColor = "#DC3545";
  } else if (type === "success") {
    bgColor = "#198754";
  }

  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    backgroundColor: bgColor,
  };

  return (
    <div style={styles}>
      <p>{msg}</p>
    </div>
  );
}

Message.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string,
};

export default Message;
