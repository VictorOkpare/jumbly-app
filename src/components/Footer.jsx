import React from 'react'

function Footer() {
  return (
    <div className=' bg-[rgba(217,217,217,1)]'>
       <div className='w-[600px] h-[90px] flex-col m-auto justify-self-center border-2  '>
        <div className='mb-3'>
            <ul className='flex  gap-5 justify-self-center mt-3 text-xl  '>
                <li>Overview</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>APIreference</li>
            </ul>
        </div>
        <div>
            <ul className='flex gap-5 justify-self-center text-xl'>
                <li>Help</li>
                <li>Status</li>
                <li>Terms of services</li>
                <li>Privacy</li>
            </ul>
        </div>
        </div>
        <div className='justify-self-center text-xl text-themeColor3'>2024 Jumbly Solutions. All rights reserve</div>
    </div>
  )
}

export default Footer
