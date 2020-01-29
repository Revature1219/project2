import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHeaderComponent } from './seller/seller-header/seller-header.component';
import { SellerAddComponent } from './seller/seller-add/seller-add.component';
import { SellerEditComponent } from './seller/seller-edit/seller-edit.component';
import { SellerItemComponent } from './seller/seller-item/seller-item.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ItemreviewComponent } from './review/itemreview/itemreview.component';
import { SellerreivewComponent } from './review/sellerreivew/sellerreivew.component';
import { from } from 'rxjs';
import { ItemService } from './service/item.service';
import { SellerService } from './service/seller.service';
import { CustomerHeaderComponent } from './customer/customer-header/customer-header.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { ItemDetailComponent } from './customer/item-detail/item-detail.component';
import { ItemDisplayComponent } from './customer/item-display/item-display.component';
import { OrderHistoryComponent } from './customer/order-history/order-history.component';
import { ShopDisplayComponent } from './customer/shop-display/shop-display.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerOrderComponent } from './seller/seller-order/seller-order.component';

@NgModule({
  declarations: [
    AppComponent,
    SellerComponent,
    SellerHeaderComponent,
    SellerAddComponent,
    SellerEditComponent,
    SellerItemComponent,
    MessagingComponent,
    ItemreviewComponent,
    SellerreivewComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    ItemDetailComponent,
    ItemDisplayComponent,
    OrderHistoryComponent,
    ShopDisplayComponent,
    SellerOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService, SellerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
