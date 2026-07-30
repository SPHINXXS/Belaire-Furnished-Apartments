import { BookingFormData, UpdateBookingForm } from "./BookingTypes";

type GuestInformationProps = {
  form: BookingFormData;
  updateForm: UpdateBookingForm;
};

export default function GuestInformation({
  form,
  updateForm,
}: GuestInformationProps) {
  return (
    <section className="space-y-6 rounded-3xl bg-white p-8 shadow-sm">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#b78b68]">
          Step 1
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#4d3a2f]">
          Guest Information
        </h3>

        <p className="mt-2 text-sm text-[#7c6655]">
          Tell us a little about yourself so we can contact you regarding
          your booking request.
        </p>
      </div>

      {/* First & Last Name */}

      <div className="grid gap-5 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d4737]">
            First Name
          </label>

          <input
            type="text"
            value={form.firstName}
            onChange={(e) =>
              updateForm("firstName", e.target.value)
            }
            placeholder="John"
            className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#b78b68]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d4737]">
            Last Name
          </label>

          <input
            type="text"
            value={form.lastName}
            onChange={(e) =>
              updateForm("lastName", e.target.value)
            }
            placeholder="Doe"
            className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#b78b68]"
          />
        </div>

      </div>

      {/* Email */}

      <div>

        <label className="mb-2 block text-sm font-medium text-[#5d4737]">
          Email Address
        </label>

        <input
          type="email"
          value={form.email}
          onChange={(e) =>
            updateForm("email", e.target.value)
          }
          placeholder="john@example.com"
          className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#b78b68]"
        />

      </div>

      {/* Phone */}

      <div>

        <label className="mb-2 block text-sm font-medium text-[#5d4737]">
          Phone Number
        </label>

        <input
          type="tel"
          value={form.phone}
          onChange={(e) =>
            updateForm("phone", e.target.value)
          }
          placeholder="+254..."
          className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#b78b68]"
        />

      </div>

    </section>
  );
}