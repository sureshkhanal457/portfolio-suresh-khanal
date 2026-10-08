import SectionTitle from "../components/SectionTitle.jsx";
import EducationCard from "../components/EducationCard.jsx";
import { education } from "../data/data.js";

export default function Education() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle title="Education" subtitle="My studies and training so far." />

      <div className="flex flex-col gap-4 max-w-3xl">
        {education.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
