import ApartmentCard from "./ApartmentCard";
import LocationCard from "./LocationCard";
import { BookingFormData, UpdateBookingForm } from "./BookingTypes";
import { apartments } from "./apartments";

type StayPreferencesProps = {
  form: BookingFormData;
  updateForm: UpdateBookingForm;
};

const locations = [
  {
    name: "Syokimau",
    subtitle: "Near JKIA • Quiet & Convenient",
  },
  {
    name: "Ruaka",
    subtitle: "Near Two Rivers Mall",
  },
  {
    name: "Thindigua",
    subtitle: "Near Garden City & UN",
  },
];

export default function StayPreferences({
  form,
  updateForm,
}: StayPreferencesProps) {
  return (
    <section className="space-y-8 rounded-3xl bg-white p-8 shadow-sm">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-[#b78b68]">
          Step 2
        </p>

        <h3 className="mt-2 text-2xl font-semibold text-[#4d3a2f]">
          Stay Preferences
        </h3>

        <p className="mt-2 text-sm text-[#7c6655]">
          Tell us where you'd like to stay and the type of apartment you're
          looking for.
        </p>
      </div>

      {/* Location */}

      <div className="space-y-4">

        <h4 className="font-semibold text-[#4d3a2f]">
          Choose a Location
        </h4>

        <div className="grid gap-4 md:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.name}
              title={location.name}
              subtitle={location.subtitle}
              selected={form.location === location.name}
              onClick={() =>
                updateForm("location", location.name)
              }
            />
          ))}
        </div>

      </div>

      {/* Apartment */}

      <div className="space-y-4">

        <h4 className="font-semibold text-[#4d3a2f]">
          Choose an Apartment
        </h4>

        <div className="grid gap-6 lg:grid-cols-2">
          {apartments.map((apartment) => (
            <ApartmentCard
              key={apartment.id}
              apartment={apartment}
              selected={
                form.apartmentSize === apartment.title
              }
              onClick={() =>
                updateForm(
                  "apartmentSize",
                  apartment.title
                )
              }
            />
          ))}
        </div>

      </div>

      {/* Dates */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d4737]">
            Arrival Date
          </label>

          <input
            type="date"
            value={form.arrivalDate}
            onChange={(e) =>
              updateForm("arrivalDate", e.target.value)
            }
            className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#5d4737]">
            Departure Date
          </label>

          <input
            type="date"
            value={form.departureDate}
            onChange={(e) =>
              updateForm("departureDate", e.target.value)
            }
            className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3"
          />
        </div>

      </div>

      {/* Guests */}

      <div>

        <label className="mb-2 block text-sm font-medium text-[#5d4737]">
          Number of Guests
        </label>

        <input
          type="number"
          min={1}
          max={12}
          value={form.guests}
          onChange={(e) =>
            updateForm("guests", e.target.value)
          }
          className="w-32 rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3"
        />

      </div>

      {/* Requests */}

      <div>

        <label className="mb-2 block text-sm font-medium text-[#5d4737]">
          Additional Requests
        </label>

        <textarea
          rows={5}
          value={form.additionalRequests}
          onChange={(e) =>
            updateForm(
              "additionalRequests",
              e.target.value
            )
          }
          placeholder="Airport transfer, early check-in, late checkout..."
          className="w-full rounded-2xl border border-[#e4d5c4] bg-[#faf7f2] px-4 py-3"
        />

      </div>

    </section>
  );
}