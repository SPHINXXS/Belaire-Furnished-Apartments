import type { BookingFormData } from "./BookingTypes";

type SubmitBarProps = {
  form: BookingFormData;
  onSubmit: () => void;
  loading: boolean;
};

export default function SubmitBar({
  form,
  onSubmit,
  loading,
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
  disabled={loading}
  className="w-full rounded-2xl bg-[#b78b68] px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#a67957] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
>
  {loading ? "Sending Request..." : "Request Availability"}
</button>

    </div>
  );
}