import { PropertyDetails, PropertyAmenities, PropertyProps } from '../interfaces';

// App configuration constants
export const APP_CONFIG = {
  name: 'ALX Listing App',
  version: '1.0.0',
  description: 'Modern Airbnb clone listing application',
  author: 'ALX Africa',
  contact: {
    email: 'support@alxlisting.com',
    phone: '+1-555-ALX-LIST'
  }
};
export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image 1.png",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image 2.png",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image 3.png",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image 4.png",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "/assets/image 5.png",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "/assets/image 6.png",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image 7.png",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "/assets/image 8.png",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "/assets/image 9.png",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "/assets/image 10.png",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image 11.png",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "/assets/image 12.png",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "/assets/image 13.png",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "/assets/image 14.png",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "/assets/image 15.png",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "/assets/image 16.png",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "/assets/image 17.png",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "/assets/image 18.png",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "/assets/image 19.png",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://example.com/image20.jpg",
    discount: ""
  }
];
// API endpoints
export const API_ENDPOINTS = {
  properties: '/api/properties',
  bookings: '/api/bookings',
  users: '/api/users',
  reviews: '/api/reviews'
};

// Property types
export const PROPERTY_TYPES = [
  'apartment',
  'house',
  'condo',
  'villa',
  'cabin',
  'other'
] as const;

// Amenities list
export const AMENITIES_LIST = [
  'wifi',
  'parking',
  'pool',
  'kitchen',
  'airConditioning',
  'heating',
  'tv',
  'gym',
  'petFriendly',
  'smokingAllowed'
] as const;

// Currency options
export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira' }
];

// Sample amenities data
const sampleAmenities: PropertyAmenities = {
  wifi: true,
  parking: true,
  pool: false,
  kitchen: true,
  airConditioning: true,
  heating: true,
  tv: true,
  gym: false,
  petFriendly: false,
  smokingAllowed: false
};

// Mock property data
export const SAMPLE_PROPERTIES: PropertyDetails[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'A beautiful modern apartment in the heart of the city with stunning views and premium amenities.',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    pricePerNight: 120,
    currency: 'USD',
    rating: 4.8,
    reviewCount: 124,
    images: [
      {
        id: '1a',
        url: '/assets/image 1.png',
        alt: 'Modern apartment living room',
        isPrimary: true
      },
      {
        id: '1b',
        url: '/assets/image 2.png',
        alt: 'Modern apartment bedroom'
      },
      {
        id: '1c',
        url: '/assets/image 3.png',
        alt: 'Modern apartment kitchen'
      }
    ],
    location: {
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      zipCode: '10001',
      latitude: 40.7128,
      longitude: -74.0060
    },
    amenities: sampleAmenities,
    hostId: 'host1',
    hostName: 'Sarah Johnson',
    hostAvatar: '/assets/Vector.png',
    isAvailable: true,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '2',
    title: 'Cozy Beach House',
    description: 'Perfect getaway by the ocean with private beach access and breathtaking sunset views.',
    type: 'house',
    bedrooms: 3,
    bathrooms: 2,
    guests: 6,
    pricePerNight: 250,
    currency: 'USD',
    rating: 4.9,
    reviewCount: 89,
    images: [
      {
        id: '2a',
        url: '/assets/image 2.png',
        alt: 'Beach house exterior',
        isPrimary: true
      },
      {
        id: '2b',
        url: '/assets/image 3.png',
        alt: 'Beach house interior'
      }
    ],
    location: {
      address: '456 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      country: 'USA',
      zipCode: '33139',
      latitude: 25.7617,
      longitude: -80.1918
    },
    amenities: { ...sampleAmenities, pool: true, gym: false },
    hostId: 'host2',
    hostName: 'Michael Rodriguez',
    hostAvatar: '/assets/Vector.png',
    isAvailable: true,
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T16:45:00Z'
  },
  {
    id: '3',
    title: 'Mountain Cabin Retreat',
    description: 'Escape to nature in this rustic cabin surrounded by mountains and hiking trails.',
    type: 'cabin',
    bedrooms: 2,
    bathrooms: 1,
    guests: 4,
    pricePerNight: 180,
    currency: 'USD',
    rating: 4.7,
    reviewCount: 56,
    images: [
      {
        id: '3a',
        url: '/assets/image 3.png',
        alt: 'Mountain cabin exterior',
        isPrimary: true
      },
      {
        id: '3b',
        url: '/assets/image 1.png',
        alt: 'Mountain cabin interior'
      }
    ],
    location: {
      address: '789 Mountain View Road',
      city: 'Aspen',
      state: 'CO',
      country: 'USA',
      zipCode: '81611',
      latitude: 39.1911,
      longitude: -106.8175
    },
    amenities: { ...sampleAmenities, pool: false, airConditioning: false, parking: true },
    hostId: 'host3',
    hostName: 'Emily Chen',
    hostAvatar: '/assets/Vector.png',
    isAvailable: true,
    createdAt: '2024-01-08T12:00:00Z',
    updatedAt: '2024-01-22T09:15:00Z'
  }
];

// Filter options
export const FILTER_OPTIONS = {
  priceRanges: [
    { label: 'Under $100', min: 0, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $300', min: 200, max: 300 },
    { label: '$300+', min: 300, max: 10000 }
  ],
  bedroomOptions: [1, 2, 3, 4, 5],
  bathroomOptions: [1, 2, 3, 4],
  guestOptions: [1, 2, 3, 4, 5, 6, 7, 8]
};

// Navigation links
export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/bookings', label: 'My Bookings' },
  { href: '/favorites', label: 'Favorites' },
  { href: '/profile', label: 'Profile' }
];

// Social media links
export const SOCIAL_LINKS = [
  { platform: 'Twitter', url: 'https://twitter.com/alxlisting' },
  { platform: 'Facebook', url: 'https://facebook.com/alxlisting' },
  { platform: 'Instagram', url: 'https://instagram.com/alxlisting' },
  { platform: 'LinkedIn', url: 'https://linkedin.com/company/alxlisting' }
];
