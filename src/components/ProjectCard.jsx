// project = one project (emoji, title, description, tags, links)
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border rounded-lg p-4 flex flex-col">
      <div className="bg-gray-100 rounded text-6xl text-center py-10">
        {project.emoji}
      </div>

      <p className="text-sm text-purple-600 mt-3">{project.type}</p>
      <h3 className="font-bold text-lg">{project.title}</h3>
      <p className="text-gray-600 mt-1 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <span key={tag} className="bg-gray-100 text-sm px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noreferrer"
          className="bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700"
        >
          Live demo
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noreferrer"
          className="border px-4 py-1 rounded hover:bg-gray-100"
        >
          Code
        </a>
      </div>
    </div>
  );
}
