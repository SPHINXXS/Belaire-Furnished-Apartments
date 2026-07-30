import { BookingFormData } from "./BookingTypes";

type SubmitBarProps = {
  form: BookingFormData;
};

export default function SubmitBar({
  form,
}: SubmitBarProps) {
  return (
    <div className="sticky bottom-0 border-t border-[#eadfce] bg-[#efe2d1] p-6">

      <div className="mb-4 rounded-2xl bg-[#e8d7c3] p-4">
        <div className="text-xs uppercase tracking-[0.2em] text-[#7c6655]">
          Current Selection
        </div>

        <div className="mt-2 text-sm text-[#4d3a2f]">
          {form.location || "Choose a location"} •{" "}
          {form.apartmentSize || "Choose an apartment"} •{" "}
          {form.guests} Guest{form.guests === "1" ? "" : "s"}
        </div>
      </div>

      <button
        className="w-full rounded-2xl bg-[#b78b68] py-4 text-lg font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#a57b59]"
      >
        Request Availability
      </button>

    </div>
  );
}