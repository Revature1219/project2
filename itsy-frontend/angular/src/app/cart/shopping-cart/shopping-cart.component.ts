import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart.class';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    carts: Cart[];

    constructor() { }

    ngOnInit() {
    }

}
