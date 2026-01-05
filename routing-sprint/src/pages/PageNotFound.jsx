import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="mb-8">
        <h1 className="text-9xl font-bold text-blue-600 mb-2">404</h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto"></div>
      </div>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
        The page you're looking for doesn't exist or has been moved. Let's get
        you back on track.
      </p>

      {/* Actions */}
      <div className="flex gap-4 justify-center flex-wrap">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
          Go Home
        </button>
        <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
