import {CreateCustomerComponent} from './create-customer/create-customer.component';
import {CustomerComponent} from './customer/customer.component';
import {SearchCustomerComponent} from './search-customer/search-customer.component';
 
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
 
const routes: Routes = [
  {path: '', redirectTo: 'customer', pathMatch: 'full'},
  {path: 'customer', component: CustomerComponent},
  {path: 'add', component: CreateCustomerComponent},
  {path: 'findbylastname', component: SearchCustomerComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule {}