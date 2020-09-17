import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NavController } from "@ionic/angular";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-offer",
  templateUrl: "./offer.page.html",
  styleUrls: ["./offer.page.scss"],
})
export class OfferPage implements OnInit {
  public place: Place;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("placeId")) {
        this.place = this.placesService.getPlace(paramMap.get("placeId"));
      }
    });
  }
}
