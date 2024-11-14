import React, { useState } from 'react';
import { Image, Smile, MapPin } from 'lucide-react';

const tweets = [
  {
    id: 1,
    author: 'Sar Johnson',
    handle: '@sarahj',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    content: 'Just launched my new portfolio website! Check it out 🚀',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    likes: 142,
    retweets: 23,
    time: '2h'
  },
  {
    id: 2,
    author: 'Alex Chen',
    handle: '@alexc',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    content: 'Beautiful sunset at the beach today! 🌅',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    likes: 89,
    retweets: 12,
    time: '4h'
  }
];

export default function Feed() {
  const [newTweet, setNewTweet] = useState('');

  return (
    <main className="flex-1 border-x border-gray-200 max-w-2xl">
      <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4">
        <h1 className="text-xl font-bold">Home</h1>
      </div>

      <div className="p-4 border-b border-gray-200">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Your avatar"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newTweet}
              onChange={(e) => setNewTweet(e.target.value)}
              placeholder="What's happening?"
              className="w-full resize-none border-none focus:ring-0 text-xl"
              rows={3}
            />
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-4 text-blue-500">
                <button className="hover:bg-blue-50 p-2 rounded-full">
                  <Image className="w-5 h-5" />
                </button>
                <button className="hover:bg-blue-50 p-2 rounded-full">
                  <Smile className="w-5 h-5" />
                </button>
                <button className="hover:bg-blue-50 p-2 rounded-full">
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition disabled:opacity-50"
                disabled={!newTweet.trim()}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        {tweets.map((tweet) => (
          <article key={tweet.id} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition">
            <div className="flex gap-4">
              <img
                src={tweet.avatar}
                alt={tweet.author}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-bold">{tweet.author}</h2>
                  <span className="text-gray-500">{tweet.handle}</span>
                  <span className="text-gray-500">· {tweet.time}</span>
                </div>
                <p className="mt-2">{tweet.content}</p>
                {tweet.image && (
                  <img
                    src={tweet.image}
                    alt="Tweet media"
                    className="mt-3 rounded-2xl border border-gray-200 w-full"
                  />
                )}
                <div className="flex justify-between mt-4 text-gray-500 max-w-md">
                  <button className="hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                    💬 {Math.floor(Math.random() * 50)}
                  </button>
                  <button className="hover:text-green-500 hover:bg-green-50 p-2 rounded-full">
                    🔄 {tweet.retweets}
                  </button>
                  <button className="hover:text-red-500 hover:bg-red-50 p-2 rounded-full">
                    ❤️ {tweet.likes}
                  </button>
                  <button className="hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full">
                    📤
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}