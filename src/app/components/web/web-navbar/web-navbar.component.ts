import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-web-navbar',
  templateUrl: './web-navbar.component.html',
  styleUrls: ['./web-navbar.component.css']
})
export class WebNavbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(LoginComponent, {
      width: '500px'
    });
  }

}
