import { useState } from "react";
import type{ BookingFormData } from "../components/Booking/BookingTypes";

const initialForm: BookingFormData = {
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
};

export default function useBookingForm() {
  const [form, setForm] = useState<BookingFormData>(initialForm);

  const updateForm = (
    field: keyof BookingFormData,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
  };

  return {
    form,
    updateForm,
    resetForm,
  };
}