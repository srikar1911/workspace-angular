import { I18nPluralPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() public MessageFromParent : string = '';
  @Input() public ProductDetails : any = {};



}
