type BookingHeaderProps = {
    onClose: () => void;
  };
  
  export default function BookingHeader({
    onClose,
  }: BookingHeaderProps) {
    return (
      <div className="sticky top-0 z-20 border-b border-[#e6d7c7] bg-[#f7f0e8]/95 px-8 py-6 backdrop-blur">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b78b68]">
              Boutique Booking
            </p>
  
            <h2 className="mt-2 text-3xl font-semibold text-[#4d3a2f]">
              Request Your Stay
            </h2>
  
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#6d5645]">
              Complete the booking request below and our team will contact
              you shortly to confirm availability and pricing.
            </p>
          </div>
  
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-white p-3 shadow transition hover:scale-105"
          >
            ✕
          </button>
        </div>
  
        <div className="mt-6 rounded-2xl border border-[#d9c4ae] bg-[#efe2d3] p-4 text-sm leading-7 text-[#5d4737]">
          Prefer to speak with us directly?
          <br />
          You can complete this booking request or contact Belaire immediately
          via Call or WhatsApp using the navigation bar or the contact options
          at the bottom of this panel.
        </div>
      </div>
    );
  }