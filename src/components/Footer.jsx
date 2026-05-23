import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#660000] w-full h-full p-5 lg:p-20 pt-5'>
            <div className='w-full h-3/3 grid sm:grid-cols-1 md:grid-cols-4 text-[#fefaee]'>
                <div className='flex justify-center'>
                    <img src="/logohd.png" alt="" className='w-30 md:w-full object-cover' />
                </div>
                <div className='p-10 md:p-15 flex flex-col gap-10 lg:gap-15'>
                    <div className='flex flex-col gap-2 items-center md:items-baseline'>
                        <p className='underline cursor-pointer'>Guanzon St. Gingoog City</p>
                        <p className=''>09177058308</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center md:items-baseline'>
                        <p className='font-bold'>Open Monday - Fridayy</p>
                        <p className=''>10am-5pm </p>
                    </div>

                </div>
                <div className='p-10 md:p-15 flex flex-col'>
                    <ul className='flex flex-col gap-3 items-center md:items-baseline'>
                        <li className='cursor-pointer'>Home</li>
                        <li className='cursor-pointer'>Menu</li>
                        <li className='cursor-pointer'>About Us</li>
                        <li className='cursor-pointer'>Gallery</li>
                        <li className='cursor-pointer'>Visit</li>
                    </ul>
                </div>
                <div className='p-10 md:p-15 text-center lg:text-justify'>Sometimes the best places in the city aren’t the loudest ones — they’re the ones quietly waiting to be discovered.</div>

            </div>
            <p className='w-full text-center text-[#fefaee] text-xs md:text-md'>©2026. The LoneWolf Cafe. All Rights Reserved. Privacy Policy | Terms of Use | Refund Policy</p>
        </div>
    )
}

export default Footer
