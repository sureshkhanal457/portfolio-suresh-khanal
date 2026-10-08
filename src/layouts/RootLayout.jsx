import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* The current page (Home, About, Skills...) is shown here */}
        <Outlet />
      </main>

      <Footer />

      {/* Scrolls to the top when you open a new page */}
      <ScrollRestoration />
    </div>
  );
}
