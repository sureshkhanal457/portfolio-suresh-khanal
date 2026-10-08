// A small reusable heading used on every page.
// title = big text, subtitle = small gray text under it (optional)
export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      {/* only show the subtitle if one was given */}
      {subtitle && <p className="text-gray-600 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
