import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { WebProductListComponent } from './components/web/web-product-list/web-product-list.component';
import { WebComponent } from './components/web/web.component';

const routes: Routes = [

  {
    path: '', component: WebComponent,
    children: [
      { path: 'products', component: WebProductListComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
