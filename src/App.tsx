import { useState, useEffect } from "react";
import type { Descendant } from "slate";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./index.css";
import Editor from "./components/Editor";
import DataViewer from "./components/DataViewer";

const INITIAL_VALUE: Descendant[] = [
  {
    type: "paragraph",
    children: [
      { text: "This is editable " },
      { text: "rich", bold: true },
      { text: " text, " },
      { text: "much", italic: true },
      { text: " better than a " },
      { text: "<textarea>", code: true },
      { text: "!" },
    ],
  },
  {
    type: "paragraph",
    align: "center",
    children: [{ text: "Try it out for yourself!" }],
  },
  {
    type: "block-quote",
    children: [{ text: "Note: The data on the right is synced in real-time." }],
  },
];

function App() {
  const [value, setValue] = useState<Descendant[]>(INITIAL_VALUE);
  const [selectionValue, setSelectionValue] = useState<Descendant[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Update data-theme attribute on root
    const root = document.documentElement;
    if (isDarkMode) {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="app-container">
      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
      </button>

      <div className="pane pane-left">
        <Editor
          value={value}
          onChange={setValue}
          onSelectionChange={setSelectionValue}
        />
      </div>
      <div className="pane pane-right">
        <DataViewer
          value={value}
          selection={selectionValue}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
}

export default App;
