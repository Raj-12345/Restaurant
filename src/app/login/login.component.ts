import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormBuilder, FormControl, Validators } from '@angular/forms';
import{MyserviceService} from '../myservice.service'
import {Router} from '@angular/router'
import { SocialAuthService } from "angularx-social-login";
import { SocialUser,GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../assets/css/bootstrap.min.css',
    '../../assets/css/style.css', '../../assets/css/responsive.css', '../../assets/css/custom.css'],
  
  })
export class LoginComponent implements OnInit {
invalid:boolean=false;
user:SocialUser;
  submitted: boolean = false;
  loginform: FormGroup;
  constructor(private socailAuthService:SocialAuthService,private formbulider: FormBuilder,private router:Router,private myservice:MyserviceService) {
    this.loginform = this.formbulider.group(
      {

        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],



      }
    )
  }


  ngOnInit(): void {
   
     this.socailAuthService.authState.subscribe((user)=> {
     
        if(user)
        {
          sessionStorage.setItem('login','true');
          sessionStorage.setItem('name',user.name);
          sessionStorage.setItem('email',user.email);
          sessionStorage.setItem('photoUrl',user.photoUrl);
       this.router.navigate(['/menu']);
        }
        else
        {
      
          this.router.navigate(['/login']);
     
        }
       })
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.loginform)
    if (this.loginform.valid) {
      this.myservice.login(this.loginform.value).subscribe((user) => {
  
        this.submitted = false;

        sessionStorage.setItem('name',user.user.name);
          sessionStorage.setItem('email',user.user.email);
          sessionStorage.setItem('photoUrl',user.user.photoUrl);
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
  gmailSignIn() {
     this.socailAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
     
     
  }

}
