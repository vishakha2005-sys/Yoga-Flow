import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-6 max-w-3xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Contact Us</h2>
      <form className="bg-white shadow rounded-lg p-6 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-500"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-purple-500"
        />
        <button className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
