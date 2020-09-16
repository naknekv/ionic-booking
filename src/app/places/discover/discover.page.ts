import { Component, OnInit } from "@angular/core";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  public places: Place[];

  constructor(private placesService: PlacesService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }
}
