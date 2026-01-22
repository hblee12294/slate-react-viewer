import React from "react";
import type { Descendant } from "slate";
import JsonView from "@uiw/react-json-view";
import { vscodeTheme } from "@uiw/react-json-view/vscode";
import { githubLightTheme } from "@uiw/react-json-view/githubLight";
import { MdContentCopy, MdCheck } from "react-icons/md";

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
      >
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
      </JsonView>
    </div>
  );
};

export default DataViewer;
