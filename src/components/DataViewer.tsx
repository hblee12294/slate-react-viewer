import React from "react";
import type { Descendant } from "slate";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";
import { githubLightTheme } from "@uiw/react-json-view/githubLight";
import { MdContentCopy, MdCheck } from "react-icons/md";

interface DataViewerProps {
  value: Descendant[];
  selection: Descendant[];
  isDarkMode: boolean;
}

const DataViewer: React.FC<DataViewerProps> = ({
  value,
  selection,
  isDarkMode,
}) => {
  return (
    <div
      className="data-viewer-container"
      style={{ display: "flex", flexDirection: "column", height: "100%" }}
    >
      <div
        style={{
          flex: 1,
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "0.5rem 1rem",
            borderBottom: "1px solid var(--color-border)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            background: "var(--color-bg)",
          }}
        >
          Selection Data
        </div>
        <div
          className="data-viewer"
          style={{ flex: 1, overflow: "auto", padding: "1rem" }}
        >
          {selection && selection.length > 0 ? (
            <JsonView
              value={selection}
              collapsed={false}
              enableClipboard={true}
              displayDataTypes={false}
              style={isDarkMode ? vscodeTheme : githubLightTheme}
            >
              <CopyButton isDarkMode={isDarkMode} />
            </JsonView>
          ) : (
            <div
              style={{ color: "var(--color-text-muted)", fontStyle: "italic" }}
            >
              Select text in the editor to view data...
            </div>
          )}
        </div>
      </div>

      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "0.5rem 1rem",
            borderBottom: "1px solid var(--color-border)",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "var(--color-text-muted)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            background: "var(--color-bg)",
          }}
        >
          Editor Data
        </div>
        <div
          className="data-viewer"
          style={{ flex: 1, overflow: "auto", padding: "1rem" }}
        >
          <JsonView
            value={value}
            collapsed={false}
            enableClipboard={true}
            displayDataTypes={false}
            style={isDarkMode ? vscodeTheme : githubLightTheme}
          >
            <CopyButton isDarkMode={isDarkMode} />
          </JsonView>
        </div>
      </div>
    </div>
  );
};

const CopyButton = ({ isDarkMode }: { isDarkMode: boolean }) => (
  <JsonView.Copied
    render={({
      style,
      ...props
    }: {
      style?: React.CSSProperties;
      onClick?: React.MouseEventHandler<SVGSVGElement>;
      "data-copied"?: boolean;
    }) => {
      const copied = props["data-copied"];
      return (
        <button
          onClick={
            props.onClick as unknown as React.MouseEventHandler<HTMLButtonElement>
          }
          style={{
            ...style,
            border: "none",
            background: "transparent",
            color: "inherit",
            cursor: "pointer",
            padding: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "1em",
          }}
        >
          {copied ? (
            <MdCheck color={isDarkMode ? "#4caf50" : "#28a745"} />
          ) : (
            <MdContentCopy color="var(--color-text-muted)" />
          )}
        </button>
      );
    }}
  />
);

export default DataViewer;
