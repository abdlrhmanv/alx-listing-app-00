import { PropertyProps } from "@/interfaces";

export default function PropertyCard({ property }: { property: PropertyProps }) {
  return (
    <div className="w-[370px] h-[400px] bg-white relative">
      <div className="flex flex-col">
        <img src={property.image} alt={property.name} className="w-full h-full object-cover rounded-2xl" />
        <div className="flex flex-row justify-start gap-4 py-2">
          {property.category.map((category) => (
            <button className="bg-card-category text-black text-sm font-quicksand font-light px-2 py-1 rounded-full whitespace-nowrap">
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-row">
            <h1 className="text-black text-[22px] font-quicksand font-semibold">{property.name}</h1>
            <p className="">{property.rating}</p>
        </div>
        </div>
        </div>
  );
}