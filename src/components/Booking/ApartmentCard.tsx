import { motion } from "framer-motion";
import { Apartment } from "./BookingTypes";

type ApartmentCardProps = {
  apartment: Apartment;
  selected: boolean;
  onClick: () => void;
};

export default function ApartmentCard({
  apartment,
  selected,
  onClick,
}: ApartmentCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      onClick={onClick}
      className={`relative overflow-hidden rounded-3xl border bg-white text-left transition-all duration-300 ${
        selected
          ? "border-[#b78b68] ring-2 ring-[#d9b999] shadow-xl"
          : "border-[#eadfce] hover:border-[#b78b68] hover:shadow-lg"
      }`}
    >
      {/* Featured Badge */}

      {apartment.featured && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-[#b78b68] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Featured
        </div>
      )}

      {/* Image */}

      <div className="relative h-48 overflow-hidden bg-[#d8c0a7]">
        {apartment.image ? (
          <img
            src={apartment.image}
            alt={apartment.title}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="rounded-2xl border-2 border-dashed border-white/70 p-8 text-center">
              <div className="text-5xl">🏡</div>

              <div className="mt-3 text-xs uppercase tracking-[0.25em] text-[#6d5645]">
                Apartment Photo
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}

      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-xl font-semibold text-[#4d3a2f]">
            {apartment.title}
          </h3>

          <p className="mt-1 text-sm text-[#7c6655]">
            {apartment.subtitle}
          </p>
        </div>

        {/* Sleeps */}

        <div className="text-sm text-[#7c6655]">
          🛏 Sleeps {apartment.sleeps}
        </div>

        {/* Amenities */}

        <div className="flex flex-wrap gap-2">
          {apartment.amenities.map((amenity) => (
            <span
              key={amenity}
              className="rounded-full bg-[#f5ebdd] px-3 py-1 text-xs text-[#6d5645]"
            >
              {amenity}
            </span>
          ))}
        </div>

        {/* Locations */}

        <div className="flex flex-wrap gap-2">
          {apartment.locations.map((location) => (
            <span
              key={location}
              className="rounded-full border border-[#eadfce] px-3 py-1 text-xs text-[#7c6655]"
            >
              📍 {location}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}

      <div
        className={`flex items-center justify-center py-3 text-sm font-semibold transition ${
          selected
            ? "bg-[#b78b68] text-white"
            : "bg-[#faf5ef] text-[#6d5645]"
        }`}
      >
        {selected ? "✓ Selected" : "Select Apartment"}
      </div>
    </motion.button>
  );
}