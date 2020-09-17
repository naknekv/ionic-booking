import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private userIsAuthenticated = true;

  constructor(private router: Router) {}

  isAuthenticated = () => this.userIsAuthenticated;

  login = () => (this.userIsAuthenticated = true);

  logout = () => {
    this.userIsAuthenticated = false;
    this.router.navigateByUrl("");
  };
}
