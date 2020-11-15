import { Component, OnInit ,Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css','../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/custom.css']
})
export class MenuComponent implements OnInit {

  @Output()totalorderno:number;
  constructor() { }
  takeCart()
  { 
 this.totalorderno=parseInt(sessionStorage.getItem('totalorderno'));
  }

  ngOnInit(): void {
  }

}
