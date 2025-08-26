export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Property listing interfaces
export interface PropertyImage {
  id: string;
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface PropertyLocation {
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}

export interface PropertyAmenities {
  wifi: boolean;
  parking: boolean;
  pool: boolean;
  kitchen: boolean;
  airConditioning: boolean;
  heating: boolean;
  tv: boolean;
  gym: boolean;
  petFriendly: boolean;
  smokingAllowed: boolean;
}

export interface PropertyDetails {
  id: string;
  title: string;
  description: string;
  type: 'apartment' | 'house' | 'condo' | 'villa' | 'cabin' | 'other';
  bedrooms: number;
  bathrooms: number;
  guests: number;
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewCount: number;
  images: PropertyImage[];
  location: PropertyLocation;
  amenities: PropertyAmenities;
  hostId: string;
  hostName: string;
  hostAvatar?: string;
  isAvailable: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyCardProps {
  property: PropertyDetails;
  onBookmark?: (propertyId: string) => void;
  onView?: (propertyId: string) => void;
  isBookmarked?: boolean;
  className?: string;
}

// Filter and search interfaces
export interface FilterOptions {
  priceRange: {
    min: number;
    max: number;
  };
  propertyTypes: string[];
  amenities: string[];
  bedrooms: number[];
  bathrooms: number[];
  rating: number;
  location?: string;
}

export interface SearchFilters {
  location?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  priceRange?: {
    min: number;
    max: number;
  };
  propertyType?: string;
  amenities?: string[];
}
export interface PropertyProps {
  name: string;
  address : {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}