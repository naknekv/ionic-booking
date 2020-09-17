import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  login = () => {
    this.authService.login();
    this.navCtrl.navigateForward("/places/discover");
  };
}
