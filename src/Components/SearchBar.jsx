import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="w-full md:w-80 relative">
      <input
        type="text"
        placeholder="Filter projects by title, stack..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-slate-950 border border-slate-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-100 px-4 py-2.5 rounded-xl transition duration-200 outline-none text-sm placeholder-slate-500"
      />
    </div>
  );
}
