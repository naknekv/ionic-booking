import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonItemSliding } from "@ionic/angular";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../places.service";

@Component({
  selector: "app-offers",
  templateUrl: "./offers.page.html",
  styleUrls: ["./offers.page.scss"],
})
export class OffersPage implements OnInit {
  public offers: Place[];

  constructor(private placesService: PlacesService, private router: Router) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.offers = this.placesService.getPlaces();
  }

  openEditPage(itemId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(["places/offers", itemId, "edit"]);
  }
}
