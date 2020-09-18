import { Injectable } from "@angular/core";
import { Booking } from "src/app/models/Booking.model";

@Injectable({
  providedIn: "root",
})
export class BookingsService {
  private bookings: Booking[] = [
    {
      id: "xyz",
      placeId: "p1",
      placeTitle: "Manhattan Mansion",
      guestNumber: 2,
      userId: "abc",
    },
  ];
  constructor() {}

  getBookings = () => [...this.bookings];

  deleteBooking = (bookingId: string) =>
    (this.bookings = this.bookings.filter(({ id }) => id !== bookingId));
}
