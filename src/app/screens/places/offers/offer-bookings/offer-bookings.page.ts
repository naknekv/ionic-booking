import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-offer-bookings",
  templateUrl: "./offer-bookings.page.html",
  styleUrls: ["./offer-bookings.page.scss"],
})
export class OfferBookingsPage implements OnInit {
  public place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/offers");
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }
}
