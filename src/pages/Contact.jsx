import React from 'react'

const Contact = () => {
  return (
    <div>
      <section id='sect1' className='w-full h-120 bg-[#fefaee] grid grid-cols-1 lg:grid-cols-2 px-20'>
        <div className='border-b border-[#660000] py-20 px-5 flex flex-col gap-5 text-[#422B09]'>
          <p className='tracking-widest text-xs py-2'>GET IN TOUCH</p>
          <p className=' text-6xl font-gideon w-100 flex flex-col text-black'>
            Let's have
            <span className='px-1 text-black'>a</span>
            <span className='text-[#422B09] text-6xl font-gideon italic'>
              conversation.
            </span>
          </p>
          <p>Whether you have a question, a collaboration in mind, or simply want to know more about our coffee — we'd love to hear from you.</p>
        </div>
        <div className=' border-b border-[#660000] py-20 px-5 lg:flex justify-center hidden'>
          <div className='w-[50%] h-full bg-[#660000] flex flex-col justify-end p-7 gap-2 relative'>
            <img src="/logohd.png" alt="" className='w-40 absolute top-10 right-25' />
            <i class="bi bi-quote text-[#fefaee]/80"></i>
                                              <p className='text-[#fefaee]/80 italic font-times text-xs w-50 tracking-widest'>We reply to every message, usually within one working day.</p>
            <p className='uppercase tracking-widest text-[#FAE1B9] text-xs'>our promise</p>
  </div>
        </div>
      </section>


      <section id='sect2' className='w-full h-full bg-[#fefaee] grid grid-cols-1 lg:grid-cols-2 text-[#422B09] py-10 gap-10'>
        <div>
          <p className='tracking-widest text-xs uppercase py-7 pb-15 px-15 md:px-25'>Find us</p>
          <div className='flex'>
            <div className='pl-15 md:px-25 flex flex-col gap-10'>
              <div className=''>
                <div className=''>
                  <h4 className='font-semibold font-times tracking-widest'>Address</h4>
                  <p className='text-[#422B09]'>Guanzon St. Gingoog City</p>
                </div>
              </div>

              <div>
                <h4 className='font-semibold font-times tracking-widest'>Direct Contact</h4>
                <p className='text-[#422B09]'>09177058308</p>
              </div>
            </div>
            <div className='pr-15 px-7 md:px-15 text-nowrap'>
              <h4 className='font-semibold font-times tracking-widest'>Hours</h4>
              <div className="border-b py-3 flex justify-between items-center gap-10 text-[#422B09]">
              <p>Mon – Fri</p>
              <p>10:00am – 5:00pm</p>
            </div>
            <div className="border-b py-3 flex justify-between items-center">
              <p>Saturday</p>
              <p>2:00pm - 9:00pm</p>
            </div>
            <div className="border-b py-3 flex justify-between items-center">
              <p>Sunday</p>
              <p>7:00am – 3:00pm</p>
            </div>
            </div>
          </div>
        </div>

        <div className='px-15 md:px-25 flex justify-center'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.5862478868276!2d125.09876447477808!3d8.824882691228527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33002f000ac33c8b%3A0xc7093d8ba79dc0d3!2sThe%20Lonewolf%20Cafe%20-%20Gingoog!5e0!3m2!1sen!2sph!4v1777546352100!5m2!1sen!2sph"
            width="700"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id='sect3' className="w-full bg-[#fefaee] text-[#422B09] py-10 px-20">
        <div className=' border-t border-[#660000] pt-10'>
        <div className="max-w-4xl mx-auto">

          <div className="mb-10 text-center">
            <h2 className="text-3xl font-gideon">
              Send us a <em>message.</em>
            </h2>
            <p className="text-sm mt-2">
              Fill in the form below and we'll get back to you as soon as the next cup is brewed.
            </p>
          </div>

          <form noValidate className="flex flex-col gap-6">

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fname" className="text-sm">First name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Jenny"
                  required
                  className="w-full border border-[#422B09] p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="lname" className="text-sm">Last name</label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Gemongala"
                  required
                  className="w-full border border-[#422B09] p-2 rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="text-sm">Email address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="jen12@email.com"
                  required
                  className="w-full border border-[#422B09] p-2 rounded"
                />
              </div>

              <div>
                <label htmlFor="phone" className="text-sm">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+63 9XX XXX XXXX"
                  className="w-full border border-[#422B09] p-2 rounded"
                />
              </div>
            </div>

            <div>
              <label className="text-sm">What's this about?</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "General inquiry",
                  "Reservation",
                  "Wholesale",
                  "Collaboration",
                  "Private event",
                  "Feedback",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="px-8 py-3 border border-[#422B09] rounded-xl text-sm cursor-pointer hover:bg-[#660000] hover:text-white transition"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm">Your message</label>
              <textarea
                id="message"
                placeholder="Tell us whatever's on your mind..."
                required
                className="w-full border border-[#422B09] p-2 rounded h-[120px]"
              ></textarea>
            </div>

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-[#660000] cursor-pointer text-white px-6 py-3 rounded hover:scale-105 transition"
              >
                Send message →
              </button>

              <p className="text-xs">
                We usually reply <br /> within one business day.
              </p>
            </div>

          </form>

        </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
