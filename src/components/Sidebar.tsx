import React from 'react';
import { Home, User, Bell, Mail, Bookmark, ListPlus, Users, MoreHorizontal } from 'lucide-react';

const navItems = [
  { icon: Home, text: 'Home' },
  { icon: Bell, text: 'Notifications' },
  { icon: Mail, text: 'Messages' },
  { icon: Bookmark, text: 'Bookmarks' },
  { icon: ListPlus, text: 'Lists' },
  { icon: User, text: 'Profile' },
  { icon: Users, text: 'Communities' },
];

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col p-4 lg:w-1/4">
      {/* Replace the lucide Twitter icon with a new SVG logo */}
      <div className="p-2 hover:bg-blue-50 rounded-full w-fit cursor-pointer transition">
        <svg
          className="w-8 h-8 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* New Twitter logo SVG path here */}
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </svg>
      </div>
      
      <nav className="mt-4 flex flex-col gap-2">
        {navItems.map((item) => (
          <button
            key={item.text}
            className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-full transition text-xl"
          >
            <item.icon className="w-6 h-6" />
            <span className="hidden lg:inline">{item.text}</span>
          </button>
        ))}
        <button className="mt-4 bg-blue-500 text-white rounded-full py-3 px-6 font-bold hover:bg-blue-600 transition">
          Post
        </button>
      </nav>
      
      <button className="mt-auto flex items-center gap-3 p-3 hover:bg-gray-100 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="hidden lg:block text-left">
          <p className="font-bold">John Doe</p>
          <p className="text-gray-500">@johndoe</p>
        </div>
        <MoreHorizontal className="hidden lg:block ml-auto" />
      </button>
    </div>
  );
}
