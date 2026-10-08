import SectionTitle from "../components/SectionTitle.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { skills } from "../data/data.js";

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle
        title="My skills"
        subtitle="Technologies and tools I use to turn ideas into reality."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
