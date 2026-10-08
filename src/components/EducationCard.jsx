import { GraduationCap } from "lucide-react";

// item = one education entry (degree, school, years, details)
export default function EducationCard({ item }) {
  return (
    <div className="bg-white border rounded-lg p-6 flex gap-4">
      <GraduationCap size={32} className="text-purple-600 shrink-0" />

      <div>
        <h3 className="font-bold text-lg">{item.degree}</h3>
        <p className="text-purple-600">{item.school}</p>
        <p className="text-sm text-gray-500">{item.years}</p>
        <p className="text-gray-600 mt-2">{item.details}</p>
      </div>
    </div>
  );
}
