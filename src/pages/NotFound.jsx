import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <p className="text-xl mt-2">Page not found</p>
      <Link to="/" className="inline-block mt-6 text-purple-600">
        Back to home
      </Link>
    </div>
  );
}
