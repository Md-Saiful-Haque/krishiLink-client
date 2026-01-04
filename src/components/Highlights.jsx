import React from 'react';

const Highlights = () => {
    return (
        <section className="py-16">
  <h2 className="text-center font-bold text-3xl text-[#334b35] mb-10">
    Why Choose KrishiLink?
  </h2>

  <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 px-4">
    <div className="p-6 bg-green-50 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Fair Pricing</h3>
      <p>Farmers get fair market value without middlemen.</p>
    </div>
    <div className="p-6 bg-green-50 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Verified Users</h3>
      <p>Both buyers and sellers are authenticated.</p>
    </div>
    <div className="p-6 bg-green-50 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
      <p>Manage interests and connect instantly.</p>
    </div>
  </div>
</section>

    );
};

export default Highlights;