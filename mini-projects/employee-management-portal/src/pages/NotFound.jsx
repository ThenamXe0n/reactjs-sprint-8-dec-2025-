import React from 'react'
import { Link } from 'react-router'
import pagePaths from '../router/pagePaths'

const NotFound = () => {
  return (
    <div className="flex items-center flex-col justify-center gap-y-10  h-screen ">
      <h1 className='font-bold text-5xl'>Page not Found !</h1>
      <Link to={pagePaths.HOME} className='px-6 py-1 text-white bg-blue-300 rounded-md'>GO TO HOME</Link>
    </div>
  )
}

export default NotFound
