import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-mycartheader',
  templateUrl: './mycartheader.component.html',
  styleUrls: ['./mycartheader.component.css','../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/custom.css']
})
export class MycartheaderComponent implements OnInit {

 
  @Input() taketotalno:number;
  constructor() { }

  ngOnInit(): void {
     if(sessionStorage.getItem('totalorderno'))
     {
          this.taketotalno=parseInt(sessionStorage.getItem('totalorderno'));
     }
     else
     {
       this.taketotalno=0;
     }
  }

  

}
