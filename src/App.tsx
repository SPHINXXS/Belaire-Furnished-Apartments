import { useMemo, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Home = {
  title: string;
  price: number;
  rating: string;
  image: string;
  gallery: string[];
  badge: string;
  location: string;
  bedrooms: string;
  host: string;
  description: string;
  amenities: string[];
  highlight: string;
  tags: string[];
};

type View = "home" | "all" | "contact";

type SearchFilters = {
  destination: string;
  bedroomSize: string;
  nameQuery: string;
};

const LOGO_SRC = "/Belaire logo.png";

const HOMES: Home[] = [
  {
    title: "Greencity Gardens",
    price: 7000,
    rating: "4.96",
    image: "/images/K8 main image.jpg",
    gallery: [
      "/images/K8 main image.jpg",
      "/images/K8 couch.jpg",
      "/images/K8 kitchen.jpg",
      "/images/K8 table.jpg",
      "/images/K8 main image.jpg",
      "/images/K8 main image.jpg",
      "/images/K8 main image.jpg",
    ],
    badge: "Guest favorite",
    location: "Syokimau",
    bedrooms: "3 bedroom",
    host: "Hosted by Irene Mpinda",
    description:
      "A polished top-floor stay with airy light, soft beige finishes, and a calm premium feel throughout.",
    amenities: ["Fast Wi‑Fi", "Smart TV", "City view", "Private balcony"],
    highlight: "A premium top-floor escape with a warm, elevated feel",
    tags: ["greencity gardens top floor", "greencity", "garden", "syokimau", "3 bedroom", "3 bed"],
  },
  {
    title: "Luxore Apartments",
    price: 3500,
    rating: "4.91",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Popular stay",
    location: "Syokimau",
    bedrooms: "1 bedroom",
    host: "Hosted by Irene Mpinda",
    description:
      "An airy apartment with warm textures, elegant lighting, and an intimate lounge designed for restful evenings.",
    amenities: ["Dedicated workspace", "Self check-in", "Coffee station", "Free parking"],
    highlight: "Ideal for solo stays and couples",
    tags: ["Luxore apartment", "Luxore apartments", "Syokimau", "1 bedroom", "1 bed", "apartment"],
  },
  {
    title: "Jiji Apartments",
    price: 2500,
    rating: "4.99",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Guest favorite",
    location: "Ruaka",
    bedrooms: "Studio",
    host: "Hosted by Irene Mpinda",
    description:
      "A refined loft with statement interiors, elevated comfort, and a premium retreat feel.",
    amenities: ["Terrace dining", "Chef-ready kitchen", "Rain shower", "Late checkout"],
    highlight: "A statement stay for longer weekends",
    tags: ["Jiji Apartments", "ruaka", "studio", "Jiji", "loft", "belaire"],
  },
  {
    title: "Belaire Homestays",
    price: 3000,
    rating: "4.88",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Top rated",
    location: "Ruaka",
    bedrooms: "1 bedroom",
    host: "Hosted by Irene Mpinda",
    description:
      "A compact luxury studio with clean lines, plush textiles, soft afternoon light, and an instantly cozy feel.",
    amenities: ["Kitchenette", "Airport access", "Warm lighting", "24/7 support"],
    highlight: "A polished stay near key transit routes",
    tags: ["Belaire Homestays", "belaire", "ruaka", "1 bedroom", "1 bed"],
  },
  {
    title: "Greencity Gardens",
    price: 2800,
    rating: "4.93",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Weekend pick",
    location: "Syokimau",
    bedrooms: "Studio",
    host: "Hosted by Irene Mpinda",
    description:
      "A polished apartment made for relaxed weekends, with warm textures, plush bedding, and a calm social living area.",
    amenities: ["Netflix", "Balcony seating", "Coffee corner", "Fast Wi‑Fi"],
    highlight: "A cozy stay tailored for effortless weekends",
    tags: ["greencity gardens", "syokimau", "greencity", "studio", "greencity"],
  },
  {
    title: "Greenzone Apartments",
    price: 3000,
    rating: "4.98",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Rare find",
    location: "Thindigua",
    bedrooms: "1 bedroom",
    host: "Hosted by Irene Mpinda",
    description:
      "An elevated loft with layered neutrals, scenic views, and generous indoor-outdoor flow for memorable group stays.",
    amenities: ["Hillside view", "Dining terrace", "Rain shower", "Free parking"],
    highlight: "Great for intimate celebrations and long weekends",
    tags: ["greenzone apartments", "thindigua", "1 bedroom", "1 bed", "green"],
  },
  {
    title: "Jalde Apartments",
    price: 5000,
    rating: "4.90",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Couples favorite",
    location: "Ruaka",
    bedrooms: "2 bedroom",
    host: "Hosted by Irene Mpinda",
    description:
      "A softly lit retreat with premium linens, warm beige finishes, and an intimate atmosphere designed for slower stays.",
    amenities: ["Breakfast nook", "Luxury linens", "Self check-in", "Airport access"],
    highlight: "A dreamy setting for romantic escapes",
    tags: ["jalde apartments", "ruaka", "2 bedroom", "2 bed", "jalde"],
  },
  {
    title: "Jalde Apartments",
    price: 3000,
    rating: "4.92",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "New",
    location: "Ruaka",
    bedrooms: "1 bedroom",
    host: "Hosted by Irene Mpinda",
    description: "A modern beige-toned apartment with elegant simplicity.",
    amenities: ["Wi‑Fi", "TV", "Parking"],
    highlight: "Minimalist luxury stay",
    tags: ["jalde apartments", "ruaka", "1 bedroom", "jalde"],
  },
  {
    title: "Greencity Gardens",
    price: 5000,
    rating: "4.97",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Luxury",
    location: "Syokimau",
    bedrooms: "2 bedroom",
    host: "Hosted by Irene Mpinda",
    description: "An upscale suite with premium finishes.",
    amenities: ["Balcony", "Wi‑Fi", "Rain shower"],
    highlight: "High-end comfort",
    tags: ["greencity gardens", "syokimau", "2 bedroom", "gardens"],
  },
  {
    title: "Greencity Gardens",
    price: 3500,
    rating: "4.85",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Budget",
    location: "Syokimau",
    bedrooms: "1 bedroom",
    host: "Hosted by Irene Mpinda",
    description: "Affordable comfort with clean design.",
    amenities: ["Wi‑Fi", "Kitchenette", "Airport access"],
    highlight: "Great value",
    tags: ["greencity gardens", "syokimau", "1 bedroom", "greencity"],
  },
  {
    title: "Belaire Homestays",
    price: 2500,
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693535623-6b41d85d9fd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    ],
    badge: "Executive",
    location: "Ruaka",
    bedrooms: "studio",
    host: "Hosted by Irene Mpinda",
    description: "Spacious executive home for premium stays.",
    amenities: ["Parking", "Wi‑Fi", "Kitchen", "Balcony"],
    highlight: "Top-tier experience",
    tags: ["belaire homestays", "ruaka", "studio", "belairex"],
  },
  
];

