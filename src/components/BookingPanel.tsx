import { motion, AnimatePresence } from "framer-motion";

type BookingDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingDrawer({
  isOpen,
  onClose,
}: BookingDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background */}

          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-[500px] overflow-y-auto rounded-l-[2.5rem] bg-[#fcf8f2] shadow-[0_20px_80px_rgba(0,0,0,0.22)]"
          >
            <div className="p-8">

              {/* Header */}

              <div className="flex items-start justify-between">

                <div>

                  <div className="text-xs uppercase tracking-[0.35em] text-[#9b806a]">
                    BELAIRE
                  </div>

                  <h1 className="mt-3 text-4xl font-semibold text-[#4d3a2f]">
                    Request Your Stay
                  </h1>

                  <p className="mt-4 text-[15px] leading-7 text-[#7c6655]">
                    Complete the booking request below and our team
                    will confirm availability before contacting you
                    via WhatsApp and email within one business day.
                  </p>

                </div>

                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebdd] text-xl transition hover:bg-[#ead8c4]"
                >
                  ✕
                </button>

              </div>

              {/* Information Card */}

              <div className="mt-8 rounded-3xl border border-[#eadfce] bg-[#f8f1e7] p-5">

                <div className="font-semibold text-[#5d4737]">
                  One request is all you need
                </div>

                <p className="mt-2 text-sm leading-6 text-[#7c6655]">
                  Interested in multiple apartments?
                  Mention them in the Additional Requests
                  section below—you only need to submit
                  one booking request.
                </p>

              </div>

              {/* Guest Information */}

              <div className="mt-10">

                <h2 className="text-xl font-semibold text-[#4d3a2f]">
                  Guest Information
                </h2>

                <div className="mt-5 space-y-4">

                  <input
                    placeholder="First Name"
                    className="w-full rounded-2xl border border-[#e5d7c8] bg-white px-5 py-4 outline-none transition focus:border-[#c7aa8f]"
                  />

                  <input
                    placeholder="Last Name"
                    className="w-full rounded-2xl border border-[#e5d7c8] bg-white px-5 py-4 outline-none transition focus:border-[#c7aa8f]"
                  />

                  <input
                    placeholder="Email Address"
                    className="w-full rounded-2xl border border-[#e5d7c8] bg-white px-5 py-4 outline-none transition focus:border-[#c7aa8f]"
                  />

                  <input
                    placeholder="Mobile Number"
                    className="w-full rounded-2xl border border-[#e5d7c8] bg-white px-5 py-4 outline-none transition focus:border-[#c7aa8f]"
                  />

                </div>

              </div>

              {/* Placeholder */}

              <div className="mt-10 rounded-3xl border border-dashed border-[#d9c7b5] p-8 text-center text-[#8d7766]">

                Stay Preferences coming next...

              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}