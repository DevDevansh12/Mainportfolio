import React from "react";

const Services = () => {
  return (
    <div className="bg-[#0A0A13] text-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Need more info?</h2>
          <p className="text-3xl font-bold text-purple-400 mb-4">I got you.</p>
          <p className="text-lg font-light">
            Here are some of the services I offer. If you have any questions,
            feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Frontend Development Card */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl text-purple-400 mr-2">&lt;&gt;</span>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
            </div>
            <p className="text-sm font-light">
              Creating stellar user interfaces and web experiences using the
              latest technologies.
            </p>
          </div>

          {/* UX Design Card */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl text-purple-400 mr-2">#</span>
              <h3 className="text-xl font-semibold">UX Design</h3>
            </div>
            <p className="text-sm font-light">
              Building intuitive, user-centric designs that drive engagement and
              conversion.
            </p>
          </div>

          {/* SEO Optimization Card */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl text-purple-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">SEO Optimization</h3>
            </div>
            <p className="text-sm font-light">
              Enhancing your website's visibility in search engines for
              increased organic traffic.
            </p>
          </div>

          {/* Responsive Design Card */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl text-purple-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5h3m-6.75-9.75a1.5 1.5 0 0 1 3 0m-3 0a1.5 1.5 0 1 0 3 0M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0Z"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Responsive Design</h3>
            </div>
            <p className="text-sm font-light">
              Designing websites that look and perform equally well on all
              devices and screen sizes.
            </p>
          </div>

          {/* Backend Development Card */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-2xl text-purple-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a3 3 0 0 0-3-3H6.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h9.75a3 3 0 0 0 3-3V13.5m-3 0h-3.75a1.5 1.5 0 0 1-1.5-1.5V6a1.5 1.5 0 0 1 1.5-1.5H15M16.5 10.5 18 12m-1.5-1.5L18 9"
                  />
                </svg>
              </span>
              <h3 className="text-xl font-semibold">Backend Development</h3>
            </div>
            <p className="text-sm font-light">
              Developing robust, scalable server-side logic for a wide range of
              web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
