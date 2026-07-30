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
  
          <div className="rounded-2xl border border-[#eadfce] bg-white p-4">
            <div className="text-2xl">📱</div>
            <div className="mt-2 font-semibold text-[#4d3a2f]">
              Socials
            </div>
            <div className="text-xs text-[#7c6655]">
              Instagram & TikTok
            </div>
          </div>
        </div>
      </section>
    );
  }