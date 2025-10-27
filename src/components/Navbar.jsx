import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [activeSection, setActiveSection] = useState("home");

  // Detect which section is visible while scrolling
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ["home", "classes", "pricing", "blogs", "contact"];
      let current = "home";

      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sec;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(targetId); // set clicked section as active
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center p-4 shadow bg-white fixed w-full z-50"
    >
      {/* Logo always goes home */}
      <Link to="/" className="text-2xl font-bold text-purple-600">
        Yoga Flow
      </Link>

      <div className="space-x-4 flex items-center">
        {isHomePage ? (
          <>
            {["home", "classes", "pricing", "blogs", "contact"].map((section) => (
              <motion.a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleScroll(e, section)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`px-3 py-1 rounded-md transition-colors duration-200 cursor-pointer 
                  ${
                    activeSection === section
                      ? "bg-purple-600 text-white"
                      : "text-gray-800 hover:bg-purple-600 hover:text-white"
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.a>
            ))}
          </>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/"
              className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-purple-600 hover:text-white"
            >
              Back to Home
            </Link>
          </motion.div>
        )}

        {/* Login always visible */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/login"
            className="px-3 py-1 rounded-md transition-colors duration-200 hover:bg-purple-600 hover:text-white"
          >
            Login
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
}
