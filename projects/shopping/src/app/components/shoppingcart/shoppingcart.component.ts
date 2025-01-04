import { Component } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrl: './shoppingcart.component.css'
})
export class ShoppingcartComponent {

  public Categories:string[] = [];
  public Products:any[] = [];
  public CartItems:any[] = [];
  public CartCount:number = 0;
  public isCartVisible : boolean = false;
  public Total:number = 0; 

  public GetCartCount(){
    this.CartCount = this.CartItems.length;
  }

  
  public GetCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(response=> response.json())
    .then(data => {
      data.unshift("all");
      this.Categories = data;
    })
  }

  public GetProducts(url:string){
    fetch(url)
    .then(response=> response.json())
    .then(data => {
      this.Products = data;
    })
  }


  ngOnInit(): void{
    this.GetCategories();
    this.GetProducts("https://fakestoreapi.com/products");
    this.GetCartCount();
  }


  public CategoryChanged(e:any){
    if(e.target.value == "all"){
      this.GetProducts("https://fakestoreapi.com/products")
    }
    else{
      this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
    }
  }

  public AddToCartClick(id:number){
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.json())
    .then(data=> {
      this.CartItems.push(data);
      alert(`${data.title}\nAdded to Cart`);
      this.GetCartCount();
      this.GetTotal();
    })
  }

  public ToogleCart(){
    this.isCartVisible = (this.isCartVisible==false)?true:false;
  }

  public RemoveItem(i:number){
    let flag = confirm("do you want to delete item ?")
    if(flag == true)
    this.CartItems.splice(i,1)
    this.GetCartCount();

  }

  public GetTotal(){
  
    for(let i =0; i<this.CartCount; i++){
      this.Total += this.CartItems[i].price
    }
  }

}
