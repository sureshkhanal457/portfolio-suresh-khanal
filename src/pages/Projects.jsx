import { useState } from "react";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectFilter from "../components/ProjectFilter.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/data.js";

export default function Projects() {
  // the selected filter button: "All", "React" or "PHP"
  const [type, setType] = useState("All");

  // keep only the projects that match the selected type
  const visibleProjects = projects.filter(
    (project) => type === "All" || project.type === type
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle
        title="My projects"
        subtitle="Some of the projects I have built while learning web development."
      />

      <ProjectFilter selected={type} onSelect={setType} />

      <p className="text-gray-600 my-4">{visibleProjects.length} projects</p>

      {/* If nothing matches, show a message. Otherwise show the cards. */}
      {visibleProjects.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No projects found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}
