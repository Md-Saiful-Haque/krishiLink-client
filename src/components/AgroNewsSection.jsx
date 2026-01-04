import React from "react";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const newsData = [
  {
    id: 1,
    title: "Climate-Resilient Crops Gaining Popularity Among Farmers",
    image: "https://i.pinimg.com/736x/9c/1a/f2/9c1af2a03ae2f6c345bcff22ac5a6535.jpg",
    date: "Nov 10, 2025",
    description:
      "Researchers and farmers are focusing on new crop varieties that can withstand changing weather patterns.",
  },
  {
    id: 2,
    title: "Government Launches Subsidy for Organic Fertilizers",
    image: "https://i.pinimg.com/1200x/db/4c/16/db4c16feea92b889e76f92ee58b2c548.jpg",
    date: "Nov 8, 2025",
    description:
      "The new scheme aims to promote eco-friendly farming practices across rural areas.",
  },
  {
    id: 3,
    title: "AgriTech Startups Revolutionizing Supply Chains",
    image: "https://i.pinimg.com/736x/e5/1c/38/e51c386442f6e49263951fe834f38688.jpg",
    date: "Nov 5, 2025",
    description:
      "Startups are leveraging technology to connect farmers directly with markets and reduce waste.",
  },
];

const AgroNewsSection = () => {
  return (
    <section className="py-16 bg-green-50" id="agro-news">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-[#334b35]">
            Agro News & Blogs
          </h2>
          <p className="text-gray-600 mt-2">
            Stay updated with the latest trends, innovations, and agricultural policies.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <FaCalendarAlt className="mr-2 text-green-600" />
                  {item.date}
                </div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                <button className="w-full flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-[#f1cf69] hover:text-[#334b35] font-medium py-2 rounded-lg transition duration-300">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-[#f1cf69] hover:bg-[#334b35] hover:text-white text-[#334b35] px-6 py-3 rounded-lg font-semibold transition duration-300">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgroNewsSection;
