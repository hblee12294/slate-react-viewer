import { useState } from "react";
import type { Descendant } from "slate";
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

  return (
    <div className="app-container">
      <div className="pane pane-left">
        <Editor value={value} onChange={setValue} />
      </div>
      <div className="pane pane-right">
        <DataViewer value={value} />
      </div>
    </div>
  );
}

export default App;
