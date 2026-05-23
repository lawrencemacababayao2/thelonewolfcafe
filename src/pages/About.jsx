import React from 'react'

const About = () => {
    return (
        <div>
            <section id='sect1' className='w-full h-full bg-[#660000] p-20 py-30 flex flex-col gap-5'>
                <p className='font-montserrat text-[#FEFAEE] text-nowrap'>EST. 2023 — SPECIALTY COFFEE</p>
                <h1 className='font-times text-7xl text-[#FEFAEE] text-nowrap'>Where</h1>
                <h1 className='font-gideon text-7xl text-[#FAE1B9] text-nowrap'>Every cup</h1>
                <h1 className='font-times text-7xl text-[#FEFAEE] text-nowrap'>tells a story.</h1>

                <p className='text-[#FEFAEE] max-w-150'>From the highlands where beans are grown to the quiet ritual of your first sip, our coffee carries the journey with it. We focus on quality, transparency, and craft—so each cup feels rich, balanced, and worth slowing down for.</p>
                <div className="scroll-hint text-[#FEFAEE] text-xs mt-10 md:mt-0 md:absolute bottom-50 right-20 flex flex-col items-center gap-2 opacity-70 uppercase">
                    <div className="scroll-line"></div>
                    <span>Scroll</span>
                </div>
            </section>

            <section id='sect2' className='w-full h-full bg-[#fefaee] grid grid-cols-1 lg:grid-cols-2'>
                <div className='p-20 flex flex-col justify-center gap-7'>
                    <h1 className='font-montserrat text-[#422B09] opacity-80'>OUR STORY</h1>
                    <h1 className='max-w-70 text-5xl font-gideon text-[#422B09] italic'>Born from a simple idea.</h1>
                    <p className='text-[#422B09]'>Lonewolf Café was created with one vision: to offer more than just coffee, but a place where people can escape and feel at ease.</p>
                    <p className='text-[#422B09]'>From the outside, it may look ordinary, but inside it reveals a warm and carefully designed space that invites people to relax, connect, and enjoy the moment.</p>
                    <p className='text-[#422B09]'>Today, that idea continues to shape the café’s identity. Every detail—from the atmosphere to the service—is focused on creating a unique and comfortable experience for every visitor.</p>
                    <p className='text-[#422B09]'>Lonewolf Café is not just about drinks; it is about the feeling of discovering something different and finding a place you can call your own.</p>

                </div>
                <div className='pt-20 p-25 justify-center h-full hidden md:block'>
                    <div className='relative w-full min-h-120'>
                        <img src="./aboutBG.jpg" alt="" className='w-full absolute md:right-10 md:bottom-10 lg:right-15 lg:bottom-15 rounded-lg' />
                        <img src="./aboutBG.jpg" alt="" className='w-full absolute md:right-0 md:bottom-0 lg:right-5 lg:bottom-5 rounded-lg' />
                    </div>

                </div>
            </section>

            <section id='sect3' className='w-full h-full grid grid-cols-1 md:grid-cols-3'>
                <div className='md:border-r border-b bg-[#660000] text-[#fae1b9] flex flex-col items-center justify-center h-70 gap-5'>
                    <h1 className='text-8xl font-times'>3</h1>
                    <p className='uppercase text-sm tracking-widest'>years serving the city</p>
                </div>
                <div className='bg-[#660000] border-b text-[#fae1b9] flex flex-col items-center justify-center h-70 gap-5'>
                    <h1 className='text-8xl font-times'>4</h1>
                    <p className='uppercase text-sm tracking-widest'>Farm partnerships</p>
                </div>
                <div className='md:border-l bg-[#660000] text-[#fae1b9] flex flex-col items-center justify-center h-70 gap-5'>
                    <h1 className='text-8xl font-times'>2</h1>
                    <p className='uppercase text-sm tracking-widest'>Locations, one standard</p>
                </div>
            </section>

            <section id='sect4' className='w-full h-full bg-[#fefaee] p-20 md:p-40 flex flex-col items-center gap-10'>
                <p className='italic text-2xl md:text-4xl lg:text-5xl font-gideon text-center text-[#422B09]'>"The best coffee is the one you remember — not for how it woke you up, but for how it made you slow down."</p>
                <p className='uppercase opacity-50 text-sm tracking-widest text-center'>— Jose manuel corrales, founder</p>
            </section>
        </div>
    )
}

export default About
