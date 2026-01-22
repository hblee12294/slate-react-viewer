import React from "react";
import type { Descendant } from "slate";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";
import { githubLightTheme } from "@uiw/react-json-view/githubLight";

interface DataViewerProps {
  value: Descendant[];
  isDarkMode: boolean;
}

const DataViewer: React.FC<DataViewerProps> = ({ value, isDarkMode }) => {
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
