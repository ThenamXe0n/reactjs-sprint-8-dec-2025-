import { useState } from 'react';
import { Link } from 'react-router';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'Mission' },
    { id: 'features', label: 'Features' },
    { id: 'community', label: 'Community' }
  ];

  const team = [
    { name: 'Ryan Florence', role: 'Co-Creator', bio: 'React Training founder and open source contributor' },
    { name: 'Michael Jackson', role: 'Co-Creator', bio: 'JavaScript educator and library author' },
    { name: 'Contributors', role: '500+ Developers', bio: 'Open source community members worldwide' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
   
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About React Router
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            React Router is the standard routing library for React. It enables navigation between views, 
            manages browser history, and keeps your UI in sync with the URL.
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex gap-4 border-b border-slate-200 mb-8">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {activeTab === 'mission' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
                <p className="text-slate-700 leading-relaxed">
                  React Router was created to solve the problem of managing navigation in React applications. 
                  Our goal is to provide a declarative, component-based approach to routing that feels natural 
                  to React developers.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We believe that routing should be simple, flexible, and powerful. Whether you're building a 
                  small website or a large-scale application, React Router provides the tools you need to manage 
                  navigation effectively.
                </p>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong className="text-slate-900">Declarative Routing</strong>
                      <p className="text-slate-700">Define routes as React components for intuitive code organization</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong className="text-slate-900">Nested Routes</strong>
                      <p className="text-slate-700">Build complex layouts with nested routing structures</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong className="text-slate-900">Dynamic Routing</strong>
                      <p className="text-slate-700">Handle URL parameters and dynamic path segments easily</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong className="text-slate-900">Code Splitting</strong>
                      <p className="text-slate-700">Lazy load routes for better performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'community' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Community & Support</h3>
                <p className="text-slate-700 leading-relaxed">
                  React Router is maintained by Remix and supported by a vibrant community of developers worldwide. 
                  With over 52 million weekly downloads, it's one of the most trusted routing solutions in the React ecosystem.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">GitHub</h4>
                    <p className="text-slate-600">18,000+ stars and active development</p>
                  </div>
                  <div className="border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Discord</h4>
                    <p className="text-slate-600">Join thousands of developers</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">The Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl text-slate-600">{member.name[0]}</span>
                </div>
                <h4 className="font-semibold text-slate-900 mb-1">{member.name}</h4>
                <p className="text-sm text-blue-600 mb-2">{member.role}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p>&copy; 2024 React Router. Open source software licensed under MIT.</p>
        </div>
      </footer>
    </div>
  );
}