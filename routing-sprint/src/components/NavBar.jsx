import React from 'react'
import { Link } from 'react-router'

const NavBar = () => {
  return (
     
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">React Router</h1>
            <nav className="flex gap-6">
              <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
              <Link to="/about" className="text-slate-900 font-medium">About</Link>
              <Link to="/shop" className="text-slate-600 hover:text-slate-900 transition-colors">Shop</Link>
            </nav>
          </div>
        </div>
      </header>

  )
}

export default NavBar
