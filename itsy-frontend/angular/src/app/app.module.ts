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
import { SellerreviewComponent } from './review/sellerreview/sellerreview.component';
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
import { SessionComponent } from './session/session.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerRegistrationComponent } from './seller/seller-registration/seller-registration.component';
import { SessionService } from './service/session.service';
import { UrlService } from './service/url.service';
import { CustomerRegistrationComponent } from './customer/customer-registration/customer-registration.component';
import { ReviewComponent } from './review/review.component';
import { ReviewstarsComponent } from './review/reviewstars/reviewstars.component';
import { ReviewService } from './service/review.service';
import { StartConversationService } from './messaging/start-conversation.service';
import { ShoppingCartComponent } from './cart/shopping-cart/shopping-cart.component';

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
    SellerreviewComponent,
    CustomerHeaderComponent,
    CustomerHomeComponent,
    ItemDetailComponent,
    ItemDisplayComponent,
    OrderHistoryComponent,
    ShopDisplayComponent,
    SellerOrderComponent,
    SessionComponent,
    CustomerLoginComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    CustomerRegistrationComponent,
    ReviewComponent,
    ReviewstarsComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ItemService, SellerService, SessionService, UrlService, ReviewService,StartConversationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
