import React, { useState } from "react";

const data = [
  {
    id: 1,
    category: "Coffee",
    img: "coffee2.jpg",
  },
  {
    id: 2,
    category: "Coffee",
    img: "coffee3.jpg",
  },
  {
    id: 3,
    category: "People",
    img: "polygonbg1.jpg",
  },
  {
    id: 4,
    category: "People",
    img: "people1.jpg",
  },
  {
    id: 5,
    category: "Latte-art",
    img: "caramel.jpg",
  },
  {
    id: 6,
    category: "Latte-art",
    img: "caramel2.jpg",
  },
  {
    id: 7,
    category: "Shop",
    img: "sect4bg.jpg",
  },
  {
    id: 8,
    category: "Shop",
    img: "sect3bg.png",
  },
  {
    id: 9,
    category: "Shop",
    img: "sect1_bg.png",
  },
];

const categories = ["All", "Coffee", "People", "Latte-art", "Shop"];

const Gallery = () => {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? data
      : data.filter((item) => item.category === selected);

  return (
    <div>
      <section id="sect1" className="w-full md:p-30 bg-[#fefaee] grid grid-cols-1 md:grid-cols-2">
        <div className='text-center md:text-start flex flex-col gap-10 text-[#422B09]'>
        <p className='tracking-widest text-xs uppercase pt-20 md:pt-0'>OUR GALLERY</p>
          <p className=' text-6xl font-gideon md:w-100 flex flex-col text-black'>
            Moments
            <span className='text-[#422B09] text-6xl font-gideon italic'>
              in still.
            </span>
          </p>
        </div>

        <div className="p-10 md:px-20 lg:px-50 flex items-center">
          <p className="text-md text-[#422B09]">
            A curated collection of images from inside our café, behind our roaster, and along the origin trails where our coffee begins.
          </p>

        </div>
      </section>

      <section id="sect2" className="w-full bg-[#660000] py-20 px-6">
\
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-10 md:px-45">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`w-full py-4 rounded-md text-sm transition duration-300 cursor-pointer
              ${selected === cat
                  ? "bg-[#FAE1B9] text-[#422B09]"
                  : "bg-[#fefaee]/90 text-[#3b2f2f] hover:bg-[#FAE1B9]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto space-y-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-2xl group break-inside-avoid"
            >
              <img
                src={`${item.img}?auto=format&fit=crop&w=800&q=80`}
                alt={item.category}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <p className="text-white text-sm capitalize">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id='sect3' className='w-full h-full bg-[#fefaee] p-20 md:p-40 flex flex-col items-center gap-10'>
                <p className='italic text-2xl md:text-4xl lg:text-5xl font-gideon text-center text-[#422B09]'>"Every image here was taken in an unhurried moment. That is the only rule we have."</p>
                <p className='uppercase opacity-50 text-sm tracking-widest text-center'>— Jose manuel corrales, founder</p>
            </section>
    </div>
  );
};

export default Gallery;