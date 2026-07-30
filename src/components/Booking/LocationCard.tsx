import { motion } from "framer-motion";

type LocationCardProps = {
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
};

export default function LocationCard({
  title,
  subtitle,
  selected,
  onClick,
}: LocationCardProps) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className={`w-full rounded-3xl border p-5 text-left transition-all duration-300 ${
        selected
          ? "border-[#b78b68] bg-[#e8d7c3] shadow-lg ring-2 ring-[#d9b999]"
          : "border-[#eadfce] bg-white hover:border-[#b78b68] hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-[#4d3a2f]">
            📍 {title}
          </h3>

          <p className="mt-2 text-sm text-[#7c6655]">
            {subtitle}
          </p>
        </div>

        {selected && (
          <div className="rounded-full bg-[#b78b68] px-3 py-1 text-xs font-semibold text-white">
            Selected
          </div>
        )}
      </div>
    </motion.button>
  );
}