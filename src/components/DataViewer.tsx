import type { Descendant } from "slate";

interface DataViewerProps {
  value: Descendant[];
}

const DataViewer: React.FC<DataViewerProps> = ({ value }) => {
  return (
    <div className="data-viewer">
      <pre>{JSON.stringify(value, null, 2)}</pre>
    </div>
  );
};

export default DataViewer;
