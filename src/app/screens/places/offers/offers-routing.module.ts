import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { OffersPage } from "./offers.page";

const routes: Routes = [
  {
    path: "",
    component: OffersPage,
  },
  {
    path: "new",
    loadChildren: () =>
      import("./offer/offer.module").then((m) => m.OfferPageModule),
  },
  {
    path: ":placeId/edit",
    loadChildren: () =>
      import("./offer/offer.module").then((m) => m.OfferPageModule),
  },
  {
    path: ":placeId",
    loadChildren: () =>
      import("./offer-bookings/offer-bookings.module").then(
        (m) => m.OfferBookingsPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
