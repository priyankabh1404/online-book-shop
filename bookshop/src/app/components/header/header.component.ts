import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cartSerice: CartService) {
    this.cartSerice.cartSubject.subscribe((data)=>{
      this.cartItem = data;
    })
  }

  ngOnInit() {
    this.cartItemFunc();
  }

  cartItem:number =0;
  cartItemFunc(){
    if(localStorage.getItem('localCart')!=null){
      var cartCount = JSON.parse(localStorage.getItem('localCart'))
      this.cartItem = cartCount.length;
    }
  }
  // cart(){
  // this.router.navigateByUrl('/cart');
  // }
}
