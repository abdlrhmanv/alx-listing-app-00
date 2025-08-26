import React, { useState, useEffect, useRef } from 'react';
const Header = () => {
  const [activeCategory, setActiveCategory] = useState('Rooms');
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const categories = [
    { name: 'Rooms', icon: '/assets/icons/rooms.svg' },
    { name: 'Mansion', icon: '/assets/icons/mansion.svg' },
    { name: 'Countryside', icon: '/assets/icons/countryside.svg' },
    { name: 'Villa', icon: '/assets/icons/villa.svg' },
    { name: 'Tropical', icon: '/assets/icons/tropical.svg' },
    { name: 'New', icon: '/assets/icons/new.svg' },
    { name: 'Amazing pool', icon: '/assets/icons/amazing-pool.svg' },
    { name: 'Beach house', icon: '/assets/icons/beach-house.svg' },
    { name: 'Island', icon: '/assets/icons/island.svg' },
    { name: 'Camping', icon: '/assets/icons/camping.svg' },
    { name: 'Apartment', icon: '/assets/icons/apartment.svg' },
    { name: 'House', icon: '/assets/icons/house.svg' },
    { name: 'Lakefront', icon: '/assets/icons/lakefront.svg' },
    { name: 'Farm house', icon: '/assets/icons/farmhouse.svg' },
    { name: 'Treehouse', icon: '/assets/icons/treehouse.svg' },
    { name: 'Cabins', icon: '/assets/icons/cabins.svg' },
    { name: 'Castles', icon: '/assets/icons/castles.svg' },
    { name: 'Lake Side', icon: '/assets/icons/lakeside.svg' },
  ];
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
  
    const handleScroll = () => {
      const scrollLeft = nav.scrollLeft;
      const scrollWidth = nav.scrollWidth;
      const clientWidth = nav.clientWidth;
  
      const threshold = 5;
      const maxScroll = scrollWidth - clientWidth;
  
      setIsAtStart(scrollLeft <= threshold);
      setIsAtEnd(Math.abs(scrollLeft - maxScroll) <= threshold);
    };
  
    nav.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  
    setTimeout(handleScroll, 0);
  
    return () => {
      nav.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  

  return (
    <header className="bg-white shadow-md">
        <div className="bg-primary h-10 flex items-center justify-center">
            <p className="text-white font-inter text-sm flex items-center gap-2">
              <img src="/assets/icons/info.svg" alt="info" className="w-4 h-4" />
                <span className="font-quicksand font-semibold">Overseas trip? Get the latest information on travel guides</span>
                <button className="bg-black text-white px-4 py-1 rounded-full font-quicksand font-semibold">More Info</button>
            </p>
        </div>
      <div className="flex flex-col justify-between items-center px-40 py-4 w-full">
        <div className="flex items-center justify-between mb-4 gap-40 border-b border-primary pb-4">
          <img src="/assets/logo.png" alt="ALX Listing App" className="w-[60px] h-[30px]" />
          <div className="flex items-center gap-4 border border-primary rounded-full w-col-12 p-4 justify-between h-16">
              <div className="flex-2/3 flex-col gap-2 px-4 border-r border-primary">
                <label htmlFor="location" className="font-quicksand font-normal text-black">Location</label>
                <input type="text" id="location" className="w-full text-placeholder focus:outline-none focus:border-none" placeholder="Search destination" />
              </div>
              <div className="flex flex-col gap-2 border-r border-primary">
                 <label htmlFor="check-in" className="font-quicksand font-normal text-black">Check-in</label>
                 <input type="text" id="check-in" className="w-full focus:outline-none focus:border-none text-placeholder" placeholder="Add date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'} />
               </div>
               <div className="flex flex-col gap-2 border-r border-primary">
                 <label htmlFor="check-out" className="font-quicksand font-normal text-black">Check-out</label>
                 <input type="text" id="check-out" className="w-full focus:outline-none focus:border-none text-placeholder" placeholder="Add date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'} />
               </div>
               <div className="flex flex-col gap-2">
                 <label htmlFor="guests" className="font-quicksand font-normal text-black">People</label>
                 <input type="text" id="guests" className="w-full focus:outline-none focus:border-none text-placeholder" placeholder="Add guests" />
               </div>
              <button type="submit" className="w-18 h-18" >
                <img src="/assets/icons/search.svg" alt="search" className="w-18 h-18" />
              </button>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-full font-inter font-normal whitespace-nowrap">Sign in</button>
            <button className="bg-white text-black px-6 py-2 rounded-full border border-primary font-inter font-normal whitespace-nowrap">Sign up</button>
          </div>
        </div>
        <div className="relative overflow-hidden">
  <div 
    className={`pointer-events-none absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 transition-opacity duration-300 ${
      isAtStart ? 'opacity-0' : 'opacity-100'
    }`} 
  />
  <div 
    className={`pointer-events-none absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 transition-opacity duration-300 ${
      isAtEnd ? 'opacity-0' : 'opacity-100'
    }`} 
  />
          
          <nav
            ref={navRef}
            className="flex items-center justify-start overflow-x-auto hide-scrollbar"
          >
            <ul className="flex items-center gap-8 min-w-max px-4">
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`flex flex-col items-center text-center gap-2 hover:cursor-pointer hover:scale-105 transition-all duration-100 ${
                    activeCategory === category.name
                      ? 'border-b-2 border-secondary pb-2'
                      : ''
                  }`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    className={`w-8 h-8 transition-all duration-100 ${
                      activeCategory === category.name ? 'invert' : ''
                    }`}
                  />
                  <span
                    className={`font-quicksand font-medium text-sm transition-all duration-100 ${
                      activeCategory === category.name
                        ? 'text-focus font-semibold'
                        : 'text-secondary'
                    } whitespace-nowrap`}
                  >
                    {category.name}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;