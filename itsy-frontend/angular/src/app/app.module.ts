import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHeaderComponent } from './seller/seller-header/seller-header.component';
import { SellerPendingOrderComponent } from './seller/seller-pending-order/seller-pending-order.component';
import { SellerTransactionHistoryComponent } from './seller/seller-transaction-history/seller-transaction-history.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerEditComponent } from './seller/seller-edit/seller-edit.component';
import { SellerItemComponent } from './seller/seller-item/seller-item.component';
import { SellerMessageComponent } from './seller/seller-message/seller-message.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ItemreviewComponent } from './itemreview/itemreview.component';
import { SellerreivewComponent } from './sellerreivew/sellerreivew.component';
import { ItemDetailComponent } from './user/item-detail/item-detail.component';
import { ItemDisplayComponent } from './user/item-display/item-display.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    SellerHeaderComponent,
    SellerPendingOrderComponent,
    SellerTransactionHistoryComponent,
    SellerAddComponent,
    SellerEditComponent,
    SellerItemComponent,
    SellerMessageComponent,
    MessagingComponent,
    ItemreviewComponent,
    SellerreivewComponent,
    ItemDetailComponent,
    ItemDisplayComponent,
    UserHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
