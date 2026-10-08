import { projectTypes } from "../data/data.js";

// selected = the chosen type, onSelect = function to change it
export default function ProjectFilter({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {projectTypes.map((type) => (
        <button
          key={type}
          onClick={() => onSelect(type)}
          className={
            selected === type
              ? "bg-purple-600 text-white px-4 py-1 rounded"
              : "bg-white border px-4 py-1 rounded hover:bg-gray-100"
          }
        >
          {type}
        </button>
      ))}
    </div>
  );
}
