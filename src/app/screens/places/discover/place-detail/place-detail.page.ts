import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ModalController, NavController } from "@ionic/angular";
import { CreateBookingComponent } from "src/app/components/create-booking/create-booking.component";
import { Place } from "src/app/models/Place.model";
import { PlacesService } from "../../places.service";

@Component({
  selector: "app-place-detail",
  templateUrl: "./place-detail.page.html",
  styleUrls: ["./place-detail.page.scss"],
})
export class PlaceDetailPage implements OnInit {
  public place: Place;

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("/places/discover");
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get("placeId"));
    });
  }

  bookPlace = () =>
    this.modalCtrl
      .create({
        component: CreateBookingComponent,
        componentProps: { place: this.place },
      })
      .then((modalEl) => {
        modalEl.present();
        modalEl.onDidDismiss().then((res) => {
          if (res.data) console.log("booked");
        });
      });
}
