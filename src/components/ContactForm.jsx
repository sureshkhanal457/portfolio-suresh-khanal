import { useState } from "react";

export default function ContactForm() {
  // one state for the form values, one for the errors, one for the success message
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  // runs when the user types in any input
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // runs when the user presses the Send button
  function handleSubmit(e) {
    e.preventDefault(); // stop the page from reloading

    const newErrors = {};
    if (form.name === "") newErrors.name = "Please enter your name.";
    if (!form.email.includes("@")) newErrors.email = "Please enter a valid email.";
    if (form.message.length < 10) newErrors.message = "Message must be at least 10 characters.";

    setErrors(newErrors);

    // no errors: show success and clear the form
    if (Object.keys(newErrors).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      setSent(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border rounded w-full px-3 py-2 mt-1 bg-white"
        />
        {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border rounded w-full px-3 py-2 mt-1 bg-white"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="border rounded w-full px-3 py-2 mt-1 bg-white"
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
      </div>

      <button type="submit" className="bg-purple-600 text-white py-3 rounded hover:bg-purple-700">
        Send message
      </button>

      {sent && <p className="text-green-600">Thank you! Your message has been sent.</p>}
    </form>
  );
}
