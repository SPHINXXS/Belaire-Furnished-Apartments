export interface BookingFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  
    location: string;
    apartmentSize: string;
  
    arrivalDate: string;
    departureDate: string;
  
    guests: string;
  
    additionalRequests: string;
  }
  
  export interface Apartment {
    id: string;
    title: string;
    subtitle: string;
  
    image: string;
  
    sleeps: number;
  
    featured?: boolean;
  
    amenities: string[];
  
    locations: string[];
  }
  
  export interface Location {
    id: string;
    name: string;
    subtitle: string;
  }
  
  export interface BookingPanelProps {
    isOpen: boolean;
    onClose: () => void;
  }
  
  export type UpdateBookingForm = (
    field: keyof BookingFormData,
    value: string
  ) => void;