import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Trending from './components/Trending';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto flex">
        <Sidebar />
        <Feed />
        <Trending />
      </div>
    </div>
  );
}

export default App;