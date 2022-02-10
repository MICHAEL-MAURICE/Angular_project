import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  homeClicked=false;
  usersClicked = false;
  signUpClicked = false;
  aboutClicked = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHomeClicked() {
    this.homeClicked = true;
    this.signUpClicked = false;
    this.usersClicked = false;
    this.aboutClicked = false;
  }
  onSignUpClicked() {
    this.homeClicked = false;
    this.signUpClicked = true;
    this.usersClicked = false;
    this.aboutClicked = false;
  }
  onUsersClicked() {
    this.homeClicked = false;
    this.signUpClicked = false;
    this.usersClicked = true;
    this.aboutClicked = false;
  }
  onAboutClicked() {
    this.homeClicked = false;
    this.signUpClicked = false;
    this.usersClicked = false;
    this.aboutClicked = true;
  }

}
