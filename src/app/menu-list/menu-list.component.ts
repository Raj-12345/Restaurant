import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css', '../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/custom.css']
})
export class MenuListComponent implements OnInit {
 totalorderno:number;
  @Output() sendCart = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if(sessionStorage.getItem('totalorderno'))
    {
      this.totalorderno = parseInt(sessionStorage.getItem('totalorderno'));
    }
    else
    {
      this.totalorderno =0;
    }
    
   
  }
  order(orderdetails:any)
  {
  console.log(orderdetails);
  
  sessionStorage.setItem('totalorderno',(++this.totalorderno).toString());
      this.sendCart.emit();
 sessionStorage.setItem(orderdetails.foodNo,JSON.stringify(orderdetails));
 
  }


}
