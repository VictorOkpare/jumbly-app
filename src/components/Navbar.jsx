import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-themeBg1'>
      <nav className='p-5 flex justify-between items-center ml-9 mr-9'>
        <div className='flex items-center'>
          <img src="" alt="Logo" />
          <p className='logo-font text-xl ml-2'><a href='#'>Jumbly</a></p>
        </div>

        {/* Desktop Links */}
        <div className='hidden lg:flex w-1/2 items-center gap-16'>
          <ul className='nav-list flex gap-16'>
            <li><a href='#'>Overview</a></li>
            <li><a href='#'>Features</a></li>
            <li><a href='#'>Pricing</a></li>
            <li><a href='#'>Docs</a></li>
          </ul>
          <div className='flex'>
            <button className="mr-4 bg-themeColor2 base-button text-white">Sign up</button>
            <button className="bg-themeColor3 text-black base-button">Login</button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='lg:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black focus:outline-none">
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div 
            className={`absolute top-0 right-0 w-2/6 bg-themeBg1 bg-opacity-30 p-5 rounded-bl-xl shadow-lg transition-transform duration-500 transform ${
              isMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-black text-2xl absolute top-3 right-3 focus:outline-none"
            >
              ✕
            </button>
            
            <ul className=' font-bold flex flex-col gap-4 items-center mt-8'>
              <li><a href='#'>Overview</a></li>
              <li><a href='#'>Features</a></li>
              <li><a href='#'>Pricing</a></li>
              <li><a href='#'>Docs</a></li>
            </ul>
            <div className='flex flex-col mt-4 items-center'>
              <button className="mb-2 w-full bg-themeColor2 text-white base-button">Sign up</button>
              <button className="w-full bg-themeColor3 text-black base-button">Login</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
