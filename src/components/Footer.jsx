import { Link } from "react-router-dom";
import { profile } from "../data/data.js";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-white">{profile.name}</h3>
          <p className="mt-2">{profile.title}</p>
        </div>

        <div>
          <h4 className="font-bold text-white">Quick links</h4>
          <div className="flex flex-col gap-1 mt-2">
            <Link to="/about">About</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white">Find me</h4>
          <div className="flex flex-col gap-1 mt-2">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm py-4 border-t border-gray-700">
        © 2026 {profile.name}. Student project.
      </p>
    </footer>
  );
}
