import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StaySummary from "./StaySummary";
import ContactCards from "./ContactCards";
import SubmitBar from "./SubmitBar";
import emailjs from "@emailjs/browser";
import { trackConversion } from "../utils/gtag";

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
  const [bookingSent, setBookingSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateForm = (
    field: keyof typeof form,
    value: string
  ) => setForm((c) => ({ ...c, [field]: value }));

  const input =
    "w-full rounded-2xl border border-[#e6d8ca] bg-white px-5 py-4 outline-none transition focus:border-[#b78b68]";

 const handleSubmit = async () => {
  try {
    // Basic validation
    if (
      !form.firstName ||
      !form.lastName ||
      !form.email ||
      !form.phone ||
      !form.location ||
      !form.apartmentSize ||
      !form.arrivalDate ||
      !form.departureDate
    ) {
      alert("Please complete all required fields before submitting.");
      return;
    }
    setIsSubmitting(true);

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        location: form.location,
        apartment: form.apartmentSize,
        arrival: form.arrivalDate,
        departure: form.departureDate,
        guests: form.guests,
        requests: form.additionalRequests,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    // Google Ads conversion
trackConversion("enquiryForm");
setIsSubmitting(false);

    setBookingSent(true);

    
  } catch (error) {
    console.error(error);
    setIsSubmitting(false);

    alert(
      "Sorry, something went wrong while sending your booking request. Please try again or contact us directly."
    );
  }
};
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
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-[560px] overflow-y-auto rounded-l-[2.5rem] bg-[#efe2d1] shadow-[0_30px_80px_rgba(0,0,0,0.25)]"
          >
            <div className="p-8 pb-32">
              {bookingSent ? (
  <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#b78b68] text-5xl text-white">
      ✓
    </div>

    <h2 className="mt-8 text-3xl font-semibold text-[#4d3a2f]">
      Booking Request Sent
    </h2>

    <p className="mt-4 max-w-md text-[#7c6655]">
      Thank you for choosing Belaire Boutique Stays.
      We've received your booking request and will contact you shortly.
    </p>

    <button
      className="mt-10 rounded-2xl bg-[#25D366] px-8 py-4 font-semibold text-white"
      onClick={() => {
          trackConversion("whatsapp");
        const whatsappMessage = `Hello Belaire Boutique Stays!

I have just submitted a booking request through your website.

Name: ${form.firstName} ${form.lastName}
Location: ${form.location}
Apartment: ${form.apartmentSize}
Arrival: ${form.arrivalDate}
Departure: ${form.departureDate}
Guests: ${form.guests}`;

        window.open(
          `https://wa.me/254728530427?text=${encodeURIComponent(
            whatsappMessage
          )}`,
          "_blank"
        );
      }}
    >
      Continue to WhatsApp
    </button>

    <button
      className="mt-4 text-[#7c6655] underline"
      onClick={() => {
  setForm({
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

  setBookingSent(false);
  onClose();
}}
    >
      Done
    </button>
  </div>
) : (
  <>
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
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dcc4aa] hover:bg-[#ead8c4]"
                >
                  ✕
                </button>
              </div>

              <div className="mt-8 rounded-3xl border border-[#eadfce] bg-[#e8d7c3] p-5">
                <h3 className="font-semibold text-[#5d4737]">
                  One request is all you need
                </h3>
                <p className="mt-2 text-sm text-[#7c6655]">
                  Mention multiple apartments in Additional Requests if you'd
                  like us to check several options.
                </p>
              </div>


              <div className="mt-8">
                <div className="flex items-center justify-between text-sm text-[#6d5645]">
                  <span className="font-medium">Complete your booking request</span>
                  <span>Boutique Booking • Step 1 of 3</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-[#dcc4aa]">
                  <div className="h-2 w-1/3 rounded-full bg-[#b78b68]"></div>
                </div>
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
                            ? "border-[#b78b68] bg-[#e8d7c3]"
                            : "border-[#eadfce] bg-white hover:border-[#b78b68]"
                          }`}>
                          <div className="font-semibold text-[#4d3a2f]">📌 {loc.name}</div>
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
                          onClick={() => updateForm("apartmentSize", apt.title)}
                          className={`rounded-3xl overflow-hidden border transition ${
                            form.apartmentSize===apt.title
                            ? "border-[#b78b68] ring-2 ring-[#d9b999]"
                            : "border-[#eadfce] hover:border-[#b78b68]"
                          }`}
                        >
                          <div className="relative h-40 bg-gradient-to-br from-[#e8dccd] to-[#d8c0a7] flex items-center justify-center">
                            <div className="absolute inset-3 rounded-2xl border-2 border-dashed border-white/70 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-4xl">⌂</div>
                                <div className="mt-2 text-xs font-semibold tracking-wider text-[#6d5645] uppercase">
                                  Replace with apartment photo
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white p-4 text-center">
                            <div className="flex items-center justify-between"><div className="font-semibold text-[#4d3a2f]">{apt.title}</div><span className="rounded-full bg-[#b78b68] px-2 py-1 text-[10px] uppercase tracking-wide text-white">Featured</span></div>
                            <div className="mt-1 text-xs text-[#7c6655]">Luxury Finish • Fast Wi-Fi</div>
                            <div className="mt-2 flex justify-center gap-3 text-xs text-[#9b806a]">
                              <span>Sleeps 2–6</span>
                              <span>Kitchen</span>
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
                    <p className="mt-1 text-xs text-[#7c6655]">Arrival Date</p>
                    <input className={input} type="date"
                      value={form.departureDate}
                      onChange={e=>updateForm("departureDate",e.target.value)} />
                    <p className="mt-1 text-xs text-[#7c6655]">Departure Date</p>
                  </div>

                  <div className="rounded-2xl border border-[#eadfce] bg-white p-4">
                    <p className="text-sm font-medium text-[#7c6655] mb-3">Guests</p>
                    <div className="flex items-center justify-between">
                      <button type="button" className="h-10 w-10 rounded-full bg-[#dcc4aa]"
                        onClick={()=>updateForm("guests",String(Math.max(1,Number(form.guests)-1)))}>−</button>
                      <div className="font-semibold text-[#4d3a2f]">{form.guests} Guest{form.guests==="1" ? "" : "s"}</div>
                      <button type="button" className="h-10 w-10 rounded-full bg-[#dcc4aa]"
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

              
              <StaySummary form={form} />

              <ContactCards />
               </>
              )}

            </div>

            {!bookingSent && (
  <SubmitBar
  form={form}
  onSubmit={handleSubmit}
  loading={isSubmitting}
/>
)}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
