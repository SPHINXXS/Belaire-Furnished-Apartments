import type { BookingFormData } from "./BookingTypes";

type SubmitBarProps = {
  form: BookingFormData;
  onSubmit: () => void;
};

export default function SubmitBar({
  form,
  onSubmit,
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
  onClick={onSubmit}
  className="..."
>
        Request Availability
      </button>

    </div>
  );
}