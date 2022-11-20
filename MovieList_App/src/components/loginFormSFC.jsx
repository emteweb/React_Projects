import React, { useState } from "react";
import Input from "./common/input";
import Joi from "joi-browser";
import validate from "react-joi-validation";

const LoginForm = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().min(8).required(),
  });

  /* const schema = {
    user: {
      username: Joi.string().required(),
      password: Joi.string().min(8).required(),
    },
  }; */

  //  validate(MyComponent, { only: ["user", "order"], joiSchema: schema });

  const validateInput = () => {
    const result = validate(LoginForm, {
      joiSchema: schema,
      joiOptions: { abortEarly: true },
    });
    console.log(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //const errors = validateInput();
    const errors = validate(LoginForm, {
      joiSchema: schema,
      joiOptions: { abortEarly: true },
    });
    console.log("ERRORS: ", errors);
    setErrors({ errors });
    if (errors) return;
    console.log("Submitted");
  };

  const handleInputChange = ({ currentTarget: input }) => {
    const userData = { ...user };
    input.name === "username"
      ? (userData.username = input.value)
      : (userData.password = input.value);
    setUser(userData);
  };

  return (
    <React.Fragment>
      <div>
        <h1>Login</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          value={user.username}
          label="Username"
          onInputChange={handleInputChange}
        />

        <Input
          name="password"
          value={user.password}
          label="Password"
          onInputChange={handleInputChange}
        />

        <button onSubmit={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
};

LoginForm.defaultProps = {
  username: "",
  password: "",
};

export default LoginForm;
