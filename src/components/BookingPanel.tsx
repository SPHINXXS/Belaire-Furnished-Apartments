import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type BookingPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingPanel({
  isOpen,
  onClose,
}: BookingPanelProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    apartmentSize: "",
    arrivalDate: "",
    departureDate: "",
    guests: "2",
    additionalRequests: "",
  });

  const updateForm = (
    field: keyof typeof form,
    value: string
  ) => setForm((c) => ({ ...c, [field]: value }));

  const input =
    "w-full rounded-2xl border border-[#e6d8ca] bg-white px-5 py-4 outline-none transition focus:border-[#b78b68]";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-[520px] overflow-y-auto rounded-l-[2.5rem] bg-[#fcf8f2] shadow-2xl"
          >
            <div className="p-8 pb-32">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#9b806a]">
                    BELAIRE
                  </div>
                  <h1 className="mt-3 text-4xl font-semibold text-[#4d3a2f]">
                    Request Your Stay
                  </h1>
                  <p className="mt-4 text-[15px] leading-7 text-[#7c6655]">
                    Complete the booking request and we'll confirm availability
                    before contacting you via WhatsApp and email.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ebdd] hover:bg-[#ead8c4]"
                >
                  ✕
                </button>
              </div>

              <div className="mt-8 rounded-3xl border border-[#eadfce] bg-[#f8f1e7] p-5">
                <h3 className="font-semibold text-[#5d4737]">
                  One request is all you need
                </h3>
                <p className="mt-2 text-sm text-[#7c6655]">
                  Mention multiple apartments in Additional Requests if you'd
                  like us to check several options.
                </p>
              </div>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold text-[#4d3a2f]">
                  Guest Information
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <input className={input} placeholder="First Name"
                    value={form.firstName}
                    onChange={e=>updateForm("firstName",e.target.value)} />
                  <input className={input} placeholder="Last Name"
                    value={form.lastName}
                    onChange={e=>updateForm("lastName",e.target.value)} />
                </div>
                <div className="mt-4 space-y-4">
                  <input className={input} type="email" placeholder="Email Address"
                    value={form.email}
                    onChange={e=>updateForm("email",e.target.value)} />
                  <input className={input} placeholder="Mobile Number"
                    value={form.phone}
                    onChange={e=>updateForm("phone",e.target.value)} />
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-[#4d3a2f]">
                  Stay Preferences
                </h2>
                <div className="mt-6 grid gap-4">
                  <select className={input}
                    value={form.location}
                    onChange={e=>updateForm("location",e.target.value)}>
                    <option value="">Preferred Location</option>
                    <option>Syokimau</option>
                    <option>Ruaka</option>
                    <option>Thindigua</option>
                  </select>

                  <select className={input}
                    value={form.apartmentSize}
                    onChange={e=>updateForm("apartmentSize",e.target.value)}>
                    <option value="">Apartment Size</option>
                    <option>Studio</option>
                    <option>1 Bedroom</option>
                    <option>2 Bedroom</option>
                    <option>3 Bedroom</option>
                  </select>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input className={input} type="date"
                      value={form.arrivalDate}
                      onChange={e=>updateForm("arrivalDate",e.target.value)} />
                    <input className={input} type="date"
                      value={form.departureDate}
                      onChange={e=>updateForm("departureDate",e.target.value)} />
                  </div>

                  <select className={input}
                    value={form.guests}
                    onChange={e=>updateForm("guests",e.target.value)}>
                    {[1,2,3,4,5,6,7,8].map(n=>(
                      <option key={n} value={String(n)}>
                        {n} Guest{n>1?"s":""}
                      </option>
                    ))}
                  </select>
                </div>
              </section>

              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-[#4d3a2f]">
                  Additional Requests
                </h2>
                <textarea
                  rows={6}
                  className="mt-5 w-full resize-none rounded-3xl border border-[#e6d8ca] bg-white p-5 outline-none focus:border-[#b78b68]"
                  placeholder="Arrival time, apartment preferences, special requests..."
                  value={form.additionalRequests}
                  onChange={e=>updateForm("additionalRequests",e.target.value)}
                />
              </section>
            </div>

            <div className="sticky bottom-0 border-t border-[#eadfce] bg-[#fcf8f2] p-6">
              <button className="w-full rounded-2xl bg-[#b78b68] py-4 text-lg font-semibold text-white hover:bg-[#a57b59]">
                Request Availability
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
