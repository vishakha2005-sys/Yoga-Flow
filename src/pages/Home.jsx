import React from "react";

export default function Home() {
  const handleStart = () => {
    const classesSection = document.getElementById("classes");
    if (classesSection) {
      classesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-r from-purple-100 to-pink-100">
      
      {/* Left Side - Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Find Your Inner Peace with <span className="text-purple-600">Yoga</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          Join our yoga classes to improve flexibility, build strength, and
          achieve mindfulness in everyday life.
        </p>
        <button
          onClick={handleStart}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg text-lg shadow-lg hover:bg-purple-700 transition"
        >
          Start Now
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Yoga"
          className="rounded-2xl shadow-lg max-h-[450px] object-cover"
        />
      </div>
    </div>
  );
}
