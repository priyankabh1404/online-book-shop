import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';



const routes = [{
   path: 'dashboard', component: DashboardComponent ,

},
{
  path: '', redirectTo: 'dashboard' , pathMatch: 'full'
},
{
  path : 'cart', component: CartComponent
}
];



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
