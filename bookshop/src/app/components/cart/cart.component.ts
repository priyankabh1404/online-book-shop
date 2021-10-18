import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total:number = 0;
  constructor(private cartSerice: CartService) { }

  ngOnInit() {
    this.cartDetails();
    this.loadCart();
  }

  cartList:any = [];

  cartDetails(){
    if(localStorage.getItem('localCart')){
      this.cartList = JSON.parse(localStorage.getItem('localCart'));
    }
  }

  deleteCartItem(index:number, cartItem){

    this.cartList.splice(index,1);
    localStorage.setItem('localCart' , JSON.stringify(this.cartList));
    this.cartItemFunc();
    this.loadCart();
    //localStorage.removeItem('localCart', cartItem)
  }

  cartNumber:number =0;
  cartItemFunc(){

      var cartCount = JSON.parse(localStorage.getItem('localCart'))
      this.cartNumber = cartCount.length;
      this.cartSerice.cartSubject.next(this.cartNumber);
  }

  plusCount(prodId:number, qty:number){
   for(let i=0; i<this.cartList.length; i++){
    if(prodId == this.cartList[i].id){
      this.cartList[i].count  = qty + 1;
    }
   }
  localStorage.setItem('localCart', JSON.stringify(this.cartList));
  this.loadCart();
  }

  minusCount(prodId:number, qty:number){
    for(let i=0; i<this.cartList.length; i++){
      if(prodId == this.cartList[i].id){
        this.cartList[i].count = qty -1;
        if(this.cartList[i].count<=1){
          this.cartList[i].count = 1;
        }
      }
     }
    localStorage.setItem('localCart', JSON.stringify(this.cartList));
    // this.cartList[index].count --;

    this.loadCart();
  }


  loadCart(){
    if(localStorage.getItem('localCart')){
      this.cartList = JSON.parse(localStorage.getItem('localCart'));
      this.total = this.cartList.reduce(function(acc, val){
       return acc+(val.price * val.count);
      }, 0);
    }

  }

}
