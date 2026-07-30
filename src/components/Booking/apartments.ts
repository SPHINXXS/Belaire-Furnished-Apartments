import type{ Apartment } from "./BookingTypes";

export const apartments: Apartment[] = [
  {
    id: "studio",
    title: "Studio",
    subtitle: "Perfect for solo travellers",
    image: "",
    sleeps: 2,
    featured: true,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Smart TV",
      "Workspace",
    ],
    locations: [
      "Syokimau",
      "Ruaka",
    ],
  },

  {
    id: "one-bedroom",
    title: "1 Bedroom",
    subtitle: "Ideal for couples and business stays",
    image: "",
    sleeps: 2,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Balcony",
      "Smart TV",
    ],
    locations: [
      "Syokimau",
      "Thindigua",
    ],
  },

  {
    id: "two-bedroom",
    title: "2 Bedroom",
    subtitle: "Great for families and friends",
    image: "",
    sleeps: 4,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Dining Area",
      "Parking",
    ],
    locations: [
      "Ruaka",
      "Thindigua",
    ],
  },

  {
    id: "three-bedroom",
    title: "3 Bedroom",
    subtitle: "Spacious luxury accommodation",
    image: "",
    sleeps: 6,
    featured: true,
    amenities: [
      "Wi-Fi",
      "Kitchen",
      "Parking",
      "Balcony",
    ],
    locations: [
      "Ruaka",
    ],
  },
];