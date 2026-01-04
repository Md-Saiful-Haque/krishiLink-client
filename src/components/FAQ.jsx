import React from 'react';

const FAQ = () => {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-center font-bold text-3xl text-[#334b35] mb-10">
                Frequently Asked Questions
            </h2>

            <div className="max-w-[1200px] mx-auto space-y-4 px-4">
                <div className="bg-white p-4 rounded shadow">
                    <h4 className="font-semibold">Is KrishiLink free?</h4>
                    <p>Yes, posting and browsing crops is completely free.</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                    <h4 className="font-semibold">Who can post crops?</h4>
                    <p>Only registered farmers can post crop listings.</p>
                </div>
            </div>
        </section>

    );
};

export default FAQ;
