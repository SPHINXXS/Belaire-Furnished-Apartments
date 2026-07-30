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
  const [selectedCard, setSelectedCard] = useState("");

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
                  <div>
                    <p className="mb-3 text-sm font-medium text-[#7c6655]">Choose a location</p>
                    <div className="grid gap-3">
                      {[
                        {name:"Syokimau",sub:"Near JKIA"},
                        {name:"Ruaka",sub:"Near Two Rivers"},
                        {name:"Thindigua",sub:"Near Garden City"},
                      ].map(loc=>(
                        <button
                          key={loc.name}
                          type="button"
                          onClick={()=>updateForm("location",loc.name)}
                          className={`rounded-2xl border p-4 text-left transition ${
                            form.location===loc.name
                            ? "border-[#b78b68] bg-[#f8f1e7]"
                            : "border-[#eadfce] bg-white hover:border-[#b78b68]"
                          }`}>
                          <div className="font-semibold text-[#4d3a2f]">📍 {loc.name}</div>
                          <div className="text-sm text-[#7c6655]">{loc.sub}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-[#7c6655]">Choose an apartment</p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {title:"Studio"},
                        {title:"1 Bedroom"},
                        {title:"2 Bedroom"},
                        {title:"3 Bedroom"},
                      ].map((apt)=>(
                        <button
                          type="button"
                          key={apt.title}
                          onClick={()=>{
                            setSelectedCard(apt.title);
                            updateForm("apartmentSize",apt.title);
                          }}
                          className={`rounded-3xl overflow-hidden border transition ${
                            selectedCard===apt.title
                            ? "border-[#b78b68] ring-2 ring-[#d9b999]"
                            : "border-[#eadfce] hover:border-[#b78b68]"
                          }`}
                        >
                          <div className="relative h-40 bg-gradient-to-br from-[#e8dccd] to-[#d8c0a7] flex items-center justify-center">
                            <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-white/70 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-4xl">🖼️</div>
                                <div className="mt-2 text-xs font-semibold tracking-wider text-[#6d5645] uppercase">
                                  Replace with apartment photo
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 text-center">
                            <div className="font-semibold text-[#4d3a2f]">{apt.title}</div>
                            <div className="mt-1 text-xs text-[#7c6655]">Fully Furnished • Fast Wi-Fi</div>
                            <div className="mt-2 flex justify-center gap-3 text-xs text-[#9b806a]">
                              <span>🛏 Sleeps 2–6</span>
                              <span>🍳 Kitchen</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <input className={input} type="date"
                      value={form.arrivalDate}
                      onChange={e=>updateForm("arrivalDate",e.target.value)} />
                    <input className={input} type="date"
                      value={form.departureDate}
                      onChange={e=>updateForm("departureDate",e.target.value)} />
                  </div>

                  <div className="rounded-2xl border border-[#eadfce] bg-white p-4">
                    <p className="text-sm font-medium text-[#7c6655] mb-3">Guests</p>
                    <div className="flex items-center justify-between">
                      <button type="button" className="h-10 w-10 rounded-full bg-[#f5ebdd]"
                        onClick={()=>updateForm("guests",String(Math.max(1,Number(form.guests)-1)))}>−</button>
                      <div className="font-semibold text-[#4d3a2f]">{form.guests} Guest{form.guests==="1" ? "" : "s"}</div>
                      <button type="button" className="h-10 w-10 rounded-full bg-[#f5ebdd]"
                        onClick={()=>updateForm("guests",String(Math.min(8,Number(form.guests)+1)))}>+</button>
                    </div>
                  </div>
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

              
              <section className="mt-12 rounded-3xl border border-[#eadfce] bg-[#f8f1e7] p-6">
                <h2 className="text-xl font-semibold text-[#4d3a2f]">Your Stay Summary</h2>
                <div className="mt-4 space-y-2 text-sm text-[#6d5645]">
                  <div>📍 {form.location || "Choose a location"}</div>
                  <div>🏠 {form.apartmentSize || "Choose an apartment"}</div>
                  <div>👥 {form.guests} Guest{form.guests==="1" ? "" : "s"}</div>
                  <div>📅 {form.arrivalDate || "Arrival"} → {form.departureDate || "Departure"}</div>
                </div>
              </section>


              <section className="mt-12">
                <h2 className="text-2xl font-semibold text-[#4d3a2f]">
                  Contact Belaire
                </h2>
                <p className="mt-2 text-sm text-[#7c6655]">
                  Prefer to speak with us directly? Reach us using any of the options below.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <a href="tel:+254728530427" className="rounded-2xl border border-[#eadfce] bg-white p-4 hover:border-[#b78b68] transition">
                    <div className="text-2xl">📞</div>
                    <div className="mt-2 font-semibold text-[#4d3a2f]">Call</div>
                    <div className="text-xs text-[#7c6655]">+254 728 530 427</div>
                  </a>

                  <a href="https://wa.me/254728530427" target="_blank" rel="noreferrer" className="rounded-2xl border border-[#eadfce] bg-white p-4 hover:border-[#25D366] transition">
                    <div className="text-2xl">💬</div>
                    <div className="mt-2 font-semibold text-[#4d3a2f]">WhatsApp</div>
                    <div className="text-xs text-[#7c6655]">Start a chat</div>
                  </a>

                  <a href="mailto:belairedistillers@gmail.com" className="rounded-2xl border border-[#eadfce] bg-white p-4 hover:border-[#b78b68] transition">
                    <div className="text-2xl">✉️</div>
                    <div className="mt-2 font-semibold text-[#4d3a2f]">Email</div>
                    <div className="text-xs text-[#7c6655]">Booking enquiries</div>
                  </a>

                  <div className="rounded-2xl border border-[#eadfce] bg-white p-4">
                    <div className="text-2xl">📱</div>
                    <div className="mt-2 font-semibold text-[#4d3a2f]">Socials</div>
                    <div className="text-xs text-[#7c6655]">Instagram & TikTok</div>
                  </div>
                </div>
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
