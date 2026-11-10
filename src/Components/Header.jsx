import React from 'react';

export default function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <h1 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-wider">
          NEXUS // LABS
        </h1>
        <span className="text-xs text-slate-500 bg-slate-950 border border-slate-800 rounded-full px-3 py-1 font-mono">
          v1.0.0 Stable
        </span>
      </div>
    </header>
  );
}
