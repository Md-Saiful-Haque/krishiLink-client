import React, { use } from 'react';
import CropsCard from '../components/CropsCard';
import { Link } from 'react-router';
import Banner from '../components/Banner';
import { FaSeedling, FaHandsHelping, FaShippingFast, FaNewspaper, FaChartLine } from 'react-icons/fa';

const cropPromise = fetch('http://localhost:3000/latest/crop').then(res => res.json())

const Home = () => {
    const crops = use(cropPromise)

    const howItWorksSteps = [
    { icon: FaSeedling, title: "Post Your Crop", description: "Farmers list what they are growing, including estimated quantity and price." },
    { icon: FaHandsHelping, title: "Browse & Connect", description: "Traders and consumers browse posts and submit an 'Interest' request." },
    { icon: FaShippingFast, title: "Collaborate", description: "Owners manage interests (Accept/Reject) to start a direct connection for trade." },
  ];
    
    return (
        <div>
            <Banner/>
        <div className='mt-14 bg-[#f2f2f2]'>
            <h2 className='text-center font-bold p-8 text-3xl text-[#334b35]'>Latest Crop</h2>
            <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-4'>
                {
                    crops.map(crop => <CropsCard key={crop._id} crop={crop}></CropsCard>)
                }
            </div>
            <div className='mt-10 flex justify-center items-center'>
                <Link to={'/all-crops'}><button className='bg-[#f1cf69] px-8 py-2 rounded-md text-[#334b35] font-medium text-[16px]'>Show More</button></Link>
            </div>
        </div>
        {/* 3. How It Works Section */}
      <section id="how-it-works" className="bg-green-50 dark:bg-gray-900 py-16 mt-14">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">🤝 How Krishi Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl transform transition duration-500 hover:scale-[1.03]">
                <div className="p-4 bg-green-500 rounded-full text-white mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. Extra Section 1: Farmer Testimonials */}
      <section id="testimonials" className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">💬 Farmer Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg border-l-4 border-green-500">
              <p className="text-lg italic text-gray-700 dark:text-gray-200">"KrishiLink completely changed how I sell my maize. Connecting directly with bulk buyers saves me time and ensures a fair price. Highly recommended!"</p>
              <footer className="mt-4 text-right font-semibold text-gray-600 dark:text-gray-300">- Ramesh K., Maize Farmer</footer>
            </blockquote>
            <blockquote className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg border-l-4 border-green-500">
              <p className="text-lg italic text-gray-700 dark:text-gray-200">"The 'My Interests' page is fantastic. I can track all my purchase requests in one place. It's a true social network for agriculture."</p>
              <footer className="mt-4 text-right font-semibold text-gray-600 dark:text-gray-300">- Priya S., Food Distributor</footer>
            </blockquote>
          </div>
        </div>
      </section>
      {/* --- */}

      {/* 6. Extra Section 2: Statistics/Growth */}
      <section id="stats" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">📈 Our Growth & Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <FaChartLine className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-800 dark:text-white">5,000+</p>
            <p className="text-gray-500">Registered Users</p>
          </div>
          <div className="p-6">
            <FaSeedling className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-800 dark:text-white">15,000+</p>
            <p className="text-gray-500">Crop Posts</p>
          </div>
          <div className="p-6">
            <FaHandsHelping className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-800 dark:text-white">8,000+</p>
            <p className="text-gray-500">Connections Made</p>
          </div>
          <div className="p-6">
            <FaShippingFast className="h-10 w-10 text-green-600 mx-auto mb-3" />
            <p className="text-4xl font-extrabold text-gray-800 dark:text-white">20+</p>
            <p className="text-gray-500">Crop Categories</p>
          </div>
        </div>
      </section>
     </div>
    );
};

export default Home;