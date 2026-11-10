import React from 'react';

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-800/20 border border-dashed border-slate-700 rounded-2xl">
        <p className="text-slate-400 font-medium text-sm">No matched project signatures found.</p>
        <p className="text-slate-500 text-xs mt-1">Try tweaking your search index parameters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <article key={project.id} className="bg-slate-800 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-slate-500 transition duration-300 shadow-md group">
          <div className="h-48 overflow-hidden bg-slate-950 relative">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500 object-center"
            />
          </div>
          <div className="p-5 space-y-3">
            <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition">{project.title}</h4>
            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="bg-slate-900 border border-slate-700/50 text-slate-300 text-[10px] uppercase font-semibold tracking-wider px-2 py-0.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
