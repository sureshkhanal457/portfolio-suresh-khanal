import { Code, Server, Database } from "lucide-react";

// a small list that links the icon name in data.js to a real icon
const icons = {
  frontend: <Code size={32} />,
  backend: <Server size={32} />,
  database: <Database size={32} />,
};

// skill = one skill group (title, description, tags)
export default function SkillCard({ skill }) {
  return (
    <div className="bg-white border rounded-lg p-6">
      <div className="text-purple-600">{icons[skill.icon]}</div>
      <h3 className="font-bold text-lg mt-3">{skill.title}</h3>
      <p className="text-gray-600 mt-1">{skill.description}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {skill.tags.map((tag) => (
          <span key={tag} className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
