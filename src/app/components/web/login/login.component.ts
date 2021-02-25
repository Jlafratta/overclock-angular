import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // import router from angular router
import { MatDialogRef } from "@angular/material/dialog";

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private route: Router,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<LoginComponent>) { }

  hide = true;
  msgSuccess = "Login exitoso!";
  msgFailed = "Datos invalidos";

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  /**
   * Form getters
   */
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  login() {
    if(this.email.value == 'admin@overclock' && this.password.value == 'admin') {
      this.openSnackBar(this.msgSuccess);
      this.dialogRef.close();
      this.route.navigate(['/admin']);
    } else {
      this.openSnackBar(this.msgFailed);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "Cerrar", {
      duration: 2500,
    });
  }

}
