import { BookingFormData } from "./BookingTypes";

type StaySummaryProps = {
  form: BookingFormData;
};

export default function StaySummary({
  form,
}: StaySummaryProps) {
  return (
    <section className="mt-12 rounded-3xl border border-[#eadfce] bg-[#e8d7c3] p-6">
      <h2 className="text-xl font-semibold text-[#4d3a2f]">
        Your Stay Summary
      </h2>

      <p className="mt-1 text-sm text-[#7c6655]">
        Your selections update instantly as you browse.
      </p>

      <div className="mt-4 space-y-3 text-sm text-[#6d5645]">

        <div className="flex items-center gap-2">
          <span>📍</span>
          <span>{form.location || "Choose a location"}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>🏡</span>
          <span>{form.apartmentSize || "Choose an apartment"}</span>
        </div>

        <div className="flex items-center gap-2">
          <span>👥</span>
          <span>
            {form.guests} Guest{form.guests === "1" ? "" : "s"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>📅</span>
          <span>
            {form.arrivalDate || "Arrival"} →{" "}
            {form.departureDate || "Departure"}
          </span>
        </div>

      </div>
    </section>
  );
}