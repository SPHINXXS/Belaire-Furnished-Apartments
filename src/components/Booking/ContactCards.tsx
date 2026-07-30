export default function ContactCards() {
    return (
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[#4d3a2f]">
          Contact Belaire
        </h2>
  
        <p className="mt-2 text-sm text-[#7c6655]">
          Prefer to speak with us directly? Reach us using any of the options
          below.
        </p>
  
        <div className="mt-6 grid grid-cols-2 gap-4">
          <a
            href="tel:+254728530427"
            className="rounded-2xl border border-[#eadfce] bg-white p-4 transition hover:border-[#b78b68]"
          >
            <div className="text-2xl">📞</div>
            <div className="mt-2 font-semibold text-[#4d3a2f]">Call</div>
            <div className="text-xs text-[#7c6655]">
              +254 728 530 427
            </div>
          </a>
  
          <a
            href="https://wa.me/254728530427"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-[#eadfce] bg-white p-4 transition hover:border-[#25D366]"
          >
            <div className="text-2xl">💬</div>
            <div className="mt-2 font-semibold text-[#4d3a2f]">
              WhatsApp
            </div>
            <div className="text-xs text-[#7c6655]">
              Start a chat
            </div>
          </a>
  
          <a
            href="mailto:belairedistillers@gmail.com"
            className="rounded-2xl border border-[#eadfce] bg-white p-4 transition hover:border-[#b78b68]"
          >
            <div className="text-2xl">✉️</div>
            <div className="mt-2 font-semibold text-[#4d3a2f]">
              Email
            </div>
            <div className="text-xs text-[#7c6655]">
              Booking enquiries
            </div>
          </a>
  
          <a
  href="https://instagram.com/belaire_airbnbs"
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl border border-[#eadfce] bg-white p-4 transition hover:border-[#E1306C]"
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0F6]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="#E1306C"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="#E1306C"
        strokeWidth="2"
      />
      <circle cx="17" cy="7" r="1" fill="#E1306C" />
    </svg>
  </div>

  <div className="mt-3 font-semibold text-[#4d3a2f]">
    Instagram
  </div>

  <div className="text-xs text-[#7c6655]">
    @belaire_airbnbs
  </div>
</a>

<a
  href="https://tiktok.com/@belaire_bnb"
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl border border-[#eadfce] bg-white p-4 transition hover:border-black"
>
  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F4F4]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9 3v12.5a3.5 3.5 0 11-2.5-3.35V9.2A6.5 6.5 0 1013 15.7V8.5a8.5 8.5 0 004.5 1.3V6.5a5.5 5.5 0 01-3.5-1.3V3H9z" />
    </svg>
  </div>

  <div className="mt-3 font-semibold text-[#4d3a2f]">
    TikTok
  </div>

  <div className="text-xs text-[#7c6655]">
    @belaire_bnb
  </div>
</a>
        </div>
      </section>
    );
  }