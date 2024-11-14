import React from 'react';
import { Search, Settings } from 'lucide-react';

const trending = [
  { category: 'Technology', topic: '#ReactJS', tweets: '25.4K' },
  { category: 'Sports', topic: 'Champions League', tweets: '142K' },
  { category: 'Entertainment', topic: '#NewMovie', tweets: '53.1K' },
];

const whoToFollow = [
  {
    name: 'Tech News',
    handle: '@technews',
    avatar: 'https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?w=100&h=100&fit=crop',
  },
  {
    name: 'Jane Smith',
    handle: '@janesmith',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export default function Trending() {
  return (
    <div className="hidden lg:block w-1/3 p-4 space-y-4">
      <div className="sticky top-4">
        <div className="relative">
          <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
          />
        </div>

        <div className="bg-gray-50 rounded-xl mt-4">
          <div className="flex items-center justify-between p-4">
            <h2 className="font-bold text-xl">Trends for you</h2>
            <Settings className="w-5 h-5 text-gray-600" />
          </div>
          {trending.map((item) => (
            <div
              key={item.topic}
              className="p-4 hover:bg-gray-100 transition cursor-pointer"
            >
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="font-bold">{item.topic}</p>
              <p className="text-sm text-gray-500">{item.tweets} Tweets</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl mt-4">
          <h2 className="font-bold text-xl p-4">Who to follow</h2>
          {whoToFollow.map((user) => (
            <div
              key={user.handle}
              className="flex items-center justify-between p-4 hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">{user.handle}</p>
                </div>
              </div>
              <button className="bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-gray-800">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}