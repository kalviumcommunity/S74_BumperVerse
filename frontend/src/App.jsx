import React from 'react'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold">BumperVerse</h1>
      <p className="mt-4 text-lg max-w-2xl text-center">
        Discover a diverse collection of bumper stickers! View random stickers, select categories, and upload your own.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Explore Stickers
      </button>
    </div>
  );
}

export default App