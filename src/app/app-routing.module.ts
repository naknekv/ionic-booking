import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./login/auth.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "places/discover",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "places",
    loadChildren: () =>
      import("./places/places.module").then((m) => m.PlacesPageModule),
    canLoad: [AuthGuard],
  },
  {
    path: "bookings",
    loadChildren: () =>
      import("./bookings/bookings.module").then((m) => m.BookingsPageModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
