import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrl: './eventdemo.component.css'
})
export class EventdemoComponent implements OnInit{
  ngOnInit(): void {
    
  }

  public Users:any[] = [
    {UserId : 'john'},
    {UserId : 'john12'},
    {UserId : 'john123'},
    {UserId : 'david'}
  ]
 public UserMessage : string = '';
 public IsUserValid : boolean = false;


  public VerifyUserId(e:any){

    for (var user of this.Users)
    {
      if(user.UserId == e.target.value){
        this.UserMessage = 'UserId is taken, Try another';
        this.IsUserValid = false;
        break;
      }else{
        this.UserMessage = 'User Id Available'
        this.IsUserValid = true;
      }
    } 

  }  
}
