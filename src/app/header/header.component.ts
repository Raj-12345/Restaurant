import { Component, OnInit,Input } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','../../assets/css/bootstrap.min.css',
  '../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/custom.css']
})
export class HeaderComponent implements OnInit {

login
  constructor(private router:Router) { }
  logOut()
  {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
this.login=sessionStorage.getItem('login');
console.log(this.login);
  }

}
