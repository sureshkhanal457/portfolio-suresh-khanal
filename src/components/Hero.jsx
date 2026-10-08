import { Link } from "react-router-dom";
import { profile } from "../data/data.js";

export default function Hero() {
  return (
    <section className="bg-purple-600 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text side */}
        <div className="flex-1">
          <p className="text-lg">Hello, I am</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-1">{profile.name}</h1>
          <h2 className="text-2xl mt-2">{profile.title}</h2>
          <p className="mt-4 max-w-lg">{profile.intro}</p>

          <div className="flex gap-3 mt-6">
            <Link
              to="/projects"
              className="bg-white text-purple-600 font-bold px-6 py-3 rounded"
            >
              View projects
            </Link>
            <Link to="/contact" className="border border-white px-6 py-3 rounded">
              Contact me
            </Link>
          </div>
        </div>

        {/* Photo side */}
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-white"
        />
      </div>
    </section>
  );
}
