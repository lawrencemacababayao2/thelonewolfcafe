import { useState, useRef, useEffect } from "react";

const Menu = () => {
  const coffeeTypes = ["BestSeller", "Coffee", "Refreshers", "Frappes"];

  const coffeeData = {
    BestSeller: [
      { title: "Cappuccino", desc: "A rich, creamy coffee topped with soft foam.", img: "coffee1.jpg" },
      { title: "Truffle Pasta", desc: "A savory dish of tender noodles in flavorful sauce.", img: "pasta.jpg" },
      { title: "Red Iberian Berry", desc: "A bright, juicy blend bursting with berry flavor.", img: "Red.jpg" },
      { title: "Chocolate Waffles", desc: "Crispy waffles drizzled with rich chocolate.", img: "polygonbg2.jpg" },
    ],
    Coffee: [
      { title: "Americano", desc: "Smooth espresso with a clean, bold finish.", img: "americano.jpg" },
      { title: "Cappuccino", desc: "A rich, creamy coffee topped with soft foam.", img: "coffee3.jpg" },
      { title: "Spanish Latte", desc: "Creamy coffee with a sweet, silky twist.", img: "latte1.jpg" },
      { title: "Caramel Machiato", desc: "Rich espresso layered with sweet caramel.", img: "caramel.jpg" },
    ],
    Refreshers: [
      { title: "Red Iberian Berry", desc: "A bright, juicy blend bursting with berry flavor.", img: "Red.jpg" },
      { title: "Classic Ice Tea", desc: "Cool, crisp tea with a refreshing taste.", img: "clasic_icetea.jpg" },
      { title: "Iced caramel macchiato", desc: "Chilled coffee with creamy caramel goodness.", img: "caramel2.jpg" },
      { title: "Tropical Himalayan", desc: "A refreshing tropical blend with a cool twist.", img: "himalayan.jpg" },
    ],
    Frappes: [
      { title: "Creme De Banana", desc: "Smooth, creamy taste with banana bliss.", img: "cremedebanana.jpg" },
      { title: "Mixed-Berries", desc: "A bright blend of sweet and tangy berries.", img: "berries.jpg" },
      { title: "Cookies & Cream", desc: "Rich cream with crunchy cookie bites.", img: "cookies.jpg" },
      { title: "Matcha", desc: "A smooth, icy matcha with a refreshing finish.", img: "matcha.jpg" },
    ],
  };

  const [active, setActive] = useState(0);

  const currentType = coffeeTypes[active];
  const currentCards = coffeeData[currentType];

  const Card = ({ item }) => (
    <div
      className="w-[300px] h-[400px] flex-shrink-0 text-[#fefaee] mb-5 rounded-xl relative bg-cover bg-center overflow-hidden group transition-all duration-300"
      style={{
        backgroundImage: `url(${item.img})`,
      }}
    >
      {/* dark overlay (optional but recommended for readability) */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20  transition-all duration-300 "></div>

      {/* text content */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">
        <h2 className="text-xl font-bold text-[#FAE1B9]">{item.title}</h2>
        <p className="text-sm mt-2">{item.desc}</p>
      </div>
    </div>
  );

  // DRAG 
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const startPosition = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
    startPosition.current = position;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX.current;
    setPosition(startPosition.current + diff);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // global mouse tracking 
  useEffect(() => {
    const move = (e) => handleMouseMove(e);
    const up = () => stopDragging();

    if (isDragging) {
      window.addEventListener("mousemove", move);
      window.addEventListener("mouseup", up);
    }

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [isDragging]);


  useEffect(() => {
    if (isDragging) return; // stop auto when dragging

    const interval = setInterval(() => {
      setPosition((prev) => prev - 1); // move left slowly
    }, 16);

    return () => clearInterval(interval);
  }, [isDragging]);

  useEffect(() => {
    const firstCardWidth = 320;
    if (Math.abs(position) > firstCardWidth * currentCards.length) {
      setPosition(0);
    }
  }, [position]);

  return (
    <div>
      <div className="relative">
        <section id="sect1" className="w-full h-150 bg-[url(/bg_2.jpg)] bg-cover bg-bottom">
          <div className="w-full h-full bg-black/60 flex justify-center items-center text-center">
            <h1 className="text-[#FAE1B9] font-times px-10 text-6xl italic">
              Great taste starts here—crafted drinks, delicious bites, unforgettable moments.
            </h1>
          </div>
        </section>

        {/* FADE */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#660000] to-transparent"></div>
      </div>

      <section id="sect2" className="w-full h-full bg-[#660000] px-10 md:px-30 flex flex-col gap-5 py-20 pt-15 text-center">
        <h1 className="text-[#FAE1B9] text-4xl font-times">
          Our Menu
        </h1>
        <p className="text-[#fefaee]/80 text-md mb-7">
          Crafted drinks and bites made to satisfy every craving
        </p>
        <div className=" flex items-center justify-center">
          <div className="w-full text-center">

            {/* OPTIONS */}
            <div className="flex justify-center mb-5 w-full gap-2">
              {coffeeTypes.map((coffee, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActive(i);
                    setPosition(0); // reset slide when switching category
                  }}
                  className={`w-full py-4 cursor-pointer rounded-sm text-sm tracking-wider font-medium ${active === i
                    ? "bg-[#FAE1B9] text-[#422B09]"
                    : "bg-[#fefaee]/90 text-[#422B09]"
                    }`}
                >
                  {coffee}
                </button>
              ))}
            </div>

            {/* SLIDER */}
            <div className="relative overflow-hidden select-none">

              <div
                className="flex cursor-grab active:cursor-grabbing gap-4"
                style={{
                  transform: `translateX(${position}px)`,
                  transition: isDragging ? "none" : "transform 0.05s linear ",
                }}
                onMouseDown={handleMouseDown}
              >
                {/* SET 1 */}
                <div className="flex gap-4">
                  {currentCards.map((item, i) => (
                    <Card key={`a-${i}`} item={item} />
                  ))}
                </div>

                {/* SET 2 (for future infinite effect) */}
                <div className="flex gap-4">
                  {currentCards.map((item, i) => (
                    <Card key={`b-${i}`} item={item} />
                  ))}
                </div>

              </div>

            </div>
          </div>
        </div>
        <p className="text-[#fefaee]/80">Discover a selection of handcrafted drinks and delightful bites, made to satisfy every craving. From rich coffees to refreshing blends, every item is crafted for a perfect experience.</p>
      </section>

      <section id="sect3" className="w-full h-full bg-[#fefaee] bg-cover bg-center p-10 flex flex-col gap-5">
        <h1 className="tracking-widest uppercase text-[#660000]">- Allergen Info</h1>
        <p className="text-sm">
          Items marked
          <span className="font-semibold px-1">
            Vegan
          </span>
          contain no animal products. All baked goods are made in a kitchen that handles gluten, nuts, dairy, and eggs. Please speak to a barista before ordering if you have a severe allergy.
        </p>

        <p className="text-sm">Your safety is our priority.</p>
      </section>
    </div>
  );
};

export default Menu;