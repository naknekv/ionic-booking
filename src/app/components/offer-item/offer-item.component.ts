import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IonItemSliding } from "@ionic/angular";
import { Place } from "src/app/models/Place.model";

@Component({
  selector: "app-offer-item",
  templateUrl: "./offer-item.component.html",
  styleUrls: ["./offer-item.component.scss"],
})
export class OfferItemComponent implements OnInit {
  @Input() public offer: Place;

  constructor(private router: Router) {}

  ngOnInit() {}

  openEditPage = (itemId: string, slidingItem: IonItemSliding) => {
    slidingItem.close();
    this.router.navigate(["places/offers", itemId, "edit"]);
  };

  getDate = () => new Date();
}
