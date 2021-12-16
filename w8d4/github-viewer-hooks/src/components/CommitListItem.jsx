import { useContext } from "react";
import DarkModeContext from "../context/darkModeContext";

export default function CommitListItem(props) {
  const isDarkMode = useContext(DarkModeContext);
  const { name, message } = props;

  const darkModeCSS = { background: "#333", color: "#fff" };
  const lightModeCSS = { background: "#fff", color: "#333" };

  return (
    <div style={isDarkMode ? darkModeCSS : lightModeCSS}>
      <h1>
        {name} - {message}
      </h1>
    </div>
  );
}
