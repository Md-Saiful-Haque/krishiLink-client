import React from "react";

const About = () => {
  return (
    <div className="bg-[#f6f8f5] min-h-screen">
      <title>About | KrishiLink</title>

      {/* Hero Section */}
      <div className="bg-[#334b35] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About KrishiLink
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Connecting farmers and buyers directly to ensure fair pricing,
            transparency, and sustainable agriculture.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-[#334b35] mb-3">
            🌱 Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KrishiLink aims to bridge the gap between farmers and buyers by
            providing a transparent digital platform where agricultural
            products can be listed, discovered, and traded without unnecessary
            middlemen. Our goal is to empower farmers while ensuring fair prices
            for consumers.
          </p>
        </section>

        {/* Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-[#334b35] mb-3">
            🌾 Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a future where technology plays a key role in
            strengthening rural economies, promoting sustainable farming
            practices, and creating trust-based relationships between producers
            and buyers.
          </p>
        </section>

        {/* Why KrishiLink */}
        <section>
          <h2 className="text-2xl font-semibold text-[#334b35] mb-4">
            🤝 Why Choose KrishiLink?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Direct connection between farmers and buyers</li>
            <li>Transparent pricing with no hidden charges</li>
            <li>Easy interest-based buying system</li>
            <li>Secure authentication and trusted users</li>
            <li>Support for local and sustainable agriculture</li>
          </ul>
        </section>

        {/* Platform Overview */}
        <section>
          <h2 className="text-2xl font-semibold text-[#334b35] mb-3">
            🚜 Platform Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            KrishiLink allows farmers to list crops with detailed information
            such as price, quantity, location, and availability. Buyers can
            browse listings, express interest, and communicate directly with
            farmers — making the process simple, efficient, and trustworthy.
          </p>
        </section>

        {/* Footer Note */}
        <section className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-gray-700 font-medium">
            KrishiLink is more than just a marketplace — it's a step toward a
            smarter and fairer agricultural ecosystem.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
