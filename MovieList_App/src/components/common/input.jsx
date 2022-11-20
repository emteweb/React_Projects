import React from "react";

//const Input = ({ type, name, label, value, error, onInputChange }) => { -- ver.1
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="mb-3 form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      <input
        {...rest}
        name={name}
        id={name}
        className="form-control"
        aria-describedby="emailHelp"
      />

      {/*  ver.1
      <input
        value={value}
        type={type}
        onChange={onInputChange}
        name={name}
        id={name}
        className="form-control"
        aria-describedby="emailHelp"
      /> */}

      {error && <div className="alert alert-danger">{error}</div>}

      {/* <div id="usernameHelp" className="form-text">
          Provide your username.
        </div> */}
    </div>
  );
};

export default Input;
