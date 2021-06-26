import { Component, OnInit } from '@angular/core';
import { FormBuilder} from "@angular/forms";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });
  onSubmit(): void {
    // フォーム処理
    this.items = this.cartService.clearCart();
    console.warn('注文は送信されました', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
