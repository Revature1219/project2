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
import { ItemreviewComponent } from './review/itemreview/itemreview.component';
import { SellerreivewComponent } from './review/sellerreivew/sellerreivew.component';
import { CustomerHeaderComponent } from './customer/customer-header/customer-header.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ItemDetailComponent } from './customer/item-detail/item-detail.component';
import { ItemDisplayComponent } from './customer/item-display/item-display.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { ShopDisplayComponent } from './customer/shop-display/shop-display.component';
import { HttpClientModule } from '@angular/common/http';

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
    CustomerHeaderComponent,
    CustomerHomeComponent,
    ItemDetailComponent,
    ItemDisplayComponent,
    OrderHistoryComponent,
    ShopDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
