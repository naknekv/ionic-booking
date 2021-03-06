import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MenuController, NavController } from "@ionic/angular";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  public error: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ionViewWillEnter() {
    // Disable menu
    this.menuCtrl.enable(false);
  }

  login = () => {
    if (this.form.valid) {
      if (
        this.form.value.email === "test@test.com" &&
        this.form.value.password === "123456aS"
      ) {
        this.authService.login();
        this.router.navigateByUrl("/places/discover");
        this.menuCtrl.enable(true);
        console.log(this.form);
      } else {
        this.error = "Username/password not valid.";
      }
    } else {
      this.error = "Username and password are required.";
    }
  };
}
