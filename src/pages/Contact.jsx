import { MapPin, Mail, Phone } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { profile } from "../data/data.js";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionTitle
        title="Contact me"
        subtitle="Have a question or a project idea? Send me a message."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactForm />

        {/* Contact details */}
        <div className="bg-white border rounded-lg p-6 h-fit flex flex-col gap-3">
          <h2 className="text-xl font-bold">My details</h2>
          <p className="flex items-center gap-2">
            <MapPin size={20} className="text-purple-600" /> {profile.location}
          </p>
          <p className="flex items-center gap-2">
            <Mail size={20} className="text-purple-600" /> {profile.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone size={20} className="text-purple-600" /> {profile.phone}
          </p>

          <div className="flex gap-4 mt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-purple-600">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-purple-600">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
