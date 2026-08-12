import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Rates() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#4d3a2f]">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#efe2d1] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#9b806a]">
              BELAIRE BOUTIQUE STAYS
            </p>

            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Rates &amp;
              <br />
              <span className="text-[#9b806a]">Stay Options</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#7c6655] sm:text-lg">
              Comfortable, beautifully furnished stays with flexible options
              for short visits, extended stays, and everything in between.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="rounded-full bg-[#4d3a2f] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#392b23]"
              >
                Explore Apartments
              </button>

              <button
                type="button"
                onClick={() => navigate("/contact")}
                className="rounded-full border border-[#cdb79e] bg-white/50 px-7 py-3.5 text-sm font-semibold text-[#4d3a2f] transition hover:bg-white"
              >
                Talk to Belaire
              </button>
            </div>
          </motion.div>

        </div>
      </section>


      {/* Pricing introduction */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#9b806a]">
              Simple &amp; Transparent
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Choose the stay
              <br />
              that suits you.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#7c6655] sm:text-base">
            Our rates vary by apartment, location, dates, and length of stay.
            Select an apartment to see its current rate and availability, or
            contact us for longer stays and tailored arrangements.
          </p>

        </div>


        {/* Rate cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-[2rem] border border-[#eadfce] bg-white p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9b806a]">
                Short Stay
              </span>

              <span className="rounded-full bg-[#efe2d1] px-3 py-1 text-xs text-[#7c6655]">
                Flexible
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Nightly
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7c6655]">
              Ideal for business trips, weekends, airport stays, and short
              getaways.
            </p>

            <div className="mt-7 border-t border-[#eadfce] pt-5">
              <p className="text-sm text-[#9b806a]">
                Rates
              </p>

              <p className="mt-1 text-xl font-semibold">
                Vary by apartment
              </p>
            </div>
          </motion.div>


          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-[2rem] border border-[#dcc4aa] bg-[#efe2d1] p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9b806a]">
                Extended Stay
              </span>

              <span className="rounded-full bg-white/70 px-3 py-1 text-xs text-[#7c6655]">
                Popular
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Weekly
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7c6655]">
              A comfortable option for longer visits, work assignments, and
              extended holidays.
            </p>

            <div className="mt-7 border-t border-[#dcc4aa] pt-5">
              <p className="text-sm text-[#9b806a]">
                Rates
              </p>

              <p className="mt-1 text-xl font-semibold">
                Contact for a quote
              </p>
            </div>
          </motion.div>


          <motion.div
            whileHover={{ y: -5 }}
            className="rounded-[2rem] border border-[#eadfce] bg-white p-7 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-[#9b806a]">
                Long Stay
              </span>

              <span className="rounded-full bg-[#efe2d1] px-3 py-1 text-xs text-[#7c6655]">
                Tailored
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Monthly
            </h3>

            <p className="mt-3 text-sm leading-6 text-[#7c6655]">
              Designed for guests who want the comfort of a furnished home
              for an extended period.
            </p>

            <div className="mt-7 border-t border-[#eadfce] pt-5">
              <p className="text-sm text-[#9b806a]">
                Rates
              </p>

              <p className="mt-1 text-xl font-semibold">
                Contact for a quote
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* What's included */}
      <section className="bg-[#4d3a2f] px-6 py-16 text-white lg:px-10 lg:py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#d8bea3]">
              Every Stay
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              More than just a place to sleep.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/70 sm:text-base">
              Every Belaire stay is designed to give you the comfort and
              convenience of a home while you're away from yours.
            </p>
          </div>


          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["01", "Fully Furnished", "Thoughtfully furnished spaces ready for your stay."],
              ["02", "Wi-Fi", "Stay connected whether you're working or relaxing."],
              ["03", "Comfort", "A comfortable environment designed for everyday living."],
              ["04", "Convenience", "Prime locations with essential amenities nearby."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="bg-[#4d3a2f] p-7"
              >
                <div className="text-xs tracking-[0.2em] text-[#d8bea3]">
                  {number}
                </div>

                <h3 className="mt-8 text-lg font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">

        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#efe2d1] px-7 py-14 text-center sm:px-12">

          <p className="text-xs uppercase tracking-[0.3em] text-[#9b806a]">
            Find Your Stay
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Ready to find your Belaire?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#7c6655] sm:text-base">
            Browse our apartments and send us a booking request. We'll confirm
            availability and get back to you.
          </p>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-8 rounded-full bg-[#b78b68] px-8 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#a67957]"
          >
            Browse Apartments
          </button>

        </div>

      </section>

    </main>
  );
}