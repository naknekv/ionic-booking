import { Component, OnInit } from "@angular/core";
import { IonItemSliding } from "@ionic/angular";
import { Booking } from "src/app/models/Booking.model";
import { BookingsService } from "./bookings.service";

@Component({
  selector: "app-bookings",
  templateUrl: "./bookings.page.html",
  styleUrls: ["./bookings.page.scss"],
})
export class BookingsPage implements OnInit {
  public bookings: Booking[];

  constructor(private bookingsService: BookingsService) {}

  getBookings = () => (this.bookings = this.bookingsService.getBookings());

  ngOnInit() {
    this.getBookings();
  }

  deleteBooking = (bookingId: string, slidingItem: IonItemSliding) => {
    slidingItem.close();
    this.bookingsService.deleteBooking(bookingId);
    this.getBookings();
  };
}
