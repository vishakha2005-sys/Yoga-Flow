import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import blogs from "../data/blogs.json";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  // --- Like & Dislike State ---
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null); // "like" | "dislike" | null

  const handleLike = () => {
    if (userReaction === "like") {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      setLikes(likes + 1);
      if (userReaction === "dislike") setDislikes(dislikes - 1);
      setUserReaction("like");
    }
  };

  const handleDislike = () => {
    if (userReaction === "dislike") {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      setDislikes(dislikes + 1);
      if (userReaction === "like") setLikes(likes - 1);
      setUserReaction("dislike");
    }
  };

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

      <p className="text-gray-700 whitespace-pre-line leading-relaxed mb-6">
        {blog.description}
      </p>

      {/* Like & Dislike Buttons */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
            userReaction === "like"
              ? "bg-green-100 border-green-500 text-green-700"
              : "border-gray-300 hover:bg-green-50"
          }`}
        >
          👍 <span>{likes}</span>
        </button>

        <button
          onClick={handleDislike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition ${
            userReaction === "dislike"
              ? "bg-red-100 border-red-500 text-red-700"
              : "border-gray-300 hover:bg-red-50"
          }`}
        >
          👎 <span>{dislikes}</span>
        </button>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 text-purple-600 font-medium hover:underline"
      >
        ← Back to Blogs
      </Link>
    </div>
  );
}

