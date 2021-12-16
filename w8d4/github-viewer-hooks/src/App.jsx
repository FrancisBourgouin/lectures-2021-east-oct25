import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import CommitList from "./components/CommitList";
import Form from "./components/Form";
import { useEffect, useState } from "react";
import DarkModeContext from "./context/darkModeContext";

function App() {
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState("");
  const [commits, setCommits] = useState(undefined);

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (username && repo) {
      axios
        .get(`https://api.github.com/repos/${username}/${repo}/commits`)
        .then((res) => setCommits(res.data));
    }
  }, [username, repo]);

  useEffect(() => {
    console.log("Hello");

    return () => console.log("byyyye");
  }, []);

  const updateUsernameAndRepo = (formData) => {
    setUsername(formData.username);
    setRepo(formData.repo);
  };

  return (
    <DarkModeContext.Provider value={isDarkMode}>
      <div className="App">
        <span onClick={() => setIsDarkMode(true)}>🌘</span>
        <Header />
        <Form onSubmit={updateUsernameAndRepo} />
        <CommitList commits={commits} />
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
