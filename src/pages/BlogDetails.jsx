import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogs.json";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600">Blog not found!</h2>
        <Link to="/" className="text-purple-600 underline mt-4 block">
          ← Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-purple-700 mb-4">{blog.title}</h1>
      <p className="text-gray-700 whitespace-pre-line leading-relaxed">
        {blog.description}
      </p>
      <Link
        to="/"
        className="inline-block mt-6 text-purple-600 font-medium hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}
