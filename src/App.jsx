import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Sections (scroll SPA)
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

// Pages (separate routes)
import Login from "./pages/Login";
import Register from "./pages/Register";
import BlogDetails from "./pages/BlogDetails"; // ✅ NEW import

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        {/* Scrollable single-page layout */}
        <Route
          path="/"
          element={
            <div>
              <section id="home" className="py-16"><Home /></section>
              <section id="classes" className="py-16"><Classes /></section>
              <section id="pricing" className="py-16"><Pricing /></section>
              <section id="blogs" className="py-16"><Blogs /></section>
              <section id="contact" className="py-16"><Contact /></section>
              <Footer />
            </div>
          }
        />

        {/* Separate pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ NEW: Blog details page (opens full blog content) */}
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </div>
  );
}

export default App;
