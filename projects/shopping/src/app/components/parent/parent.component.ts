import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  public MessageToChild : string = 'Message from parent will appear here'
  public ProductDetailsToChild : any ={}



  
  public SendClick(){
    this.MessageToChild = 'Message Sent from Parent'
  }

  public SendProduct(){
    this.ProductDetailsToChild = {
      Name : 'Product01',
      Number: 101  
    }
  }

}
