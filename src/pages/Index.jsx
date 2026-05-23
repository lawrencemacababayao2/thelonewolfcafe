import React from 'react'
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div>
            <section
                id='sect1'
                className="relative w-full h-full bg-[url(/sect1_bg.png)] bg-cover grid grid-cols-1 md:grid-cols-2
                    before:absolute before:inset-0
                    before:pointer-events-none
                    before:bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_60%)]
                    md:before:bg-[linear-gradient(to_left,rgba(0,0,0,0.9),transparent_40%)] py-20">
                <div className='flex flex-col justify-center items-center p-10 md:p-20 text-[#fefaee] text-center gap-10 order-2 md:order-1'>
                    <h2 className='text-xl md:text3xl lg:text-4xl font-gideon'>“Sometimes the best places in the city aren’t the loudest ones — they’re the ones quietly waiting to be discovered. ”</h2>
                    <button className='bg-[#660000] w-50 py-3 rounded-lg drop-shadow-lg/40 cursor-pointer drop-shadow-black hover:bg-[#7d0303] transition duration-200'>View More</button>
                </div>
                <div className='flex justify-center items-center order-1 md:order-2'>
                    <img src="./cvhb.png" alt="" className='w-80 md:w-110 lg:w-130' />
                </div>
            </section>

            <section id='sect2' className='bg-[#660000] w-full h-full py-10 pt-20'>
                <h2 className='text-center text-4xl text-[#fefaee] font-gideon'>Coffees you might like</h2>

                <div className='grid grid-cols-1 md:grid-cols-3'>
                    <div className='object flex flex-col items-center p-20 relative'>
                        <img src="./coffee1.jpg" alt="" className='w-full rounded-full aspect-square object-cover transition-transform duration-300 hover:scale-105 cursor-pointer brightness-80 hover:brightness-110 ' />
                        <div className='absolute top-[40%] cursor-pointer md:static'>
                        <h2 className='font-gideon text-3xl text-[#fefaee] mt-10 text-nowrap'>Hot Coffee</h2>
                            <Link to='/menu' className='text-[#fefaee] flex items-center justify-center gap-0 hover:gap-2 transition-all duration-200'>
                                <p>Explore More</p>
                                <i class="bi bi-arrow-right-short text-2xl mt-1"></i>
                            </Link>
                        </div>

                    </div>
                    <div className='object flex flex-col items-center p-20 relative'>
                        <img src="./coffee2.jpg" alt="" className='w-full rounded-full aspect-square object-cover transition-transform duration-300 hover:scale-105 cursor-pointer brightness-80 hover:brightness-110' />
                        <div className='absolute top-[40%] cursor-pointer md:static'>
                        <h2 className='font-gideon text-3xl text-[#fefaee] mt-10 text-nowrap'>Cup Coffee</h2>
                            <Link to='/menu' className='text-[#fefaee] flex items-center justify-center gap-0 hover:gap-2 transition-all duration-200'>
                                <p>Explore More</p>
                                <i class="bi bi-arrow-right-short text-2xl mt-1"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='object flex flex-col items-center p-20 relative'>
                        <img src="./coffee3.jpg" alt="" className='w-full rounded-full aspect-square object-cover transition-transform duration-300 hover:scale-105 cursor-pointer brightness-80 hover:brightness-110' />
                        <div className='absolute top-[40%] cursor-pointer md:static'>
                        <h2 className='font-gideon text-3xl text-[#fefaee] mt-10 text-nowrap'>Customized Coffee</h2>
                            <Link to='/menu' className='text-[#fefaee] flex items-center justify-center gap-0 hover:gap-2 transition-all duration-200'>
                                <p>Explore More</p>
                                <i class="bi bi-arrow-right-short text-2xl mt-1"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id='sect3' className='w-full h-160 md:h-180 lg:h-160 bg-[url(./sect3bg.png)] bg-cover text-[#fefaee] flex relative'>
                <div className='text-center flex flex-col gap-10 justify-center items-center flex-1 p-20'>
                    <h2 className='md:text-2xl lg:text-4xl text-4xl font-times text-[#FAE1B9]'>Warped and carefully crafted...
                        and hidden in the hustle and bustle of the city.

                    </h2>
                    <h2 className='md:text-2xl lg:text-4xl text-4xl font-times text-[#FAE1B9]'>An intimate coffee that feels like home</h2>

                    <button className='bg-[#660000] w-50 py-3 rounded-lg drop-shadow-md drop-shadow-black cursor-pointer hover:bg-[#7d0303] transition duration-200'>Read Our Story</button>
                </div>

                <div className='hidden md:block text-center w-[40%] p-20'></div>

                <div className="hidden md:block md:w-170 md:h-85 lg:w-210 lg:h-75 [clip-path:polygon(100%_0%,0%_0%,50%_100%)] absolute right-0 bg-[url(/polygonbg1.jpg)] bg-cover bg-center"></div>
                <div className="hidden md:block md:w-80 md:h-full lg:w-100 lg:h-full [clip-path:polygon(100%_0%,0%_50%,100%_100%)] absolute right-0 top-0 bg-[url(/polygonbg2.jpg)] bg-cover"></div>
                <div className="hidden md:block md:w-170 md:h-85 lg:w-210 lg:h-75 bg-[#660000] [clip-path:polygon(0%_100%,50%_0%,100%_100%)] absolute right-0 bottom-0 bg-[url(/polygonbg3.jpg)] bg-cover bg-center"></div>
            </section>

            <section id='sect4' className='w-full h-full bg-[url(/sect4bg.jpg)] bg-cover bg-center text-[#fefaee]'>
                <div className='bg-black/50 w-full h-full flex flex-col items-center p-10 text-center justify-center gap-15 py-20 md:py-40'>
                    <h2 className='text-4xl md:text-4xl lg:text-4xl font-gideon text-[#FAE1B9]'>Visit Us</h2>
                    <h3 className='text-2xl md:text-2xl lg:text-4xl font-gideon'>Search for our locations to experience the best handcrafted coffee</h3>
                    <button className='text-lg rounded-lg flex items-center justify-center gap-2 text-[#fefaee]/80 bg-[#660000] px-7 py-1 font-semibold cursor-pointer hover:bg-[#7d0303] transition duration-200'>
                        <p>Find Store</p>
                        <i class="bi bi-arrow-right-short text-4xl "></i>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Index