const WEEKEND = HOMES.slice(4, 7);
const TRUST_BADGES = ["Verified hosts", "Secure booking", "Fast response"];
const EXPERIENCES = [
  "Curated local stays",
  "Warm and welcoming staff",
  "Weekend ready check-in",
  "Design-led interiors",
];

const money = (n: number) => `KES ${n.toLocaleString()}`;

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/apartments/g, "apartment")
    .replace(/beds/g, "bed")
    .replace(/bedrooms/g, "bedroom")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const tokenize = (value: string) => normalizeText(value).split(/\s+/).filter(Boolean);

const matchesTokens = (tokens: string[], terms: string[]) => {
  if (!tokens.length) return true;
  return tokens.every((token) => terms.some((term) => term.includes(token)));
};

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M9 3.5a5.5 5.5 0 013.9 9.4l3.6 3.6-1.06 1.06-3.6-3.6A5.5 5.5 0 119 3.5z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path d="M5.23 7.21L10 11.17l4.77-3.96 1.06 1.06-5.3 5.3-5.3-5.3z" />
    </svg>
  );
}

function BelaireLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#eadfce] bg-[#f5ebdd] shadow-sm">
        <img src={LOGO_SRC} alt="Belaire logo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/50" />
      </div>
      <div className="hidden text-left sm:block">
        <div className="text-lg font-semibold tracking-[0.08em] text-[#4d3a2f]">BELAIRE</div>
        <div className="text-[10px] uppercase tracking-[0.32em] text-[#8b705c]">Boutique stays</div>
      </div>
    </div>
  );
}

