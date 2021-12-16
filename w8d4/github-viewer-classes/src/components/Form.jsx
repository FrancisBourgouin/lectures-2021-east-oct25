import { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      repo: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Username"
        />
        <input
          type="text"
          name="repo"
          value={this.state.repo}
          onChange={this.handleChange}
          placeholder="Repository"
        />
        <button type="submit">Search!</button>
      </form>
    );
  }
}
