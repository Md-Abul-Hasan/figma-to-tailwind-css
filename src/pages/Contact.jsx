import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto px-6 py-10'>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-center mb-10 relative">
        <span className="px-4 bg-white z-10 relative">Contact Me</span>
        <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 -z-0"></div>
      </h2>
      </div>
        <p className="flex justify-center align-center">I am currently seeking employment, and I would appreciate it if you could contact me with any available job opportunities.</p>
        <button className="border-2 text-black p-2 rounded flex mx-auto">Contact Me</button>

          <div className="flex justify-center md:justify-center gap-4 text-gray-600">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="repo">🔗</span>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="external">↗️</span>
            </a>

        </div>
    </div>
  )
}

export default Contact
