import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import{MyserviveService} from '../myservive.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/bootstrap.min.css',
    '../../assets/css/style.css', '../../assets/css/responsive.css', '../../assets/css/custom.css']
})
export class LoginComponent implements OnInit {
invalid:boolean=false;
  submitted: boolean = false;
  loginform: FormGroup;
  constructor(private formbulider: FormBuilder,private router:Router,private myservice: MyserviveService) {
    this.loginform = this.formbulider.group(
      {

        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],



      }
    )
  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginform)
    if (this.loginform.valid) {
      this.myservice.login(this.loginform.value).subscribe((user) => {
       
        this.submitted = false;
        console.log(user);
        if(user.flag==true)
        {
          sessionStorage.setItem('login','true');
          this.router.navigate(['/menu']);
        }
        else
        {
            this.invalid=true;
        }
        //    this.spinner.show();
        //  this.users=this.myservice.getUser();
        //     setTimeout(() =>{
        //  this.spinner.hide();
        //                },1000)
      })
    }

  }
}
