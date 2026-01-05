import { useState, useEffect } from 'react';
import {Link} from "react-router"

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    setVisible(true);
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const items = [
    { icon: '🚀', title: 'Fast', text: 'Lightning-fast navigation' },
    { icon: '🎯', title: 'Simple', text: 'Intuitive API design' },
    { icon: '⚡', title: 'Powerful', text: 'Feature-rich routing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            React Router
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-blue-100">
            Declarative routing for React applications
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to='/about' className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
              About us
            </Link>
            <Link to="/docs" className="px-8 py-4 border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">
              View Docs
            </Link>
          </div>
        </div>

        <div className={`mt-20 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <pre className="text-green-400 text-sm md:text-base overflow-x-auto">
              <code>{`import { BrowserRouter, Routes, Route }
  from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className={`mt-24 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                className={`bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 transition-all duration-500 hover:scale-105 ${
                  active === i ? 'ring-4 ring-white shadow-2xl' : ''
                }`}
              >
                <div className="text-6xl mb-4 animate-bounce">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-24 transition-all duration-1000 delay-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">52M+</div>
              <div className="text-blue-100">Weekly Downloads</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">18k+</div>
              <div className="text-blue-100">GitHub Stars</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Years Strong</div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-20 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-32 h-32 bg-pink-400 bg-opacity-20 rounded-full blur-xl animate-pulse"></div>
    </div>
  );
}