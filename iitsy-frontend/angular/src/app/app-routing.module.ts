import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { SellerPendingOrderComponent } from './seller/seller-pending-order/seller-pending-order.component';
import { SellerTransactionHistoryComponent } from './seller/seller-transaction-history/seller-transaction-history.component';
import { AppComponent } from './app.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerEditComponent } from './seller/seller-edit/seller-edit.component';
import { SellerMessageComponent } from './seller/seller-message/seller-message.component';

const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'seller', component: SellerComponent},
  {path: 'seller/add', component: SellerAddComponent},
  {path: 'seller/edit', component: SellerEditComponent},
  {path: 'seller/message', component: SellerMessageComponent},
  {path: 'seller/pending-order', component: SellerPendingOrderComponent},
  {path: 'seller/transaction-history', component: SellerTransactionHistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
