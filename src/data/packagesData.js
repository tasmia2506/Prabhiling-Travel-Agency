// Handcrafted Tour & Travel Packages
export const TOUR_PACKAGES = [
  {
    id: "pkg-1",
    title: "South Karnataka Heritage & Temple Circuit",
    destination: "Mysuru - Belur - Halebidu - Shravanabelagola",
    duration: "3 Days / 2 Nights",
    startingPrice: 5999,
    featured: true,
    rating: 4.9,
    image: "/dest-mysore.jpg",
    badge: "Most Popular",
    highlights: [
      "AC Sleeper/Seater Bus Transportation",
      "Guided tour of Mysuru Palace & Chamundi Hill",
      "3-Star Hotel Stay with Breakfast",
      "Belur & Halebidu Hoysala Temple Architecture"
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru Departure to Mysuru Palace & Brindavan Gardens" },
      { day: "Day 2", title: "Mysuru Chamundi Temple to Hassan & Belur Heritage Site" },
      { day: "Day 3", title: "Shravanabelagola Monolithic Statue & Evening Return to Bengaluru" }
    ],
    inclusions: ["AC Travel", "Hotel Accommodation", "Breakfast & Dinner", "Tour Guide"],
    description: "Immerse yourself in centuries of royal history, intricate Hoysala stone carvings, & spiritual pilgrimage landmarks with total bus travel comfort."
  },
  {
    id: "pkg-2",
    title: "Coastal Karnataka & Goa Beach Escape",
    destination: "Mangaluru - Udupi - Murudeshwar - South Goa",
    duration: "4 Days / 3 Nights",
    startingPrice: 8499,
    featured: true,
    rating: 4.9,
    image: "/dest-gokarna.jpg",
    badge: "Best Seller",
    highlights: [
      "Luxury Volvo Sleeper Transportation",
      "Udupi Krishna Temple & St. Mary's Island",
      "Giant Shiva Statue at Murudeshwar Beach",
      "South Goa Beachside Resort Stay"
    ],
    itinerary: [
      { day: "Day 1", title: "Overnight Sleeper Bus from Bengaluru to Udupi" },
      { day: "Day 2", title: "Island Ferry & Murudeshwar Ocean View Temple" },
      { day: "Day 3", title: "Goa Sunset Cruise, Colva & Palolem Beach Explorations" },
      { day: "Day 4", title: "Old Goa Heritage Churches & Return Journey" }
    ],
    inclusions: ["Sleeper Bus Travel", "Beachside Stay", "Island Boat Tickets", "Daily Breakfast"],
    description: "Experience the pristine western coastline from Udupi's holy shores to Goa's sun-drenched golden beaches with our comfortable fleet service."
  },
  {
    id: "pkg-3",
    title: "Coorg Misty Hills & Nature Trail",
    destination: "Madikeri - Kushalnagar - Abbey Falls",
    duration: "2 Days / 1 Night",
    startingPrice: 4299,
    featured: true,
    rating: 4.8,
    image: "/dest-coorg.jpg",
    badge: "Weekend Special",
    highlights: [
      "Direct Deluxe Coach Transportation",
      "Coffee Plantation Walk & Coffee Tasting",
      "Golden Temple Tibetan Monastery View",
      "Raja's Seat Sunset Viewpoint"
    ],
    itinerary: [
      { day: "Day 1", title: "Early Morning Departure, Golden Temple Namdroling & Raja's Seat" },
      { day: "Day 2", title: "Abbey Waterfalls, Dubare Elephant Camp & Return Journey" }
    ],
    inclusions: ["Deluxe Seater Bus", "Resort Stay", "Plantation Tour", "Driver Allowance"],
    description: "Unwind in the Scotland of India. Refreshing mountain mist, lush coffee estates, & tranquil Buddhist monasteries made seamless."
  },
  {
    id: "pkg-4",
    title: "Divine Pilgrimage Circuit",
    destination: "Tirupati - Kalahasti - Golden Temple Vellore",
    duration: "3 Days / 2 Nights",
    startingPrice: 6799,
    rating: 5.0,
    image: "/dest-udupi.jpg",
    badge: "Family Favorite",
    highlights: [
      "Special Darshan Ticket Assistance",
      "Dedicated Prabhuling Pilgrimage Bus",
      "Pure Vegetarian Dining Included",
      "Experienced Spiritual Tour Escort"
    ],
    itinerary: [
      { day: "Day 1", title: "Bengaluru Departure to Tirupati Hill Base" },
      { day: "Day 2", title: "Tirumala Lord Venkateswara Temple Special Darshan" },
      { day: "Day 3", title: "Sri Kalahasti Temple, Sripuram Golden Temple & Return" }
    ],
    inclusions: ["AC Bus", "Darshan Assistance", "Pure Veg Meals", "Hotel Stay"],
    description: "Hassle-free spiritual journey tailored for families & senior citizens with end-to-end darshan & travel assistance."
  }
];

export const PACKAGES = TOUR_PACKAGES;

