import React from "react";

const Privacy = () => {
  return (
    <div className="bg-[#f9fafb] py-16">
      <title>Privacy & Terms | KrishiLink</title>

      <div className="max-w-[900px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-[#334b35] mb-6 text-center">
          Privacy Policy & Terms
        </h1>

        <div className="bg-white p-6 rounded-xl shadow space-y-4 text-gray-700">
          <p>
            KrishiLink respects your privacy. We only collect necessary
            information to provide our services.
          </p>

          <p>
            Users are responsible for the accuracy of the crop information they
            post. Any misuse may result in account suspension.
          </p>

          <p>
            We do not share personal information with third parties without user
            consent.
          </p>

          <p className="font-semibold text-[#334b35]">
            By using KrishiLink, you agree to our terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
