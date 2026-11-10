import React, { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import ProjectForm from './Components/ProjectForm';
import ProjectGrid from './Components/ProjectGrid';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Rebrand",
    description: "A complete overhaul of a digital storefront with a next-gen headless architecture.",
    tags: ["React", "Tailwind", "GraphQL"],
    imageUrl: "https://unsplash.com"
  },
  {
    id: 2,
    title: "Minimalist Mobile App",
    description: "Design and development of a native iOS/Android wellness tracking system.",
    tags: ["React Native", "UI/UX", "Figma"],
    imageUrl: "https://unsplash.com"
  }
];

export default function App() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProject = (newProject) => {
    setProjects((prev) => [
      ...prev,
      { ...newProject, id: Date.now() }
    ]);
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Agency Showroom</h2>
              <p className="text-slate-400 text-sm mt-1">Explore dynamically curated showcase items or seed new work into the platform.</p>
            </div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 sticky top-8">
            <ProjectForm onAddProject={handleAddProject} />
          </div>
          <div className="lg:col-span-2">
            <ProjectGrid projects={filteredProjects} />
          </div>
        </div>
      </main>
    </div>
  );
}
