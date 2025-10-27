import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blogs from "../data/blogs.json";

export default function Blogs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="px-6 text-center"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Our Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <Link
                to={`/blog/${blog.id}`}
                className="text-purple-600 text-sm font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
