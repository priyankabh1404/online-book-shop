import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../../service/crud-service.service';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Books:any=[];
  constructor(private crudApi: CrudServiceService, private cartSerice: CartService) { }
  count: number = 1;
  ngOnInit() {

    this.crudApi.getBooks().subscribe(res=>{
      console.log(res);
      this.Books = res;
    })

  }

  plusCount(index:number){
    this.Books[index].count ++;
  }

  minusCount(index:number){
    this.Books[index].count --;
    if(this.Books[index].count<=1){
      this.Books[index].count = 1;
    }
  }

  itemsCart : any = [];
  addCart(book){
    let cartDataNull = localStorage.getItem('localCart');
    if(cartDataNull == null){
      let storeDataGet:any = [];
      storeDataGet.push(book);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }else{
      var prodId = book.id;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart'));
      for(let i=0; i<this.itemsCart.length; i++){
        if(parseInt(prodId) === parseInt(this.itemsCart[i].id)){
          this.itemsCart[i].count = book.count;
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(book);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }else{
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }
    this.cartItemFunc();
  }

  cartNumber:number =0;
  cartItemFunc(){

      var cartCount = JSON.parse(localStorage.getItem('localCart'))
      this.cartNumber = cartCount.length;
      this.cartSerice.cartSubject.next(this.cartNumber);
  }

}
