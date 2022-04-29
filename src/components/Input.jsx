import React from "react";
import PropTypes from "prop-types";

function Input({
  type,
  name,
  value,
  label,
  placeholder,
  handleChange,
  constraints,
  data,
}) {
  let inputElement = null;

  if (type === "select") {
    inputElement = (
      <select
        name={name}
        value={value}
        className="form-select"
        id={name}
        onChange={handleChange}
      >
        <option value="">Seleccione...</option>
        {data.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  } else {
    inputElement = (
      <input
        type={type}
        name={name}
        value={value}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
        {...constraints}
      />
    );
  }

  return (
    <div className="row mb-3">
      <label htmlFor={name} className="form-label">
        {label}:{" "}
      </label>
      {inputElement}
    </div>
  );
}

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  constraints: PropTypes.object,
  data: PropTypes.arrayOf(PropTypes.string),
};

export default Input;