function ListingCard({ home, onClick, compact = false }: { home: Home; onClick: (home: Home) => void; compact?: boolean }) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(home)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="overflow-hidden rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] text-left shadow-[0_10px_30px_rgba(120,85,60,0.08)] hover:shadow-[0_18px_40px_rgba(120,85,60,0.14)]"
    >
      <div className="relative">
        <img src={home.image} alt={home.title} className={compact ? "h-44 w-full object-cover" : "h-72 w-full object-cover"} />
        <div className="absolute left-4 top-4 rounded-full bg-[#f8efe3] px-4 py-2 text-sm font-medium text-[#5c4536] shadow-sm">
          {home.badge}
        </div>
      </div>
      <div className={compact ? "space-y-2 p-4" : "space-y-2 p-5"}>
        <div className={compact ? "text-lg font-medium leading-snug" : "text-2xl font-medium text-[#4d3a2f]"}>{home.title}</div>
        <div className="text-xs uppercase tracking-[0.18em] text-[#9b806a]">{home.location}</div>
        <div className="text-sm text-[#7f6a58]">{money(home.price)} for 1 night • ★ {home.rating}</div>
      </div>
    </motion.button>
  );
}

function ContactCard({ label, value, hint, href, icon }: { label: string; value: string; hint: string; href: string; icon: ReactNode }) {
  return (
    <motion.button
      type="button"
      onClick={() => window.open(href, href.startsWith("mailto:") ? "_self" : "_blank", "noopener,noreferrer")}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="flex w-full items-start gap-4 rounded-[1.5rem] bg-[#f5ebdd] p-5 text-left shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[#9a7b62]">{label}</div>
        <div className="mt-1 text-xl font-semibold text-[#4d3a2f]">{value}</div>
        <div className="mt-1 text-sm text-[#7b6757]">{hint}</div>
      </div>
    </motion.button>
  );
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedHome, setSelectedHome] = useState<Home | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [filters, setFilters] = useState<SearchFilters>({
    destination: "",
    bedroomSize: "",
    nameQuery: "",
  });

  const filteredHomes = useMemo(() => {
    const tagTokens = tokenize(`${filters.destination} ${filters.bedroomSize}`);
    const baseHomes = !tagTokens.length
      ? HOMES
      : HOMES.filter((home) => {
          const searchableTerms = [home.location, home.bedrooms, ...home.tags].map(normalizeText);
          return matchesTokens(tagTokens, searchableTerms);
        });

    const nameTokens = tokenize(filters.nameQuery);
    if (!nameTokens.length) return baseHomes;

    return baseHomes.filter((home) => {
      const searchableTerms = [home.title, ...home.tags].map(normalizeText);
      return matchesTokens(nameTokens, searchableTerms);
    });
  }, [filters.destination, filters.bedroomSize, filters.nameQuery]);

  const bookingSummary = selectedHome
    ? [{ label: "Total price", value: money(selectedHome.price + 0) }]
    : [];

  const searchSelectClass =
    "h-10 w-full appearance-none rounded-xl border border-[#e4d3c2] bg-[#f8f1e7] pl-3 pr-10 text-sm font-medium text-[#6f5a49] outline-none transition hover:border-[#d7c2ae] focus:border-[#c9ad94] focus:bg-white focus:ring-2 focus:ring-[#e8d8c8]/60";

  const resetModal = () => {
    setSelectedHome(null);
    setGalleryIndex(0);
  };

  const openHome = (home: Home) => {
    setSelectedHome(home);
    setGalleryIndex(0);
  };

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const handleSearch = () => {
    const match = filteredHomes[0];
    if (match) {
      setView("home");
      openHome(match);
    }
  };

  const closeToHome = () => {
    setView("home");
    resetModal();
  };

  const openWhatsAppBooking = () => {
    const message = `Hello, I'd like to book ${selectedHome?.title ?? "a Belaire stay"}`;
    window.open(`https://wa.me/254728530427?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-[#f7f1e8] text-[#4d3a2f]">
      <header className="sticky top-0 z-30 border-b border-[#e8dccd] bg-[#f7f1e8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <button type="button" onClick={closeToHome}>
            <BelaireLogo />
          </button>

          <nav className="hidden items-center gap-6 md:flex">
            <div className="relative">
              <input
                type="text"
                value={filters.nameQuery}
                onChange={(event) => updateFilter("nameQuery", event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") handleSearch();
                }}
                placeholder="Search by house name..."
                className="w-56 rounded-full border border-[#e4d3c2] bg-[#f8f1e7] py-2 pl-10 pr-4 text-sm text-[#6f5a49] outline-none shadow-sm placeholder:text-[#b29b87] focus:border-[#c9ad94] focus:bg-white focus:ring-2 focus:ring-[#e8d8c8]/60"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9a7b62]"
              >
                <SearchIcon />
              </button>
            </div>
            <button type="button" onClick={() => setView("home")} className="border-b-2 border-[#7d5f49] pb-2 text-sm font-medium">
              Homes
            </button>
            <button type="button" onClick={() => setView("contact")} className="pb-2 text-sm font-medium text-[#8f7765] hover:text-[#4d3a2f]">
              Contact information
            </button>
          </nav>
        </div>
      </header>

      {view === "home" && (
        <main>
          <section className="mx-auto max-w-4xl px-6 pb-6 pt-6 lg:px-10">
            <div className="rounded-[1.5rem] border border-[#eadfce] bg-[#fbf7f1] p-2 shadow-[0_6px_20px_rgba(120,85,60,0.08)]">
              <div className="grid gap-3 md:grid-cols-[1.2fr_1fr_auto]">
                <div className="rounded-[1.4rem] px-3 py-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-[#8e7764]">Where</label>
                  <div className="relative">
                    <select className={searchSelectClass} value={filters.destination} onChange={(event) => updateFilter("destination", event.target.value)}>
                      <option value="">Search destinations</option>
                      <option value="Syokimau">Syokimau</option>
                      <option value="Ruaka">Ruaka</option>
                      <option value="Thindigua">Thindigua</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#9a7b62]">
                      <ChevronIcon />
                    </span>
                  </div>
                </div>
                <div className="rounded-[1.4rem] px-3 py-2">
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.18em] text-[#8e7764]">Size</label>
                  <div className="relative">
                    <select className={searchSelectClass} value={filters.bedroomSize} onChange={(event) => updateFilter("bedroomSize", event.target.value)}>
                      <option value="">Select bedroom size</option>
                      <option value="1 bedroom">1 bedroom</option>
                      <option value="2 bedroom">2 bedroom</option>
                      <option value="3 bedroom">3 bedroom</option>
                      <option value="studio">studio</option>
                    </select>
                    <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#9a7b62]">
                      <ChevronIcon />
                    </span>
                  </div>
                </div>
                <button type="button" onClick={handleSearch} className="flex min-h-[52px] items-center justify-center rounded-[1.5rem] bg-[#b78b68] px-6 text-white shadow-lg transition hover:scale-[1.02]">
                  <span className="text-lg font-semibold">Search</span>
                </button>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h2 className="text-4xl font-semibold tracking-tight">Popular homes in Belaire</h2>
              <button type="button" onClick={() => setView("all")} className="rounded-full border border-[#e6d8c8] bg-[#fbf7f1] px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5">
                View all
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {filteredHomes.length ? (
                filteredHomes.slice(0, 4).map((home) => <ListingCard key={home.title} home={home} onClick={openHome} />)
              ) : (
                <div className="col-span-full rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] p-8 text-center shadow-sm">
                  <div className="text-lg font-semibold text-[#4d3a2f]">No homes match that destination and bedroom size.</div>
                  <div className="mt-2 text-sm text-[#8b705c]">Try another combination or search for a home by name above.</div>
                </div>
              )}
            </div>
            <div className="mt-8 flex justify-center">
              <div className="rounded-[1.5rem] border border-[#e8d9ca] bg-[#f5ebdd] px-6 py-4 text-lg font-medium shadow-sm">Prices include all fees</div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] p-6 shadow-[0_10px_30px_rgba(120,85,60,0.07)]">
                <h3 className="text-3xl font-semibold tracking-tight">Available this weekend</h3>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {WEEKEND.map((home) => (
                    <ListingCard key={home.title} home={home} onClick={openHome} compact />
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#c7ab8d] p-8 text-white shadow-[0_10px_30px_rgba(120,85,60,0.12)]">
                <div className="text-sm uppercase tracking-[0.3em] text-white/70">Belaire BnB</div>
                <h3 className="mt-3 text-4xl font-semibold leading-tight">Stay somewhere soft, warm, and beautifully calm.</h3>
                <p className="mt-4 text-base leading-7 text-white/85">A boutique booking experience inspired by elevated neutrals, quiet luxury, and memorable weekend escapes.</p>
                <div className="mt-6 space-y-3">
                  {EXPERIENCES.map((item) => (
                    <motion.div key={item} whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm">
                      {item}
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  {TRUST_BADGES.map((badge) => (
                    <div key={badge} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                      {badge}
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => setView("contact")} className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-[#8a684e] shadow-sm transition hover:scale-[1.02]">
                  Explore Belaire
                </button>
              </div>
            </div>
          </section>
        </main>
      )}

      <AnimatePresence>
        {view === "all" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 overflow-y-auto bg-[#f7f1e8]">
            <div className="sticky top-0 z-10 border-b border-[#eadfce] bg-[#f7f1e8]/95 backdrop-blur">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#9a7b62]">Belaire collection</div>
                  <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#4d3a2f]">View all homes</h2>
                </div>
                <button type="button" onClick={() => setView("home")} className="rounded-full border border-[#e4d3c2] bg-[#fbf7f1] px-5 py-2 text-sm font-medium text-[#6d5848] shadow-sm transition hover:-translate-y-0.5">
                  Back to home
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
              <div className="mb-8 grid gap-4 rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] p-6 shadow-sm md:grid-cols-3">
                <div className="rounded-[1.5rem] bg-[#f5ebdd] px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#9a7b62]">Curated stays</div>
                  <div className="mt-2 text-2xl font-semibold text-[#4d3a2f]">{filteredHomes.length} premium homes</div>
                </div>
                <div className="rounded-[1.5rem] bg-[#f5ebdd] px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#9a7b62]">Locations</div>
                  <div className="mt-2 text-2xl font-semibold text-[#4d3a2f]">Syokimau, Ruaka, Thindigua</div>
                </div>
                <div className="rounded-[1.5rem] bg-[#f5ebdd] px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-[#9a7b62]">Style</div>
                  <div className="mt-2 text-2xl font-semibold text-[#4d3a2f]">Warm, modern, boutique</div>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredHomes.length ? (
                  filteredHomes.map((home) => <ListingCard key={home.title} home={home} onClick={openHome} />)
                ) : (
                  <div className="col-span-full rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] p-8 text-center shadow-sm">
                    <div className="text-lg font-semibold text-[#4d3a2f]">No matching homes found.</div>
                    <div className="mt-2 text-sm text-[#8b705c]">Edit a home’s tags, location, or bedroom size and it will become searchable automatically.</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {view === "contact" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 overflow-y-auto bg-[#f7f1e8]">
            <div className="sticky top-0 z-10 border-b border-[#eadfce] bg-[#f7f1e8]/95 backdrop-blur">
              <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-[#9a7b62]">Belaire BnB</div>
                  <h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#4d3a2f]">Contact information</h1>
                </div>
                <button type="button" onClick={() => setView("home")} className="rounded-full border border-[#e4d3c2] bg-[#fbf7f1] px-5 py-2 text-sm font-medium text-[#6d5848] shadow-sm transition hover:-translate-y-0.5">
                  ← Back
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
              <div className="mb-6 flex flex-wrap gap-3">
                {TRUST_BADGES.map((badge) => (
                  <div key={badge} className="rounded-full border border-[#e4d3c2] bg-[#fbf7f1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8b705c] shadow-sm">
                    {badge}
                  </div>
                ))}
              </div>
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[2rem] bg-[#c7ab8d] p-8 text-white shadow-[0_18px_40px_rgba(120,85,60,0.18)] lg:p-10">
                  <div className="inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-sm">We’d love to host you</div>
                  <h2 className="mt-5 text-4xl font-semibold leading-tight">Let’s help you find the perfect Belaire stay.</h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/90">Reach out for bookings, availability, special requests, or anything you need to make your stay feel easy, warm, and memorable.</p>
                </div>
                <div className="rounded-[2rem] border border-[#eadfce] bg-[#fbf7f1] p-6 shadow-[0_12px_30px_rgba(120,85,60,0.08)] lg:p-8">
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-[0.22em] text-[#9a7b62]">Reach Belaire</div>
                    <h3 className="mt-2 text-3xl font-semibold text-[#4d3a2f]">Our contact details</h3>
                  </div>
                  <div className="space-y-4">
                    <ContactCard
                      label="WhatsApp"
                      value="+254 728 530 427"
                      hint="Tap to chat instantly"
                      href="https://wa.me/254728530427"
                      icon={
                        <svg className="h-6 w-6" viewBox="0 0 32 32" fill="#25D366">
                          <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.7.7 5.3 2 7.6L.4 32l9-2.3c2.2 1.2 4.7 1.8 7.2 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.6c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-5.3 1.4 1.4-5.1-.3-.5c-1.2-2-1.9-4.3-1.9-6.7C3 9.2 9.2 3 16 3s13 6.2 13 13-6.2 12.9-13 12.9zm7.1-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.2 1.5c-.2.2-.4.2-.8.1s-1.7-.6-3.3-2c-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.1-.8.1-.1.4-.4.6-.6.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.9s1.3 3.3 1.5 3.6c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.3 2.4.2.7-.1 2.4-1 2.7-2 .3-1 .3-1.8.2-2-.1-.2-.3-.3-.7-.5z" />
                        </svg>
                      }
                    />
                    <ContactCard
                      label="Email"
                      value="belairedistillers@gmail.com"
                      hint="Tap to email us"
                      href="mailto:belairedistillers@gmail.com"
                      icon={
                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                          <path fill="#EA4335" d="M12 13.065L.8 6.4V18a2 2 0 002 2h18.4a2 2 0 002-2V6.4L12 13.065z" />
                          <path fill="#FBBC05" d="M23.2 6.4L12 13.065 23.2 18V6.4z" />
                          <path fill="#34A853" d="M.8 6.4L12 13.065.8 18V6.4z" />
                          <path fill="#4285F4" d="M12 13.065L23.2 6.4H.8L12 13.065z" />
                        </svg>
                      }
                    />
                    <div className="grid gap-4 sm:grid-cols-2">
                      <ContactCard
                        label="Instagram"
                        value="@belaire_airbnbs"
                        hint="Tap to view page"
                        href="https://instagram.com/belaire_airbnbs"
                        icon={
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2" />
                            <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2" />
                            <circle cx="17" cy="7" r="1" fill="#E1306C" />
                          </svg>
                        }
                      />
                      <ContactCard
                        label="TikTok"
                        value="@belaire_bnb"
                        hint="Tap to watch content"
                        href="https://tiktok.com/@belaire_bnb"
                        icon={
                          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9 3v12.5a3.5 3.5 0 11-2.5-3.35V9.2A6.5 6.5 0 1013 15.7V8.5a8.5 8.5 0 004.5 1.3V6.5a5.5 5.5 0 01-3.5-1.3V3H9z" />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedHome && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b2119]/50 px-4 py-8 backdrop-blur-sm">
            <motion.div initial={{ opacity: 0, y: 24, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.98 }} transition={{ type: "spring", stiffness: 240, damping: 22 }} className="relative max-h-[92vh] w-full max-w-5xl overflow-hidden rounded-[2rem] bg-[#fcf8f2] shadow-[0_30px_80px_rgba(43,33,25,0.28)]">
              <button type="button" onClick={resetModal} className="absolute right-5 top-5 z-20 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-[#6e5644] shadow-sm transition hover:scale-[1.03]">
                Close
              </button>
              <div className="flex max-h-[92vh] flex-col overflow-y-auto">
                <div className="w-full">
                  <div className="relative h-[380px] w-full overflow-hidden">
                    <img src={selectedHome.gallery[galleryIndex]} alt={`${selectedHome.title} view ${galleryIndex + 1}`} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3a2b1e]/50 via-transparent to-transparent" />
                    <button type="button" onClick={() => setGalleryIndex((galleryIndex - 1 + selectedHome.gallery.length) % selectedHome.gallery.length)} className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#6e5644] shadow-sm backdrop-blur transition hover:scale-[1.04]">
                      ←
                    </button>
                    <button type="button" onClick={() => setGalleryIndex((galleryIndex + 1) % selectedHome.gallery.length)} className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-[#6e5644] shadow-sm backdrop-blur transition hover:scale-[1.04]">
                      →
                    </button>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="mb-3 inline-flex rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur-sm">{selectedHome.badge}</div>
                      <h3 className="text-4xl font-semibold leading-tight">{selectedHome.title}</h3>
                      <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/80">{selectedHome.location} • {selectedHome.bedrooms}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-[#9a7b62]">Boutique stay</p>
                        <h4 className="mt-2 text-3xl font-semibold text-[#4d3a2f]">Designed for a memorable Belaire experience</h4>
                      </div>
                      <div className="rounded-2xl bg-[#f5ebdd] px-4 py-3 text-right shadow-sm">
                        <div className="text-2xl font-semibold text-[#5f4839]">★ {selectedHome.rating}</div>
                        <div className="text-sm text-[#8b705c]">Exceptional reviews</div>
                      </div>
                    </div>

                    <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
                      {selectedHome.gallery.map((image, index) => (
                        <button key={`${selectedHome.title}-${index}`} type="button" onClick={() => setGalleryIndex(index)} className={`relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl border ${galleryIndex === index ? "border-[#b78b68] ring-2 ring-[#e8d8c8]" : "border-[#eadfce]"}`}>
                          <img src={image} alt={`${selectedHome.title} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>

                    <p className="mt-6 text-base leading-7 text-[#6d5848]">{selectedHome.description}</p>
                    <div className="mt-6 rounded-[1.5rem] border border-[#eadfce] bg-white/80 p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-semibold text-[#4d3a2f]">{money(selectedHome.price)}</div>
                          <div className="text-sm text-[#8b705c]">for 1 night</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-[#6d5848]">{selectedHome.host}</div>
                          <div className="text-xs uppercase tracking-[0.18em] text-[#a1836d]">Premium host</div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <h5 className="text-lg font-semibold text-[#4d3a2f]">What makes it special</h5>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {selectedHome.amenities.map((item) => (
                          <div key={item} className="rounded-2xl bg-[#f5ebdd] px-4 py-3 text-sm font-medium text-[#6d5848] shadow-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 rounded-[1.5rem] bg-[#c7ab8d] p-5 text-white shadow-sm">
                      <div className="text-xs uppercase tracking-[0.2em] text-white/70">Host note</div>
                      <p className="mt-2 text-base leading-7 text-white/90">{selectedHome.highlight}. Expect warm hospitality, refined interiors, and a stay that feels quietly luxurious from arrival to checkout.</p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-[1.75rem] border border-[#eadfce] bg-[#fbf7f1] p-5 shadow-sm">
                    <div className="space-y-3 text-sm text-[#6d5848]">
                      {bookingSummary.map((item) => (
                        <div key={item.label} className="flex items-center justify-between text-base">
                          <span className="font-medium text-[#6d5848]">{item.label}</span>
                          <span className="text-xl font-semibold text-[#4d3a2f]">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={openWhatsAppBooking}
                      className="mt-5 w-full rounded-full bg-[#b78b68] px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.01]"
                    >
                      Reserve via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
