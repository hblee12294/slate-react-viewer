import React from "react";
import type { Descendant } from "slate";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";
import { githubLightTheme } from "@uiw/react-json-view/githubLight";

interface DataViewerProps {
  value: Descendant[];
}

const DataViewer: React.FC<DataViewerProps> = ({ value }) => {
  // Determine if dark mode is active (simple check, could be improved with context or hook)
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div className="data-viewer">
      <JsonView
        value={value}
        collapsed={false}
        enableClipboard={true}
        displayDataTypes={false}
        style={isDarkMode ? vscodeTheme : githubLightTheme}
      />
    </div>
  );
};

export default DataViewer;
