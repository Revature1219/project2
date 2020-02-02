import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { AppComponent } from './app.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerEditComponent } from './seller/seller-edit/seller-edit.component';
import { MessagingComponent } from './messaging/messaging.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ItemDetailComponent } from './customer/item-detail/item-detail.component';
import { ShopDisplayComponent } from './customer/shop-display/shop-display.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { SellerOrderComponent } from './seller/seller-order/seller-order.component';
import { RegisterComponent } from './customer/register/register.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'seller', component: SellerComponent},
  {path: 'seller/add', component: SellerAddComponent},
  {path: 'seller/edit/:id', component: SellerEditComponent},
  {path: 'seller/message', component: MessagingComponent},
  {path: 'seller/order', component: SellerOrderComponent},
  {path: 'customer', component: CustomerHomeComponent},
  {path: 'item/:id', component: ItemDetailComponent},
  {path: 'shop/:sellername', component: ShopDisplayComponent},
  {path: 'customer/history', component: OrderHistoryComponent},
  {path: 'customer/login', component: CustomerLoginComponent},
  {path: 'seller/login', component: SellerLoginComponent},
  {path: 'customer/register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
