import React from 'react';

function SimpleApp() {
  return (
    <div>
      {/* Test basic HTML to see if it renders */}
      <h1 style={{ color: 'blue', fontSize: '2rem', textAlign: 'center', padding: '20px' }}>
        Testing - Basic HTML Works
      </h1>
      
      {/* Test Tailwind classes */}
      <div className="min-h-screen bg-blue-500 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            If this has blue background, Tailwind works!
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-800">Testing Tailwind CSS styling</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Test Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleApp;