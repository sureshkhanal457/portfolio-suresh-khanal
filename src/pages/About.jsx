import { Code, GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile, aboutText } from "../data/data.js";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle
        title="About me"
        subtitle="Hi, I’m Suresh Upadhayay, a BCA student and aspiring web developer from Nepal. I am interested in building modern and user-friendly websites and web applications."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          src={profile.photo}
          alt={profile.name}
          className="rounded-lg w-full max-h-96 object-cover"
        />

        <div>
          <h2 className="text-2xl font-bold">My journey</h2>
          {aboutText.map((text, index) => (
            <p key={index} className="text-gray-600 mt-3">{text}</p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white border rounded-lg p-6">
          <Code className="text-purple-600" size={32} />
          <h3 className="font-bold mt-3">Web development</h3>
          <p className="text-gray-600">Learning and building responsive web applications.</p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <GraduationCap className="text-purple-600" size={32} />
          <h3 className="font-bold mt-3">Education</h3>
          <p className="text-gray-600">Bachelor of Computer Applications (BCA).</p>
        </div>

        <div className="bg-white border rounded-lg p-6">
          <Briefcase className="text-purple-600" size={32} />
          <h3 className="font-bold mt-3">Main project</h3>
          <p className="text-gray-600">Web-Based Personal Finance Management System.</p>
        </div>
      </div>
    </div>
  );
}
