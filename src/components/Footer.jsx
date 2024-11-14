import React from 'react'

function Footer() {
  return (
    <div className=' bg-[rgba(217,217,217,1)]'>
       <div className='md:w-[600px] w-[300px] md:h-[90px] h-[45px] flex-col m-auto justify-self-center pt-2 font-semibold  '>
        <div className='mb-3'>
            <ul className='flex  gap-5 justify-self-center mt-3 lg:text-xl  '>
                <li>Overview</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>APIreference</li>
            </ul>
        </div>
        <div>
            <ul className='flex gap-4 justify-self-center lg:text-xl text-sm '>
                <li>Help</li>
                <li>Status</li>
                <li>Terms of services</li>
                <li>Privacy</li>
            </ul>
        </div>
        </div>
        <div className='justify-self-center lg:text-xl mt-10 md:mt-5 text-themeColor3'>2024 Jumbly Solutions. All rights reserve</div>
    </div>
  )
}

export default Footer
