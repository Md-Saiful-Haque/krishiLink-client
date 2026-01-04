import React from 'react';

const Newsletter = () => {
    return (
        <section className="bg-[#334b35] max-w-[1200px] mx-auto py-16 text-white rounded-lg">
            <div className="max-w-[800px] mx-auto text-center px-4">
                <h2 className="text-3xl font-bold mb-4">
                    Subscribe for Market Updates
                </h2>
                <p className="mb-6">
                    Get latest crop prices and agricultural news.
                </p>
                <div className="flex justify-center gap-2">
                    <input type="email" name="" id="" placeholder='Your Email' className='bg-[#263c28] px-3 py-3 rounded-md text-[#b3c5b5] outline-none border-none' />
                    <button className="bg-[#f1cf69] px-6 rounded-md text-[#334b35] font-semibold">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>

    );
};

export default Newsletter;
