// Shared mock data to keep components clean

export const FEATURED_PACKAGES = [
  {
    id: "pkg-1",
    title: "Bali Tropical Paradise",
    location: "Indonesia",
    duration: "7 Days, 6 Nights",
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800",
    tags: ["Beach", "Luxury", "Relaxation"]
  },
  {
    id: "pkg-2",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    duration: "5 Days, 4 Nights",
    price: 1849,
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=800",
    tags: ["Mountains", "Nature", "Adventure"]
  },
  {
    id: "pkg-3",
    title: "Santorini Getaway",
    location: "Greece",
    duration: "6 Days, 5 Nights",
    price: 1450,
    originalPrice: 1700,
    rating: 4.9,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=800",
    tags: ["Romantic", "Culture", "Sea"]
  },
  {
    id: "pkg-4",
    title: "Tokyo City Explorer",
    location: "Japan",
    duration: "8 Days, 7 Nights",
    price: 2100,
    rating: 4.7,
    reviews: 340,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
    tags: ["City", "Food", "Culture"]
  }
];

export const POPULAR_DESTINATIONS = [
  {
    id: "dest-1",
    name: "Maldives",
    properties: 42,
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=800",
    size: "large"
  },
  {
    id: "dest-2",
    name: "Paris",
    properties: 128,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "dest-3",
    name: "Rome",
    properties: 86,
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800",
    size: "small"
  },
  {
    id: "dest-4",
    name: "Dubai",
    properties: 54,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  },
  {
    id: "dest-5",
    name: "Amalfi Coast",
    properties: 31,
    image: "https://images.unsplash.com/photo-1618166567527-0245a4a3eef9?auto=format&fit=crop&q=80&w=800",
    size: "medium"
  }
];

export const TESTIMONIALS = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    content: "The best travel experience I've ever had. Everything was perfectly organized from flights to accommodations. I didn't have to worry about a single thing.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Michael Chen",
    role: "Photography Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    content: "Unbeatable prices for true luxury. The Bali package exceeded all my expectations. The private villa they booked for us was absolutely breathtaking.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Emma Watson",
    role: "Frequent Traveler",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    content: "I've used many travel agencies before, but none compare to the level of service and curation provided here. Highly recommend the Swiss Alps tour!",
    rating: 4
  }
];
