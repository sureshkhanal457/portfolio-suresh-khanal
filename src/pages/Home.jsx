import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import SkillCard from "../components/SkillCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { skills, projects } from "../data/data.js";

export default function Home() {
  // show only the first 2 projects on the home page
  const featured = projects.slice(0, 2);

  return (
    <div>
      <Hero />

      {/* Skills preview */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">What I do</h2>
          <Link to="/skills" className="text-purple-600">See all skills →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Featured projects</h2>
          <Link to="/projects" className="text-purple-600">See all projects →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
