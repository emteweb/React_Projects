import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    // call the server
    console.log("Submitted!");
  };
  render() {
    // const { data, errors } = this.state;
    return (
      <React.Fragment>
        <div>
          <h1>Login</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}

          {/* <Input
            name="password"
            value={data.password}
            label="Password"
            onInputChange={this.handleInputChange}
            error={errors.password}
          /> */}

          {this.renderButton("Login")}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
