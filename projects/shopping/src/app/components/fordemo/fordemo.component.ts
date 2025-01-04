import { Component } from '@angular/core';

@Component({
  selector: 'app-fordemo',
  templateUrl: './fordemo.component.html',
  styleUrl: './fordemo.component.css'
})
export class FordemoComponent {

  public mars:any = {};

  constructor(){

  }

  ngOnInit():void{
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response=>response.json())
      .then(data=>
      {
        this.mars = data; 
      }
      )
  }
  

}
