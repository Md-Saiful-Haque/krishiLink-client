import React from "react";
import { Link } from "react-router";

const blogs = [
  {
    id: 1,
    title: "Modern Farming Techniques for Higher Yield",
    category: "Farming Tips",
    date: "Aug 20, 2025",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    excerpt:
      "Discover modern farming techniques that help farmers increase crop yield while reducing cost and environmental impact."
  },
  {
    id: 2,
    title: "How Digital Platforms Are Changing Agriculture",
    category: "Agro Technology",
    date: "Aug 15, 2025",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
    excerpt:
      "Digital platforms like KrishiLink are empowering farmers by creating direct connections with buyers and traders."
  },
  {
    id: 3,
    title: "Organic Farming: Benefits and Challenges",
    category: "Organic Farming",
    date: "Aug 10, 2025",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854",
    excerpt:
      "Organic farming improves soil health and food quality but also comes with challenges farmers must understand."
  }
];

const Blog = () => {
  return (
    <div className="bg-[#f9fafb] py-16">
      <title>Blog | KrishiLink</title>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#334b35] mb-4">
            KrishiLink Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and stories from the world of agriculture and
            farming innovation.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <span className="text-sm text-green-700 font-semibold mb-2">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold text-[#334b35] mb-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {blog.date}
                  </span>

                  <Link
                    to="#"
                    className="text-[#334b35] font-semibold hover:text-[#f1cf69]"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
