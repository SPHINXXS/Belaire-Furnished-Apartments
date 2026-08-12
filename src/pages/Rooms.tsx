import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Rooms() {
    const navigate = useNavigate();
  return (
    <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 overflow-y-auto bg-[#f7f1e8]">
            <div className="sticky top-0 z-10 border-b border-[#eadfce] bg-[#f7f1e8]/95 backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#9a7b62]">Belaire collection</div>
                  <h2 className="mt-1 text-3xl font-semibold tracking-tight text-[#4d3a2f]">View all homes</h2>
                </div>
                <button type="button" onClick={() => navigate("/")} className="rounded-full border border-[#e4d3c2] bg-[#fbf7f1] px-5 py-2 text-sm font-medium text-[#6d5848] shadow-sm transition hover:-translate-y-0.5">
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
        
        </>
  );
}