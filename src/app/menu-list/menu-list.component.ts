import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter, ComponentFactoryResolver } from '@angular/core';
import {Food} from '../Food'
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css', '../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/custom.css']
})
export class MenuListComponent implements OnInit {
 
  @Output() sendCart = new EventEmitter();

  totalorderno:number;
  totalFood:Food[]=[];
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('totalorderno'))
    {
      this.totalorderno = parseInt(sessionStorage.getItem('totalorderno'));
      this.totalFood=JSON.parse(sessionStorage.getItem('totalFood'));
    }
    else
    {
      this.totalorderno =0;
     
    }
    console.log(this.totalorderno);
    // console.log(this.totalFood);

  }
  order(orderdetails:Food)
  {
   this.totalFood.push(orderdetails);
  sessionStorage.setItem('totalorderno',(++this.totalorderno).toString());
      this.sendCart.emit();
 sessionStorage.setItem((orderdetails.foodNo).toString(),JSON.stringify(orderdetails));
 sessionStorage.setItem('totalFood',JSON.stringify(this.totalFood));
  }


}
