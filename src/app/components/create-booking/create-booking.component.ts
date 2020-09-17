import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Place } from "src/app/models/Place.model";

@Component({
  selector: "app-create-booking",
  templateUrl: "./create-booking.component.html",
  styleUrls: ["./create-booking.component.scss"],
})
export class CreateBookingComponent implements OnInit {
  @Input() place: Place;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  cancelModal = () => this.modalCtrl.dismiss(null, "cancel");

  bookPlace = () => this.modalCtrl.dismiss({ message: "hello" }, "confirm");
}
