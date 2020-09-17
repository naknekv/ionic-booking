import { Component, OnInit } from "@angular/core";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  public offers: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.offers = this.placesService.getPlaces();
  }
}
