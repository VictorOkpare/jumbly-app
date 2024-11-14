import React from 'react'

function Navbar() {
  return (
    <div className='bg-themeBg1'>
        <nav className=' p-5 flex justify-between ml-9 mr-9 '>
        <div className='flex'>
            <img src="" alt="" />
            <p className='logo-font'><a href='#'>Jumbly</a></p>
        </div>

        <div className='flex w-1/2 items-center gap-16'>
            <ul className=' nav-list flex flex-row gap-16'>
                <li><a href='#'>Overview</a></li>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Pricing</a></li>
                <li><a href='#'>Docs</a></li>
               
            </ul>
            <div className='flex '>
            <button  className=" mr-4  bg-themeColor2 base-button text-white  ">Sign up</button>
            <button className="bg-themeColor3 text-black  base-button ">Login</button>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar