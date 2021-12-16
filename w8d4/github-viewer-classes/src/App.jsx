import { Component } from "react";
import axios from "axios";

import Header from "./components/Header";
import Form from "./components/Form";

import "./App.css";
import CommitList from "./components/CommitList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };

    // this.incrementCount = this.incrementCount.bind(this);
  }

  componentDidMount() {
    console.log("Hello!");
  }

  componentWillUnmount() {
    console.log("bye");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, prevState);

    if (prevState.username !== this.state.username || prevState.repo !== this.state.repo) {
      axios
        .get(`https://api.github.com/repos/${this.state.username}/${this.state.repo}/commits`)
        .then((res) => this.setState({ ...this.state, commits: res.data }));
    }
  }

  incrementCount = () => {
    this.setState((prev) => ({ ...prev, count: this.state.count + 1 }));
  };

  updateUsernameAndRepo = (formData) => {
    this.setState({ ...this.state, ...formData });
  };

  render() {
    const { count, commits } = this.state;
    return (
      <div className="App">
        <Header />
        <button onClick={this.incrementCount}>{count}</button>
        <Form onSubmit={this.updateUsernameAndRepo} />
        {this.state.commits && <CommitList commits={commits} />}
      </div>
    );
  }
}

export default App;
