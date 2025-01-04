import { Component } from '@angular/core';
import { PristineChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-forproperties',
  templateUrl: './forproperties.component.html',
  styleUrl: './forproperties.component.css'
})
export class ForpropertiesComponent {

  public Products:any[] = [
    {Name: 'TV', Price: 4500.44},
    {Name: 'Mobile', Price: 12000.33},
    {Name: 'Watch', Price: 5000.44}
  ];

  ngOnInit() : void{
  }

  constructor(){  }

  public AddNewRecord(){
    
    this.Products = [
      {Name: 'TV', Price: 4500.44},
      {Name: 'Mobile', Price: 12000.33},
      {Name: 'Watch', Price: 5000.44},
      {Name: 'Shoe', Price : 3000.12}
    ]
  }

  public TrackChanges(index:number){
    return index;
  }

}
