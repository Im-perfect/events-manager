import React from "react";

export default class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Email: <input type="text" name='email' onChange={this.props.onChange} value={this.props.values.email} />
        </label>
        <label>
          Password: <input type="password" name='password' onChange={this.props.onChange} value={this.props.values.password} />
        </label>
        <input type="submit" value="Submit"></input>
      </form>
    );
  }
}