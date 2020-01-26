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
import { SellerreviewComponent } from './review/sellerreview/sellerreview.component';
import { ReviewComponent } from './review/review.component';
import { ReviewstarsComponent } from './review/reviewstars/reviewstars.component';

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
    SellerreviewComponent,
    ReviewComponent,
    ReviewstarsComponent
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
