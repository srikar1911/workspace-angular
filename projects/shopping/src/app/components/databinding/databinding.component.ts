import { Component } from '@angular/core';
import { ProductContract } from '../../contracts/ProductContract';


@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  
  public Product : ProductContract = {
    Name : "Product_Name",
    Price : 0,
    Stock : true,
    City: "Select a City"
    }

  
  ngOnInit():void{
 
  }
  
}
