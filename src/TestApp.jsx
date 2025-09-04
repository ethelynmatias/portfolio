import React from 'react';

function TestApp() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Tailwind Test</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-800">If you can see this styled content, Tailwind is working!</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Test Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestApp;