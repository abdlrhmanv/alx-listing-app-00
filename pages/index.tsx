import { PropertyCard } from "@/components/common";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("All");
  
  return (
    <div className="w-full bg-white flex flex-col">
      <div className="flex flex-col items-center px-40 py-10">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-7xl font-inter font-semibold text-white absolute py-20 w-[800px] text-center">
            Find your favorite place here!
          </h1>
          <p className="text-xl font-quicksand font-light text-white absolute py-60 w-[600px] text-center">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
        <img src="/assets/hero.png" alt="hero" className="object-cover object-[50%_70%] w-full h-[481px] rounded-2xl" /> 
        <div className="flex flex-col items-center w-full bg-white">
          <div className="flex flex-row gap-4 py-10 w-full justify-center">
            {["All", "Top Villa", "Free Reschedule"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="text-xl font-quicksand font-semibold text-black bg-white rounded-full px-4 py-2 border border-primary"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 px-4 py-10 w-full justify-center">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
