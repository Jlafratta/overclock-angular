import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';

import { WebComponent } from './components/web/web.component';
import { WebNavbarComponent } from './components/web/web-navbar/web-navbar.component';
import { WebFooterComponent } from './components/web/web-footer/web-footer.component';
import { WebProductListComponent } from './components/web/web-product-list/web-product-list.component';
import { LoginComponent } from './components/web/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    WebNavbarComponent,
    WebFooterComponent,
    WebProductListComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // Material UI
    MatCardModule,
    MatExpansionModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDialogModule,
    MatMenuModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
