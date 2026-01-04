import React from 'react';

const Services = () => {
    return (
        <section className="bg-gray-100 py-16">
            <h2 className="text-center font-bold text-3xl text-[#334b35] mb-10">
                Our Services
            </h2>

            <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-6 px-4">
                <div className="bg-white p-6 rounded-lg shadow text-center">Crop Listing</div>
                <div className="bg-white p-6 rounded-lg shadow text-center">Buyer Matching</div>
                <div className="bg-white p-6 rounded-lg shadow text-center">Market Insights</div>
                <div className="bg-white p-6 rounded-lg shadow text-center">Interest Tracking</div>
            </div>
        </section>

    );
};

export default Services;
