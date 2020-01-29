import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { SellerPendingOrderComponent } from './seller/seller-pending-order/seller-pending-order.component';
import { SellerTransactionHistoryComponent } from './seller/seller-transaction-history/seller-transaction-history.component';
import { AppComponent } from './app.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerEditComponent } from './seller/seller-edit/seller-edit.component';
import { MessagingComponent } from './messaging/messaging.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ItemDetailComponent } from './customer/item-detail/item-detail.component';
import { ShopDisplayComponent } from './customer/shop-display/shop-display.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';

const routes: Routes = [
  // {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'seller', component: SellerComponent},
  {path: 'seller/add', component: SellerAddComponent},
  {path: 'seller/edit/:id', component: SellerEditComponent},
  {path: 'seller/message', component: MessagingComponent},
  {path: 'seller/pending-order', component: SellerPendingOrderComponent},
  {path: 'seller/transaction-history', component: SellerTransactionHistoryComponent},
  {path: 'customer', component: CustomerHomeComponent},
  {path: 'item/:id', component: ItemDetailComponent},
  {path: 'shop/:sellername', component: ShopDisplayComponent},
  {path: 'customer/history', component: OrderHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
