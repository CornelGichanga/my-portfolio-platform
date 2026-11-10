import React, { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    imageUrl: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.imageUrl) {
      setError('Please fill in all core fields required.');
      return;
    }
    
    setError('');
    const parsedTags = formData.tags
      ? formData.tags.split(',').map(tag => tag.trim()).filter(Boolean)
      : ['Creative'];

    onAddProject({
      title: formData.title,
      description: formData.description,
      imageUrl: formData.imageUrl,
      tags: parsedTags
    });

    setFormData({ title: '', description: '', tags: '', imageUrl: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl space-y-4">
      <h3 className="text-lg font-semibold text-white">Index New Project</h3>
      {error && <p className="text-rose-400 text-xs font-medium bg-rose-500/10 p-2.5 rounded-lg border border-rose-500/20">{error}</p>}
      
      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">Project Name</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 text-slate-100 text-sm px-3 py-2 rounded-lg outline-none transition"
          placeholder="Acme Platform Shift"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">Brief Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 text-slate-100 text-sm px-3 py-2 rounded-lg outline-none transition h-24 resize-none"
          placeholder="Describe scope, context, outcomes..."
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">Technologies Used (Comma Separated)</label>
        <input
          type="text"
          value={formData.tags}
          onChange={(e) => setFormData({...formData, tags: e.target.value})}
          className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 text-slate-100 text-sm px-3 py-2 rounded-lg outline-none transition"
          placeholder="Next.js, Tailwind, AWS"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-400 mb-1">Cover Image Source URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
          className="w-full bg-slate-900 border border-slate-700 focus:border-indigo-500 text-slate-100 text-sm px-3 py-2 rounded-lg outline-none transition"
          placeholder="https://unsplash.com"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm py-2.5 px-4 rounded-lg shadow-lg shadow-indigo-600/20 transition duration-150"
      >
        Publish to Stream
      </button>
    </form>
  );
}
